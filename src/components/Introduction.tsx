import React from 'react'

type Props = {}

export default function Introduction({}: Props) {
  return (
    <div className='flex items-center font-bold justify-center flex-col text-center py-20 sm:py-28 md:py-32 lg:py-40 gap-12 bg-gray-100 px-6'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto'>The Gold Standard in Designer Flooring</h1>
        <p className='lg:text-lg mx-auto max-w-5xl font-normal text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cum totam deleniti obcaecati aspernatur officiis cumque hic ducimus officia, dicta ipsa facere voluptates ea repellendus. Laborum delectus soluta modi error, aspernatur consequatur porro? Laudantium pariatur illum dignissimos omnis earum ipsa quisquam dolor deleniti, tenetur minus rerum facere animi quasi quia.</p>
    </div>
  )
}