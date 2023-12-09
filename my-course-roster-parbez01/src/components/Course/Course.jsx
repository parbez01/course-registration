/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
const Course = ({ selectedCourse, remainingHour, totalPrice }) => {
    // console.log(selectedCourse);
    return (
        <div className='bg-base-200 w-[300px] lg:ml-20 shadow-2xl p-4 rounded-lg mb-8 lg:mb-0 '>
            {/* <h3>Total Actor:{selectedCourse.length}</h3> */}
            <h3 className='border-b-2 text-lg font-bold text-[#2F80ED] pb-3 '>Credit Hour Remaining  {remainingHour}</h3>
            <h3 className='text-xl font-bold  pt-2'>Course Name</h3>
            {
                selectedCourse.map((actor) => (

                    <li key={actor.id} className='list-decimal'>{actor.title}</li>

                ))
            }
            <h3 className=' border-t-2 border-b-2 mb-3 mt-3 text-base font-medium pt-2 pb-2'>Total Credit Hour:{totalPrice}</h3>
            <h3 className=' text-base font-medium mt-2'>Total Price:</h3>

        </div>
    );
};

export default Course;