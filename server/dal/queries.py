from dal.db import jobs_collection, users_collection, coach_collection, clients_collection

# Generic Queries

# Job Queries --------------

def get_all_jobs(converted_query: dict):
    return list(jobs_collection.find(converted_query['filters'])
                .skip((converted_query['page'] - 1) * converted_query['limit'])
                .limit(converted_query['limit']))

def get_jobs_with_limit(limit):
    """Fetch the first 10 jobs from the jobs collection."""
    return list(jobs_collection.find().limit(limit))

def add_job(job_data):
    """Insert a new job into the jobs collection."""
    return str(jobs_collection.insert_one(job_data).inserted_id)

def delete_job(job_id):
    """Delete a job from the jobs collection."""
    return jobs_collection.delete_one({"_id": job_id})

def get_jobs_by_wage(min_wage=None, max_wage=None):
    """Fetch jobs within a specific salary range."""
    query = {}
    if min_wage is not None and max_wage is not None:
        query["wage"] = {"$gte": min_wage, "$lte": max_wage}
    elif min_wage is not None:
        query["wage"] = {"$gte": min_wage}
    elif max_wage is not None:
        query["wage"] = {"$lte": max_wage}
    return list(jobs_collection.find(query))

def get_jobs_by_title(title):
    """Find jobs with a specific title."""
    return list(jobs_collection.find({"name": {"$regex": title, "$options": "i"}}))

def get_jobs_by_industry(industry):
    """Find jobs within a specific industry."""
    return list(jobs_collection.find({"industry": industry}))

def get_jobs_by_location(city=None, state=None):
    """Find jobs in a specific city/state."""
    query = {}
    if city:
        query["city"] = city
    if state:
        query["state"] = state
    return list(jobs_collection.find(query))

def get_jobs_by_employment_type(employment_type):
    """Find jobs that are Full-Time, Part-Time, Contract, etc."""
    return list(jobs_collection.find({"employmentType": employment_type}))

def get_jobs_by_work_type(work_type):
    """Find Remote, Hybrid, or In-Person jobs."""
    return list(jobs_collection.find({"workType": work_type}))

def get_jobs_by_skill(skill):
    """Find jobs requiring a specific skill."""
    return list(jobs_collection.find({"skills": {"$in": [skill]}}))

def get_jobs_by_company(company_name):
    """Find jobs posted by a specific company."""
    return list(jobs_collection.find({"company": company_name}))

def get_jobs_by_employer(employer_id):
    """Find jobs posted by a specific employer."""
    return list(jobs_collection.find({"employerId": employer_id}))

def get_jobs_with_highest_salaries():
    """Get the top highest-paying jobs."""
    return list(jobs_collection.find().sort("wage", -1))

def get_jobs_sorted_by_date():
    """Get the most recent job postings."""
    return list(jobs_collection.find().sort("_createdAt", -1))


# Employer Queries ---------


def get_employer_by_id(employer_id):
    """Fetch an employer by their ID."""
    return employer_collection.find_one({"_id": employer_id})

def get_employers_by_name(name):
    """Find employers by company name."""
    return list(employer_collection.find({"company": {"$regex": name, "$options": "i"}}))

def get_employers_by_email(email):
    """Find employers by email."""
    return employer_collection.find_one({"email": email})


# Coach Queries ------------


def get_coach_by_id(coach_id):
    """Fetch a coach by their ID."""
    return coach_collection.find_one({"_id": coach_id})

def get_coaches_by_name(name):
    """Find coaches by name."""
    return list(coach_collection.find({"name": {"$regex": name, "$options": "i"}}))

def get_coaches_by_email(email):
    """Find coaches by email."""
    return coach_collection.find_one({"email": email})



# Client Queires ------------
def get_client_by_id(client_id):
    """Fetch a client by their ID."""
    return clients_collection.find_one({"_id": client_id})

def update_client(client_id, update_data):
    """Update a client's information."""
    return clients_collection.update_one({"_id": client_id}, {"$set": update_data})

def get_clients_by_location(city=None, state=None):
    """Find clients in a specific location."""
    query = {}
    if city:
        query["location.city"] = city
    if state:
        query["location.state"] = state
    return list(clients_collection.find(query))

def get_clients_with_disability(disability_type):
    """Find clients with a specific disability."""
    return list(clients_collection.find({"disabilities": {"$in": [disability_type]}}))

def get_clients_by_coach(coach_id):
    """Find all clients assigned to a specific coach."""
    return list(clients_collection.find({"coachId": coach_id}))

def search_clients_by_name(name):
    """Search for a client by name."""
    return list(clients_collection.find({"name": {"$regex": name, "$options": "i"}}))



# Custom Query -----------

def get_jobs(query):
    """Submits custom query to jobs collection"""
    return (jobs_collection.find(query))

def get_coach(query):
    """Submits custom query to coach collection"""
    return (jobs_collection.find(query))

def get_clients(query):
    """Submits custom query to clients collection"""
    return (clients_collection.find(query))

def get_employer(query):
    """Submits custom query to employers collection"""
    return (employer_collection.find(query))