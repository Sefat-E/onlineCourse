import React from 'react';
import fakeData from '../../fakeData/onlineClass.js';
import { useState } from 'react';
import './Courses.css';
import Department from '../Department/Department';
import Cart from '../Cart/Cart.js';
const Courses = () => {
    const first12 = fakeData.slice(0,12);
    const [course,setCourse] = useState(first12);
    const [cart,setCart] =useState([]);
    const handleAddCourse = (subject) =>{
        const newCart = [...cart,subject];
        setCart(newCart);
    }
    return (
        <div className="course-container container-fluid ">
            <div className="subject-container">
                <ul>
                    {
                        course.map(sub =><Department
                            handleAddCourse={handleAddCourse} 
                            
                            subject={sub}></Department>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

            
        </div>
    );
};

export default Courses;