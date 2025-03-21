import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home-container">
        <img src="/planet.jpg" className="main-image" alt="Planet" />
        <div className="info-box">
          <h2>Welcome to Interstellar Jobs</h2>
          <p>We provide AI-powered job recommendations that connect people with disabilities or impairments to accessible employment opportunities.</p>
          <a href="/job-board">Start Exploring</a>
        </div>
      </div>

      <div className="instruction-container">
        <div className="instruction-formatter">
          <div className="instruction-box">
            <p>Search a database of jobs posted by inclusive, accessible employers.</p>
            <img src="/ai_logo.png" className="ai-logo"/>
            <p>Receive personalized, AI-generated recommendations that highlight potential strengths and challenges based on individual characteristics.</p>
          </div>
          <img src="/job_board.png" className="job-board-image" alt="Job board with AI generated feedback based on client information." />  
        </div>
      </div>

      <div className="quote-text">Facilitating connections for an inclusive workspace</div>
      
      <div className="row-container">
        <div className="card">
          <img src="/astronaut_dog.jpg" alt="Astronaut with dog" className="circle-image" />
          <h2>Job Candidate</h2>
          <p>Job seekers can use the website independently or with the assistance of a job coach to find roles that best align with their abilities and needs.</p>
        </div>
        <div className="card">
          <img src="/coach.jpg" alt="Astronaut holding laptop" className="circle-image" />
          <h2>Job Coach</h2>
          <p>Job coaches can input candidate information to receive tailored feedback on job matches. Coaches may export a list of potential roles along with AI-generated feedback on how well each job fits the candidate, supporting more effective placements.</p>
        </div>
        <div className="card">
          <img src="/employer.jpg" alt="Astronaut waving with heart" className="circle-image" />
          <h2>Employer</h2>
          <p>Employers can post job listings to find candidates whose abilities align with their role requirements and workplace accommodations.</p>
        </div>
      </div>

      <div className="warning-container">
          <img src="/warning.png" />
          <h2>Explore Responsibly</h2>
          <p>This platform can optionally use AI to generate feedback for specific jobs based on candidate information. </p>
          <p>If you choose to generate AI insights, you'll be prompted to enter job preferences and relevant impairments. This data is used solely to create a summary of strengths and potential challenges related to the selected job. The information you provide is confidential and will not be stored. </p>
          <p>The more detailed your input, the better the recommendations you'll receive.</p>
      </div>
    </>
  );
}

export default Home;