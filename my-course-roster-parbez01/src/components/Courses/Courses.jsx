/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Swal from 'sweetalert2';

const Courses = () => {
    
    const [remainingHour, setRemainingHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [allCourse, setAllCourse] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([]);
    


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])

    // for collected name
    const handleSelectActor = (actor) => {
        const isExist = selectedCourse.find((item) => item.id === actor.id)
        let count = actor.credit;
        if (isExist) {
            return Swal.fire(
                'Limit Exits',
                'Double Selected Are Not Granted.',
                'question'
            )
        } else {

            selectedCourse.forEach((item) => {
                count = count + item.credit;
            });

            const totalRemainingHour = 20 - count;
            if (count > 20) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops Sorry...',
                    text: 'Course Credit Complete!'

                })
            } else {
                setTotalPrice(count);
                setRemainingHour(totalRemainingHour)
                setSelectedCourse([...selectedCourse, actor])
            }
        }
    }


    return (
        <div className='max-w-screen-2xl mx-auto w-2/3'>

            <h1 className='text-3xl font-bold text-center mb-8 mt-5'>Course Registration</h1>
            <div className="flex flex-col lg:flex-row ">
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
                    {
                        allCourse.map(actor => (

                            <div key={actor.id} className='border-1 shadow-xl rounded-lg p-4'>
                                <div className="">
                                    <img src={actor.image} alt="" />
                                </div>
                                <h2 className='text-base font-semibold mt-3'>{actor.title}</h2>
                                <p className='text-sm font-normal mt-2 mb-2'><small>{actor.details}</small></p>
                                <div className="flex justify-evenly  mt-2 mb-3">
                                    <p className='mr-8 text-base fle'><span className='mr-2'>&</span>  Price :{actor.price} </p>
                                    <p className='flex '> {<svg className='mr-2 ' xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>} Credit :
                                        {actor.credit}hr</p>
                                </div>

                                <button className='bg-[#2F80ED] p-2 rounded-lg text-white w-[250px] md:w-[220px] lg:w-[260px] text-lg font-semibold' onClick={() => handleSelectActor(actor)} >Select</button>
                            </div>
                        ))
                    }
                </div>

                <div className="cart">
                    <Course selectedCourse={selectedCourse} remainingHour={remainingHour} totalPrice={totalPrice}></Course>
                </div>

            </div>

        </div>
    );
};

export default Courses;