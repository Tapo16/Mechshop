import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TbFiretruck } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
const Service = () => {
	return (
		<>
			<div className="container mx-auto px-5 flex pt-20  gap-10 items-center justify-center flex-wrap">
				<div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]">
					<FaShippingFast size={30} />
					<p>Free Shipping</p>
				</div>
				<div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]">
					<MdOutlinePayment size={30} />
					<p>Secure Payment</p>
				</div>
				<div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]">
					<TbFiretruck size={30}/>
					<p>Authentic Products</p>

				</div>
				<div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]">
					<MdOutlineProductionQuantityLimits size={30}/>
					<p>Easy Return</p>
				</div>


			</div>
		</>
	)
}

export default Service