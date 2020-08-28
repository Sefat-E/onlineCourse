import React from 'react';
import './Department.css';


const Department = (props) => {
    // console.log(props);
    
    const {img, name, description, price} = props.subject;
    return (
        <div className="subject p-3">
            <div>
                <img className="picture" src={img} alt=""/>
            </div>
            <div className ="pl-3">
               <h5 className="subject-name text-justify">{name}</h5>
               <p className=" objective text-justify"><small><strong>Course Objective: </strong>{description}</small></p>
               <p className="price text-justify">Course fees : {price} take</p>
               <button className="main-button"
               onClick={() =>props.handleAddCourse(props.subject)}
               >enroll now</button>
            </div>
            

        </div>
    );
};

export default Department;