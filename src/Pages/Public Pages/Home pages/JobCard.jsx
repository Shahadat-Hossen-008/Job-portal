import { Button } from "@mui/material";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const {
    _id,
    title,
    location,
    applicationDeadline,
    salaryRange,
    description,
    jobType,
    company,
    requirements,
    company_logo,
  } = job;
  return (
    <div className="card card-compact bg-emerald-50  shadow-lg p-7">
     <div className="flex items-center gap-2">
     <figure>
        <img
          className="w-14 h-14 object-cover"
          src={company_logo}
          alt="logo"
        />
      </figure>
      <div>
        <h3 className="font-bold text-xl font-poppins">{company}</h3>
        <p className="font-lato flex items-center gap-1"><FiMapPin /> {location}</p>
      </div>
     </div>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div className="flex items-center">
            <p className="flex items-center"><IoBriefcaseOutline /> {jobType}</p>
            <p className="flex items-center"><IoMdTime /> {applicationDeadline}</p>
        </div>
        <p className="overflow-hidden max-h-20">{description}</p>
        <div className="flex flex-wrap gap-2">
        {requirements?.map((requirement, index)=><p key={index} className="border p-2 rounded-lg bg-base-200 hover:text-blue-600">{requirement}</p>)}
        </div>
        <div className="card-actions flex justify-between items-center">
        <p className=" text-sm font-bold text-gray-600 text-center">{salaryRange.currency} ${salaryRange.max}</p>
          <Link to={`jobs/${_id}`}>
          <Button variant="contained">Apply Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
