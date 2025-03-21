# Interstellar Jobs


## Features
- 
- 
- 

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

## Next Steps
- 
- 
- 