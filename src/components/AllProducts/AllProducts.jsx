import { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import axios from "axios";
import login from '../../assets/login.png'

const AllProducts = () => {


	const [allProducts, setAllProducts] = useState([]);

	const [originalProducts,setOriginalProducts] = useState([])


	const [allCategory, setAllCategory] = useState([])

	const [selectProducts, setSelectProducts] = useState("")


	// All Products

	useEffect(() => {
		const AllProducts = async () => {
			const res = await axios("https://dummyjson.com/products")
			setAllProducts(res.data.products);
			setOriginalProducts(res.data.products)
		}

		AllProducts();
	}, [])





	// product category

	useEffect(() => {
		const getAllProductsCategory = async () => {

			try {
				const res = await axios("https://dummyjson.com/products/categories")
				setAllCategory(res.data)
			} catch (error) {
				console.log(error)
			}
		}


		getAllProductsCategory();

	}, [])



	const filterProducts = (selectcategory) => {
		setSelectProducts(selectcategory);

		const data =  selectcategory? originalProducts.filter((filterItem) => filterItem.category === selectcategory)
		:originalProducts
		setAllProducts(data)
		// console.log(allProducts)
	};


	// single products




	return (
		<>

			<Layout>
				<div className='relative'>
					<img src={login} alt="" className="object-cover w-full object-center h-[200px] mt-5" />
					<div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
					<h2 className='absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>AllProducts</h2>
				</div>


				{/* products category section*/}
				<div className="flex gap-3 flex-wrap">

					<select onChange={(e) => filterProducts(e.target.value)}>
						<option>Filter The Products</option>

						{allCategory.filter((filterItem) => !["automotive", "motorcycle", "lighting", "furniture"].includes(filterItem)).map((item, index) => (
							<option value={item} key={index}>{item}</option>


						))}
					</select>
				</div>


				{/* single products section  */}

				{/* all products */}
				<div className=" flex gap-4 flex-wrap justify-center">
					{
						allProducts.map((AllItems, index) => (
							<div key={index} className="border-4">
								<img src={AllItems.thumbnail} alt="" className="object-cover object-center block" />
								<div className="mt-4">
									<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title:{AllItems.title}</h3>
									<h2 className="text-gray-900 title-font text-lg font-medium">Rating:{AllItems.rating}</h2>
									<p className="mt-1">Price:{AllItems.price}Rs.</p>
								</div>
							</div>
						))
					}
				</div>









			</Layout>

		</>
	)
}

export default AllProducts