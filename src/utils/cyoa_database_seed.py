import requests
import uuid
import random
from dummy_data import story_excerpts, fantasy_titles
from faker import Faker

fake = Faker()

API_URL = "http://localhost:5186/graphql/"

def graphql_query(query, variables=None):
    response = requests.post(API_URL, json={'query': query, 'variables': variables})
    if response.status_code == 200:
        return response.json()
    else:
        # Print or log the response content for debugging
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



# Generate fantasy-themed story text
def generate_fantasy_story_text():
    # Randomly select a story excerpt
    title, text = random.choice(story_excerpts)
    return title, text


# Generate Users
user_ids = []
for _ in range(14):
    first_name = fake.first_name()  # or use fake.first_name() if you want to use Faker
    last_name = fake.last_name()   # or use fake.last_name()
    user_id = add_user(first_name, last_name)
    user_ids.append(user_id)

# Track stories created by each user
stories_created_by_user = {user_id: [] for user_id in user_ids}

difficulty_levels = ['easy', 'medium', 'hard']
age_range = [age for age in range(4, 19, 2)]  # Generates a list of even ages from 4 to 18


# Generate Stories and Story Nodes
encounter_types = ['combat', 'conversation', 'death', 'other']
for user_id in user_ids:
    story_title = random.choice(fantasy_titles)
    selected_difficulty = random.choice(difficulty_levels)
    selected_age = random.choice(age_range)
    playtime = random.randint(120, 780)  # Random playtime between 2 to 13 hours in minutes

    story_id = add_story(user_id, story_title, selected_difficulty, selected_age, playtime)
    stories_created_by_user[user_id].append(story_id)

    for _ in range(12):
        node_title, story_text = generate_fantasy_story_text()
        encounter_type = random.choice(encounter_types)
        add_story_node(story_id, node_title, story_text, encounter_type, False)


# Generate Ratings
for user_id in user_ids:
    for story_id in stories_created_by_user:
        for created_story_id in stories_created_by_user[story_id]:
            if created_story_id != story_id:
                rating_value = random.uniform(1.0, 5.0)
                add_rating(user_id, created_story_id, rating_value)

if __name__ == "__main__":
    print("Dummy data generation completed.")