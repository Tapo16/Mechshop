import React from 'react'
import login from '../../assets/login.png'
import aboutImg from '../../assets/about.jpg'

const About = () => {
  return (
    <div>
      <div className='relative'>
        <img src={login} alt="" className="object-cover w-full object-center h-[200px] mt-5" />
        <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
        <h2 className='absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>About us</h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={aboutImg} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who we are?</h1>
            <p className="mb-8 leading-relaxed">The AmaxonShop Group is one of India’s leading digital commerce entities and includes group companies AmaxonShop,Flipkart, Myntra, AmaxonShop Wholesale, AmaxonShop Health+, and Cleartrip.
              Started in 2007, AmaxonShop has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 10 million, AmaxonShop's marketplace offers over 1 million products across 20+ categories.</p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">

          <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">TECHNOLOGY AT AMAXONSHOP</h1>
            <p className="mb-8 leading-relaxed"> AmaxonShop technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://corporate.flipkart.net/assets/images/technology-image.png" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default About