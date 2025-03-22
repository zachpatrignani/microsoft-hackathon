import { Job } from '../../models/job';
import './AddJobForm.scss';
import React, { useState } from 'react';

function AddJobForm() {
    const initialFormData = {
        name: '',
        company: '',
        industry: '',
        description: '',
        skills: '',
        responsibilities: '',
        city: '',
        state: '',
        employmentType: '',
        wage: '',
        workType: '',
        employerPhone: '',
        employerEmail: '',
        website: '',
    };

    const [formData, setFormData] = useState(initialFormData);


    const formatPhoneNumber = (value: string) => {
        // Remove all non-numeric characters
        const cleaned = value.replace(/\D/g, '');

        // Format the number as (123)-123-12345
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,5})$/);
        if (!match) return value;

        const part1 = match[1] ? `(${match[1]}` : '';
        const part2 = match[2] ? `)-${match[2]}` : '';
        const part3 = match[3] ? `-${match[3]}` : '';

        return `${part1}${part2}${part3}`;
    };
    
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        // Remove all non-numeric characters
        const cleaned = value.replace(/\D/g, '');

        // Restrict to 10 digits
        if (cleaned.length > 10) return;

        // Format the phone number and update the state
        const formattedPhone = formatPhoneNumber(value);
        setFormData({
            ...formData,
            employerPhone: formattedPhone,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        try {
        const response = await fetch('http://localhost:8000/server/api/jobs', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        const result = await response.json();
        console.log('Job added successfully:', result);
        alert('Job added successfully!');
        setFormData(initialFormData);
        } else {
        console.error('Failed to add job');
        alert('Failed to add job');
        }
        } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the job');
        }
    };

    return (
        <div className="AddJobForm">
            <h1>Add a New Job</h1>
            <form onSubmit={handleSubmit}>
                <p>Employers are encouraged to add jobs that can accomodate people of varying levels of abilities. Learn more about inclusive employment at <a href="https://apse.org">ASPE.org</a>.</p>
                <h2>Job Information</h2>
                <div className="form-group">
                    <label htmlFor="name">Job Title</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter job title"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Company Website</label>
                    <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Enter company website"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="industry">Industry</label>
                    <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="Enter industry name"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Job Description</label>
                    <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter job description"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Enter skills list"
                    required
                    />
                    </div>
                <div className="form-group">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <textarea
                    id="responsibilities"
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleChange}
                    placeholder="Enter job responsibilities"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city where job is located"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    >
                        <option value="" disabled>
                        State
                        </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="employmentType">Employment Type</label>
                    <select
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    required
                    >
                        <option value="" disabled>
                        Employment type
                        </option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Intern">Intern</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="wage">Salary</label>
                    <input
                    type="number"
                    id="wage"
                    name="wage"
                    value={formData.wage}
                    onChange={handleChange}
                    placeholder="Enter yearly salary"
                    min="0"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="workType">Work Type</label>
                    <select
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    required
                    >
                        <option value="" disabled>
                        Work type
                        </option>
                        <option value="Remote">Remote</option>
                        <option value="In-Person">In-Person</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <h2>Contact Information</h2>
                <div className="form-group">
                    <label htmlFor="employerEmail">Email</label>
                    <input
                    type="employerEmail"
                    id="employerEmail"
                    name="employerEmail"
                    value={formData.employerEmail}
                    onChange={handleChange}
                    placeholder="Enter contact email"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type="employerPhone"
                    id="employerPhone"
                    name="employerPhone"
                    value={formData.employerPhone}
                    onChange={handlePhoneChange}
                    placeholder="Enter contact phone number"
                    required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddJobForm;
