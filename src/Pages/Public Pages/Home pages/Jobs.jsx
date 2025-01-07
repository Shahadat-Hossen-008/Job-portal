
import { useEffect, useState } from "react"
import JobCard from "./JobCard";


function Jobs () {
    const[jobs, setJobs]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(result=>{
            setJobs(result);
            
        })
    },[])
  return (
    <div className="w-11/12 mx-auto my-16">
       <h2 className="text-center text-3xl font-poppins font-extrabold text-blue-700">Find Your Jobs</h2>
       <p className="text-gray-700 text-center"> Explore jobs tailored to your skills and passion, and take the next step in your professional journey today.</p>
       <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map(job =><JobCard key={job._id} job={job}></JobCard>)}
       </div>
    </div>
  )
}

export default Jobs