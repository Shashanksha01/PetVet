import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const DocTypes = () => {
  return (
    <div className='flex flex-col gap-4 items-center py-16 text-gray-800' id='docType'>
      <h1 className='text-4xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='grid grid-cols-2 md:flex justify-center md:gap-4 w-full pt-5'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
          <img className='w-16 sm:w-24' src={item.image}/>
          <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DocTypes
