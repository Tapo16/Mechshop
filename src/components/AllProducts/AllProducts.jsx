import { useEffect, useState } from 'react'
import axios from "axios";
import login from '../../assets/login.png'
import { Link } from 'react-router-dom';

const AllProducts = ({ AddToCart }) => {


	const [allProducts, setAllProducts] = useState([]);

	const [originalProducts, setOriginalProducts] = useState([])


	const [allCategory, setAllCategory] = useState([])

	const [selectProducts, setSelectProducts] = useState("")

	const [searchItem, setSearchItem] = useState("")

	const [minPrice, setMinPrice] = useState("")
	const [maxPrice, setMaxPrice] = useState("")


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

		const data = selectcategory ? originalProducts.filter((filterItem) => filterItem.category === selectcategory)
			: originalProducts
		setAllProducts(data)
	};


	// single products
	//   search products


	const handleSearchItem = () => {
		const searchProduct = originalProducts.filter((searchFilterItem) => (
			searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
		))

		setAllProducts(searchProduct);
	}

	// price filter

	const handlePrice = () => {

		let min = parseFloat(minPrice)
		let max = parseFloat(maxPrice)


		const filterPrice = originalProducts.filter((priceItem) => (
			(!min || priceItem.price >= min) && (!max || priceItem.price <= max)
		))

		setAllProducts(filterPrice)
	}


	return (
		<>

			<>
				<div className='relative'>
					<img src={login} alt="" className="object-cover w-full object-center h-[200px] mt-5" />
					<div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>

					<h2 className='absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>AllProducts</h2>
				</div>


				<div className="bg-[#e2e0e0] container mx-auto rounded-md py-3 mt-4">
					{/* products category section*/}
					<div className="text-center mt-4">
						<select onChange={(e) => filterProducts(e.target.value)}>
							<option>Filter The Products</option>

							{allCategory.slice(0, 6).map((item, index) => (
								<option value={item} key={index}>{item}</option>

							))}
						</select>
					</div>

					{/* product search */}


					<div className='text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3'>
						<input placeholder='Search' className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm  border-white rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue dark:bg-gray-400 dark:border-white dark:placeholder-white dark:text-white  dark:focus:border-blue-500" onChange={(e) => setSearchItem(e.target.value)} value={searchItem} />
						<button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all dark:bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray dark:focus:ring-gray-700 bg-gray-800 dark:text-gray-800 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleSearchItem}>Search Product</button>
					</div>

					{/* products filter by price */}
					<div className="text-center mt-4 mb-2 flex items-center justify-center md:flex-row flex-col gap-3">
						<input placeholder='min Price' className="px-2 py-2   border-white rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue dark:bg-gray-400 dark:border-white dark:placeholder-white dark:text-white  dark:focus:border-blue-500" onChange={(e) => setMinPrice(e.target.value)} value={minPrice} />
						<input placeholder='max Price' className="px-2 py-2  border-white rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue dark:bg-gray-400 dark:border-white dark:placeholder-white dark:text-white  dark:focus:border-blue-500" onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} />
						<button className="py-2.5 px-5 me-2 mb-2 ml-4 text-sm font-medium focus:outline-none transition-all dark:bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray dark:focus:ring-gray-700 bg-gray-800 dark:text-gray-800 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={handlePrice}>Filter by Price</button>
					</div>


				</div>

				{/* all products */}
				<div className=" flex gap-4 flex-wrap justify-center mt-6">
					{
						allProducts.map((AllItems) => (
							<div className="border-4" key={AllItems.id}>
								<Link className="block relative h-48 rounded overflow-hidden" to={`/singleProduct/${AllItems.id}`}>
									<img src={AllItems.thumbnail} alt="ecommerce" className="object-cover object-center block h-[300px] w-[450px]"/>
								</Link>

								<div className="flex justify-between items-center">
									<div className="mt-4">
										<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title:{AllItems.title}</h3>
										<h2 className="text-gray-900 title-font text-lg font-medium">Rating:{AllItems.rating}</h2>
										<p className="mt-1">Price:{AllItems.price}Rs.</p>
									</div>

									<div>
										<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => AddToCart(AllItems)}>
											Add To Cart
										</button>
									</div>
								</div>
							</div>
						))
					}
				</div>










			</>

		</>
	)
}

export default AllProducts