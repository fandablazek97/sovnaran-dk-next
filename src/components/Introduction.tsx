import React from 'react'

type Props = {}

export default function Introduction({}: Props) {
  return (
    <div id="about-us" className='flex items-center font-bold justify-center flex-col text-center py-20 sm:py-28 md:py-32 lg:py-40 gap-12 bg-gray-100 px-6'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto'>Quality Meets Adventure</h2>
        <p className='lg:text-lg mx-auto max-w-5xl font-normal text-gray-700'>We understand that your outdoor gear should be as reliable as your sense of adventure. That is why we source our products from trusted brands known for their commitment to quality and innovation. From cutting-edge camping technology to time-tested hiking essentials, every item in our inventory is a testament to our dedication to helping you embark on your next journey with confidence.</p>
    </div>
  )
}