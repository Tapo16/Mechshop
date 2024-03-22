import React from 'react'
import banner from "../../assets/banner.jpg";

const Herosection = () => {
	return (
		<>
			<div className='relative'>
				<div>
					<img src={banner} alt="" className='w-full object-center object-cover' />
				</div>

				<div className='absolute top-[30%] left-[50%]'>
					<h1 className='text-5xl font-bold text-[red]'>Discover Your Next Adventure</h1>
					<p className='text-center text-2xl mt-5 font-semibold'>Shop our latest arrival & Unleash your style</p>
				</div>

			</div>
		</>
	)
}

export default Herosection