import React from 'react';
import Image from 'next/image';

const TourCard = ({ imageUrl, title, description, discountPrice, salePrice, promotionImage }) => {
  return (

   
       
    <div className="container flex sm:flex justify-center items-center">   
    <div className=" relative rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-56 object-cover" />

      {/* Promotion Badge */}
      {promotionImage && (
        <div className="absolute top-0 left-0 m-2 px-2 py-1  text-white rounded">
          <img src={promotionImage} alt={title} width={64} height={64} />

        </div>
      )}



      {/* Price Badge version 1 */}
      <div className="absolute top-1/2 right-1 transform -translate-y-1/2 m-0 px-3 py-0 bg-indigo-600 text-white rounded">
        <ul>
          <li> <span className="line-through ml-2 text-sm">{discountPrice}</span></li>
          <li><span className="text-lg font-semibold">{salePrice}</span></li>
        </ul>
  
      </div>
          {/* Price Badge version 2 */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 m-2 px-2 py-1 bg-indigo-600 text-white rounded">
        {/*<span className="line-through mr-1 text-sm">{discountPrice}</span> */}
         <span className="text-lg font-semibold sm:top-2/3" >{salePrice}</span>
      </div>
       

      {/* Card Content */}
      <div>
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold ">{title}</h2>

        {/* Description */}
        <p className="text-gray-700 my-2">{description}</p>
        </div>
        {/* Book Now Button */}
       {/*<button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Book Now
        </button>
        */} 
        <button className="w-full mt-2 py-2 bg-indigo-600 text-white  hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
          Book Now
        </button>
      </div>
   </div>
  </div>

  );
};

export default TourCard;