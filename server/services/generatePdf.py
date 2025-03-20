
def create_page(jobObject):

    header = fr"""

    <div style="display: flex; align-items: center;">
    <div>
        <h2><strong>{jobObject["name"]}</strong></h2>
        <p><strong>{jobObject["company"]}</strong></p>
        <p>{jobObject["city"]}, {jobObject["state"]} - {jobObject["employmentType"]}, {jobObject["workType"]}</p>
        <p>${jobObject["wage"]}/year</p>
        <p>posted {jobObject["_createdAt"]}</p>
    </div>
    <img src="https://logo.clearbit.com/{jobObject["website"]}" alt="Company Logo" style="width: 120px; margin-top: 50px; margin-left: 30px;">
    </div>

    ---
    """


    contact = fr"""
    ## Contact

    Employer Phone

    {jobObject["employerPhone"]}

    Employer Email

    {jobObject["employerEmail"]}

    ---
    """



    description = fr"""
    ## Job Description
    **{jobObject["name"]}**
    {jobObject["description"]}
    """

    
    responsibilities = jobObject["responsibilities"].split(" and ")


    skills = jobObject["skills"].split(",")
    if len(skills) > 0 and skills[-1] == "":
        skills.pop()


    matches = fr"""
    ---

    ## Matching Strengths
    <div style="padding: 20px; border-radius: 5px; background-color: #B2fba5; color: green;">
    **Matching Strengths:** 
    
    """ + \
    formattedBulletList(jobObject["matching"]) + \
    fr"""
    </div>
    
    """

    challenges = fr"""
    ---

    ## Potential Challenges
    <div style="padding: 20px; border-radius: 5px; background-color: #ff746c; color: darkred;">
    **Potential Challenges:**  
    
    """ + \
    formattedBulletList(jobObject["challenges"]) + \
    fr"""
    </div>

    """

    return header + contact + description + responsibilities + skills + matches + challenges


def formattedBulletList(rawList):
    retVal = ""
    for value in rawList:
        retVal += fr"""
        - {value}
        """
    return retVal