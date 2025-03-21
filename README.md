# Interstellar Jobs 🪐
We provide AI-powered job recommendations that connect people with disabilities or impairments to accessible employment opportunities.

Search a database of jobs posted by inclusive, accessible employers & receive personalized, AI-generated recommendations that highlight potential strengths and challenges based on individual characteristics.

## Features
:star2: feature1

:star2: feature2

:star2: feature3

## Software Stack
- Azure Cosmos DB
- 
- React
- Python

## Demo
    Insert link

## Environment Variables
In order to run this project, you will need to add the following information to your .env file in server/.env. These Azure services should be created:

Azure Services:

- 
- 

The server/.env file format:
```
COSMOS_DB_URI=<Your path to Cosmos DB>
DATABASE_NAME=<Your Database name>

COMPLETIONS_AZURE_ENDPOINT=<Your Azure Completions Endpoint>
COMPLETIONS_API_KEY=<Your Azure Completions API Key>
COMPLETIONS_API_VERSION=2024-06-01
COMPLETIONS_MODEL=gpt-4o
```

## Local Run Instructions

Note: In order to run this project locally, you will need to setup Azure resources.

Clone the project

```bash
  git clone https://github.com/zachpatrignani/microsoft-hackathon.git
```

Navigate to the /client directory

```bash
  npm install
  npm start
```

Navigate to the /server directory

```bash
  pip install -r requirements.txt
  python3 main.py
```

## What's Next?
Our vision is bigger than our timeline. Here's some features we would love to implement in the future:

- **Authentication & Profiles for Each User Type.** Create authentication and profile management for three user types: Job Candidate, Job Coach, and Employer. Job Coaches should be able to create or manage profiles on behalf of their candidates, storing key information such as location, needs, interests, and resumes. This data would automatically feed into the AI job recommendation system.
- **Job Coach Collaboration Tools** Enable Job Coaches to share Job Candidate profiles and notes. We aim to support every step of the employment process by providing Job Coaches with the tools needed for their candidates' success. This includes the ability to transfer candidate profiles to another coach if needed and to record notes during the employment journey. These notes can help inform future job matches.
- **Employer Resources for Accessible Employment.** As part of our mission to promote inclusive employment, we want to provide employers with resources that support the integration of employees with disabilities. These materials will help ensure employers are informed, confident, and successful in creating accessible workplaces.

## Attribution
See the following attribution for images in client/public:
- planet.png [Saturn icons created by max.icons - Flaticon](https://www.flaticon.com/free-icons/saturn)
- ai_logo.png [Shine icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/shine)
- warning.png [Attention icons created by Andrean Prabowo - Flaticon](https://www.flaticon.com/free-icons/attention)
- planet.jpg, astronaut_dog.jpg, coach.jpg, employer.jpg [Images Designed by Freepik](https://www.freepik.com/)
