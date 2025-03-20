


import { Job } from "../models/job"
import { Note } from "../models/note"

export const createPage = (jobObject : Job, noteObject : Note | undefined) => {
    const header = `

<div style="display: flex; align-items: center;">
<div>
    <h2><strong>${jobObject.name}</strong></h2>
    <p><strong>${jobObject.company}S</strong></p>
    <p>${jobObject.city}, ${jobObject.state} - ${jobObject.employmentType}, ${jobObject.workType}</p>
    <p>$${jobObject.wage}/year</p>
    <p>posted ${jobObject._createdAt}</p>
</div>
<img src="https://logo.clearbit.com/${jobObject.website}" alt="Company Logo" style="width: 120px; margin-top: 50px; margin-left: 30px;">
</div>

---
    `
    const contact = `
## Contact

**Employer Phone**

${jobObject.employerPhone}

**Employer Email**

${jobObject.employerEmail}

---
    `

    const description = `
## Job Description

**${jobObject.name}**

${jobObject.description}
    `

    const responsibilities : string[] | undefined = jobObject.responsibilities?.split(" and ");

    const skills = jobObject.skills?.split(", ");

    const matches = `
---

## Matching Strengths

<div style="padding: 20px; border-radius: 5px; background-color: #B2fba5; color: green;">
`


    const challenges = `
---

## Potential Challenges

<div style="padding: 20px; border-radius: 5px; background-color: #ff746c; color: darkred;">

`

    let returnString = "";

    returnString += header;
    returnString += contact;
    returnString += description;
    returnString += `\n**Responsibilities**\n\n`;
    if (responsibilities !== undefined) {
        for (let responsibility of responsibilities) {
            returnString += `- ${responsibility}\n`;

        }
    }
    
    returnString += `\n**Skills**\n\n`
    if (skills !== undefined) {
        for (let skill of skills) {
            returnString += `- ${skill}\n`;

        }
    }

    

    returnString += matches;

    if (noteObject?.matchNotes !== undefined) {
        for (let match of noteObject.matchNotes) {
            returnString += `- ${match}\n`;
        }
    }

    returnString += `
</div>
`


    returnString += challenges;

    if (noteObject?.challengeNotes !== undefined) {
        for (let challenge of noteObject.challengeNotes) {
            returnString += `- ${challenge}\n`;
        }
    }

    returnString += `
</div>
`

    return returnString;

}
















