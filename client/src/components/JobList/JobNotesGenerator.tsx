import React from 'react';
import './JobListContainer.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Job } from '../../models/job';
import './JobNotesGenerator.scss';


interface textInput {
    preferenceText?: string,
    impairmentText?: string
}


const JobNotesGenerator: React.FC = () => {


    const [showModal, setShowModal] = useState<boolean>(false);

    const [textInput, setTextInput] = useState<textInput>({
        preferenceText : "",
        impairmentText: ""
    });


    // const dispatch = useDispatch();
    // const exportMap = useSelector((state: RootState) => state.exportSlice.allSelectedJobs);
    // const currentPage = useSelector((state: RootState) => state.jobList.currentPage);
    // const [checkBoxState, setCheckBoxState] = useState<boolean>(exportMap.has(jobObject._id));

    const handleOpenModalClick = () => {
        setShowModal(true);
    }

    const handleGenerateClick = () => {
        setShowModal(false);
    }

    const handleCancelClick = () => {
        setShowModal(false);
    }

    const handleInputChange = (field: string, value: string) => {
        setTextInput((prevState) => ({
            ...prevState,  
            [field]: value 
        }));
    };

    

    return (
        <div className='generate-button-container'>
            { showModal && <div className='job-notes-generator-modal'>
                <div className='modal'>
                    <div className='prompt'>Please enter job preferences:</div>
                    
                    <textarea 
                        className="job-input"
                        rows={8}
                        placeholder="Enter your job preferences here..."
                        onChange={(e)=>{handleInputChange("preferenceText", e.target.value)}}
                    >
                        {textInput.preferenceText}
                    </textarea>

                    <div className='prompt'>Please list any impairments:</div>
                    
                    <textarea
                        className="job-input"
                        rows={8}
                        placeholder="Enter any impairments here..."
                        onChange={(e)=>{handleInputChange("impairmentText", e.target.value)}}
                    >
                        {textInput.impairmentText}
                    </textarea>
                    
                    <div className='button-container'>
                        <button className='cancel-button' onClick={()=>{handleCancelClick()}}>Cancel</button>
                        <button className='save-button' onClick={()=>{handleGenerateClick()}}>Generate</button>
                    </div>
                </div>
            </div>}
            <button className='generate-button' onClick={()=>{handleOpenModalClick()}}>Generate AI Notes</button>
        </div>
    );
  };
  
  

export default JobNotesGenerator;