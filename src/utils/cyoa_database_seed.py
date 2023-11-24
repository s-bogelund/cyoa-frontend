import requests
import uuid
import random
from db_seed_data import story_excerpts, fantasy_titles
from faker import Faker

fake = Faker()

API_URL = "http://localhost:5186/graphql/"

def graphql_query(query, variables=None):
    response = requests.post(API_URL, json={'query': query, 'variables': variables})
    if response.status_code == 200:
        return response.json()
    else:
        print("Response content:", response.content)
        raise Exception(f"Query failed with status code {response.status_code}")

def add_user(first_name, last_name):
    mutation = """
    mutation AddUser($input: UserAddInput!) {
        addUser(input: $input) {
            id
        }
    }
    """
    variables = {
        "input": {
            "firstName": first_name,
            "lastName": last_name,
            "authZeroUserId": str(uuid.uuid4())
        }
    }
    return graphql_query(mutation, variables)["data"]["addUser"]["id"]

def add_story(user_id, title, difficulty, target_age, playtime):
    mutation = """
    mutation AddStory($input: StoryAddInput!) {
        addStory(input: $input) {
            id
        }
    }
    """
    variables = {
        "input": {
            "userId": user_id,
            "title": title,
            "difficulty": difficulty,
            "targetAge": target_age,
            "playtime": playtime
        }
    }
    return graphql_query(mutation, variables)["data"]["addStory"]["id"]

def add_story_node(story_id, title, story_text, encounter_type, is_checkpoint):
    mutation = """
    mutation AddStoryNode($input: StoryNodeAddInput!) {
        addStoryNode(input: $input) {
            id
        }
    }
    """
    variables = {
        "input": {
            "storyId": story_id,
            "title": title,
            "storyText": story_text,
            "encounterType": encounter_type,
            "isCheckpoint": is_checkpoint
        }
    }
    return graphql_query(mutation, variables)["data"]["addStoryNode"]["id"]

def add_story_node_option(story_node_id, destination_node_id, option_text):
    mutation = """
    mutation AddStoryNodeOption($input: StoryNodeOptionAddInput!) {
        addStoryNodeOption(input: $input) {
            id
        }
    }
    """
    variables = {
        "input": {
            "storyNodeId": story_node_id,
            "destinationNode": destination_node_id,
            "optionText": option_text
        }
    }
    return graphql_query(mutation, variables)["data"]["addStoryNodeOption"]["id"]

def add_rating(user_id, story_id, rating_value):
    mutation = """
    mutation AddRating($input: RatingAddInput!) {
        addRating(input: $input) {
            id
        }
    }
    """
    variables = {
        "input": {
            "userId": user_id,
            "storyId": story_id,
            "ratingValue": rating_value
        }
    }
    return graphql_query(mutation, variables)["data"]["addRating"]["id"]

def generate_fantasy_story_text():
    title, text = random.choice(story_excerpts)
    return title, text

if __name__ == "__main__":
    user_ids = []
    for _ in range(14):
        first_name = fake.first_name()
        last_name = fake.last_name()
        user_id = add_user(first_name, last_name)
        user_ids.append(user_id)

    stories_created_by_user = {user_id: [] for user_id in user_ids}
    difficulty_levels = ['easy', 'medium', 'hard']
    age_range = [age for age in range(4, 19, 2)]

    for user_id in user_ids:
        story_title = random.choice(fantasy_titles)
        selected_difficulty = random.choice(difficulty_levels)
        selected_age = random.choice(age_range)
        playtime = random.randint(120, 780)

        story_id = add_story(user_id, story_title, selected_difficulty, selected_age, playtime)
        stories_created_by_user[user_id].append(story_id)

        story_nodes = []
        for _ in range(12):
            node_title, story_text = generate_fantasy_story_text()
            encounter_type = random.choice(['combat', 'conversation', 'death', 'other'])
            story_node_id = add_story_node(story_id, node_title, story_text, encounter_type, False)
            story_nodes.append(story_node_id)

        for i, node_id in enumerate(story_nodes):
            if i == 0: continue  # Skip the root node
            options_count = random.randint(2, 4)  # Each node will have 2-4 options
            for _ in range(options_count):
                destination_node_id = random.choice([nid for nid in story_nodes if nid != node_id])
                option_text = fake.sentence(nb_words=6)
                add_story_node_option(node_id, destination_node_id, option_text)

    print("Dummy data generation completed.")
