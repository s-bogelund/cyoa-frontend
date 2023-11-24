import requests
import uuid
import random
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

story_excerpts = [
    ("Grotten ved Elverstrømmen", "Du når til en fortryllet grotte ved Elverstrømmen, hvor vandets hvisken synes at tale. Inde i grotten opdager du tre funklende sten, hver isat magiske symboler. En ældgammel indskrift på væggen antyder, at kun én sten kan bane vejen fremad. En kraftfuld energi pulserer fra stenene, og du føler, at dit valg vil have betydelige konsekvenser. A. Vælg den røde sten, som gløder som ild. B. Vælg den blå sten, som minder om dybet af havet. C. Vælg den grønne sten, der vibrerer med naturens liv."),
    ("Den Forseglede Port", "Efter en lang rejse når du til en gammel, forseglet port. To vagter, en lavet af ild og den anden af is, blokerer din vej. De stiller dig et ultimatum: Kun ved at løse deres gåde, vil porten åbne sig. Ildvagten hvisker: 'Min bror er kold og ubøjelig, mens jeg brænder med passion og kraft. Vælg mig for at møde flammernes udfordring.' A. Vælg ildvagten og forbered dig på en prøvelse af ild. B. Vælg isvagten og forbered dig på en prøvelse af is. C. Forsøg at overtale dem til at lade dig passere uden en prøvelse."),
    ("Det Hemmelige Bibliotek", "I det hemmelige bibliotek i Troldmandens Tårn finder du tre bøger. Den første bog stråler med et guddommeligt lys, den anden er indbundet i mørke skind, og den tredje ser helt almindelig ud, men pulserer med en mystisk kraft. Bibliotekarens ånd åbenbarer sig og forklarer, at hver bog vil tage dig med på en unik rejse gennem magiens verden. A. Læs den lysende bog og udforsk lysets magi. B. Læs den mørke bog og lær om skyggemagi. C. Læs den almindelige bog og opdag ukendte magiske veje."),
    ("Valget ved Den Tidsløse Sø", "Du ankommer til Den Tidsløse Sø, et sted hvor tid synes at stå stille. Midt i søen er en ø med et skinnende alter. En båd og en svømmevest ligger på bredden. En ældgammel ånd fortæller dig, at valget af transport vil afgøre din skæbne. A. Vælg båden og ro stille over til øen. B. Tag svømmevesten på og svøm over til øen. C. Vent ved bredden for at se, om der sker noget usædvanligt."),
    ("Den Forbandede Skov", "I Den Forbandede Skov støder du på tre stier. En fører til et lysskin, den anden til mørke skygger, og den tredje ser ud til at forsvinde. En ugle på en gren taler til dig: 'Vælg din sti med omhu, for ikke alle fører tilbage.' A. Følg stien mod lyset. B. Vove dig ind i skyggerne. C. Tag den forsvindende sti og se, hvor den fører hen."),
    ("Stenen i Klippehulen", "I en klippehule finder du en lysende sten i en krystal. Den hvisker historier om gamle tider og fremtider. En gammel skrift på væggen giver dig tre muligheder for at bruge stenen. A. Brug stenen til at se ind i fremtiden. B. Brug stenen til at ændre en begivenhed i din fortid. C. Efterlad stenen for fremtidige rejsende at finde."),
    ("Krydsning ved Den Glemte Flod", "Ved Den Glemte Flods bredder, står du over for en krydsning. En færgefører tilbyder dig en overfart, men kræver en høj pris. Et svagt vadested er synligt længere nede ad floden, men det ser farligt ud. A. Betal færgeføreren for en sikker overfart. B. Risikér at krydse ved vadestedet. C. Camp ved floden og vent på en bedre mulighed."),
    ("Mødet med Skovens Vogter", "I skovens dyb finder du Skovens Vogter, et væsen af træ og blad. Den præsenterer dig for et valg: Beskyt skoven mod indtrængere, eller hjælp med at helbrede dens syge træer. A. Vælg at beskytte skoven og bliv en del af dens forsvar. B. Vælg at helbrede træerne og lær hemmelighederne af skovens magi. C. Afslå begge og fortsæt din rejse."),
    ("Mødet med Den Gyldne Drage", "På toppen af et forladt tårn møder du Den Gyldne Drage. Den tilbyder dig et valg mellem tre gaver: en pose med uendelige guld, et sværd af reneste lys, eller en bog med glemt viden. A. Vælg guldposen og bliv rig ud over alle grænser. B. Vælg sværdet og bliv en uovervindelig kriger. C. Vælg bogen og lær de ældgamle hemmeligheder."),
    ("Tågens Hersker", "På din vej gennem den tætte tåge i Dødens Dal, møder du en skikkelse, der tilbyder dig vejledning. Han er Tågens Hersker, og hans øjne lyser som måneskin. 'Jeg kan føre dig sikkert gennem tågen,' siger han, 'men alt har sin pris.' A. Acceptér hans hjælp, men forbered dig på at betale prisen. B. Afslå og forsøg at finde din egen vej. C. Bed om at vide prisen, før du træffer en beslutning."),
    ("Det Forladte Tårn", "Du ankommer til et forladt tårn omgivet af en aura af magi og mysterium. Tårnet gemmer på en kraftig artefakt, men også en gammel forbandelse. Du står foran tårnets tunge dør og overvejer dine muligheder. A. Gå ind i tårnet og konfronter forbandelsen for at få artefakten. B. Undersøg området omkring tårnet for mere information. C. Vend tilbage til byen for at søge hjælp."),
    ("Heksens Tilbud", "I en mørk skov møder du en heks, der tilbyder dig en kraftfuld eliksir. 'Denne drik vil give dig styrke, men også en stor risiko,' siger hun med et listigt smil. A. Tag imod eliksiren og drik den med det samme. B. Afvis hendes tilbud og fortsæt din rejse. C. Tag eliksiren med dig, men vent med at drikke den."),
    ("Den Sidste Drageæg", "I en hule dybt inde i Dragebjergene finder du det sidste kendte drageæg. Det er varmt at røre ved og lyser svagt. Rundt om dig lurer skygger, og du mærker fare. A. Tag ægget og forsøg at beskytte det. B. Forlad ægget og skynd dig væk fra hulen. C. Vent og observer, hvad der sker med ægget."),    ("Den Glemte Konges Gåder", "Du finder ruinerne af en gammel konges gravkammer dybt i skoven. Væggene er dækket af gådefulde hieroglyffer og forunderlige kunstværker. Midt i kammeret står en gylden sarkofag, som ser ud til at være ulåst. En stemme hvisker i vinden, 'Vælg klogt, for hvert valg har sin pris.' A. Åbn sarkofagen for at afsløre dens hemmeligheder. B. Undersøg hieroglyfferne for at forstå mere, før du handler. C. Forlad kammeret og søg efter flere ledetråde i skoven."),
    ("Skyggedanseren", "I en forladt landsby møder du en mystisk skikkelse, der danser i måneskinnet. Hun er kendt som Skyggedanseren og tilbyder at lære dig dansens magiske kræfter. 'Dans med mig, og lær skyggernes sprog,' siger hun. A. Dans med Skyggedanseren og lær hendes hemmeligheder. B. Afvis hendes tilbud og fortsæt din søgen. C. Iagttag hende på afstand for at lære mere."),
    ("Den Forsvundne Elverprins", "På din rejse støder du på spor af en forsvunden elverprins, der siges at kende til en hemmelig passage gennem bjergene. Din vej fører dig til en kryptisk korsvej, hvor veje skilles. A. Følg sporene i håb om at finde elverprinsen. B. Ignorer sporene og vælg din egen sti. C. Opsøg lokalbefolkningen for at få flere oplysninger."),
    ("Oraklets Visionsbrønd", "I en gammel ruin finder du Oraklets Visionsbrønd, som siges at kunne vise fremtiden. Vandet i brønden glitrer underligt, og luften er tyk af mystik. Oraklet viser sig som en tågefigur og tilbyder dig et kig ind i fremtiden. A. Kig i brønden og bed om at se din egen skæbne. B. Spørg Oraklet om verdens fremtid. C. Afstå fra at bruge brønden og bevar mysteriet."),
    ("Fortabte Sjæles Dal", "På din færd kommer du til Fortabte Sjæles Dal, hvor ånderne af de fortabte hviler. En ældgammel ånd tilbyder at guide dig gennem dalen, men advarer om, at vejen er fyldt med fare. A. Følg åndens vejledning igennem dalen. B. Find din egen vej uden om dalen. C. Brug dine evner til at kommunikere med andre ånder for yderligere indsigt."),
    ("Under Månelyset", "Mens du vandrer gennem en tæt skov under månens fulde skær, støder du på en lille lysning. Her danser feer i månelyset, indbydende og gådefulde. De tilbyder dig en chance for at deltage i deres dans og opleve skovens skjulte magi. A. Dans med feerne og lad dem føre dig ind i deres verden. B. Observer dansen fra kanten af lysningen. C. Fortsæt din rejse, og lad feerne være."),
    ("Ved Skillevejen", "Efter timers rejse når du til et kritisk skillevej. En sti fører ind i en dunkel skov, den anden krydser en gammel, knirkende bro. Din intuition hvisker til dig, men valget er svært. A. Vælg stien, der fører ind i skoven. B. Kryds broen for at se, hvad der venter på den anden side. C. Slå lejr her og vent på yderligere tegn."),
    ("I Elvernes Skjul", "Du opdager en hemmelig sti, der fører til elvernes skjul. Her finder du en elver, der maler billeder af fremtiden. Hun tilbyder at male et billede for dig, men advarer om, at ikke alle visioner er behagelige. A. Lad elveren male dit fremtidsbillede. B. Afvis tilbuddet og stil hende spørgsmål om skovens hemmeligheder. C. Forlad skjulet uden yderligere interaktion."),
    ("Natten ved Bålet", "Mens du hviler ved et bål i en mørk dal, dukker en gammel eremit op. Han deler historier om dalens fortid og tilbyder dig et valg af to talismaner. 'Den ene vil beskytte dig, den anden vil give dig indsigt,' siger han. A. Vælg talismanen for beskyttelse. B. Vælg talismanen for indsigt. C. Afslå begge og fortsæt med din rejse alene.")
]

# Generate fantasy-themed story text
def generate_fantasy_story_text():
    # Randomly select a story excerpt
    title, text = random.choice(story_excerpts)
    return title, text

fantasy_titles = [
    "Dragens Sidste Flugt",
    "Skjulte Riger, Glemt af Tid",
    "Skyggers Hvisken",
    "Krystallernes Hemmelighed",
    "Vandringen til Forbandede Lande",
    "Den Evige Tåges Fængsel",
    "Nattens Vægtere",
    "Stjernestøvets Forbandelse",
    "Ildens Arving",
    "Tidsrejsendes Skæbner",
    "Bavianernes Konge",
    "Den Glemte Skov",
    "Den Sidste Heks",
    "Bøgernes Magi",
    "Den Sidste Drage",
    "Den Forbudte Ø",
    "Klippehulens Forbandelse",
    "Flodens Munding",
    "Krabbernes Hævn",
    "Varulvens Dystre Skæbne",
    "Den Sidste Enhjørning",
    "Slimets Spredning",
    "Glemslens Dybe Vand",
    "Tågeøens Hemmeligheder",
    "Ildfuglens Sang",
    "Skjulte Stier, Mørke Hemmeligheder",
    "Spejlets Gåde",
    "Troldmandens Sidste Prøve"
]

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