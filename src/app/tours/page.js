import TourCard from "../components/card/TourCard";

const reqUrl = 'http://headless-phukettourz.local/wp-json/wp/v2/tours?_fields=id,title,acf&acf_format=standard';
const Tours = async () => {

    const req = await fetch(reqUrl);
    const tours = await req.json()

    console.log('tours', tours);

    
  return (
    <div className='container mx-auto p-8 pb-16'>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Sea Tour</h1>
        { /*grid md:grid-cols-2 lg:grid-cols-3 gap-8 */ }
        <div className="grid grid-cols-1 gap-4 px-5 py-5 md:grid-cols-2 lg:grid-cols-3">
                
            {tours.map(tour => ( 
             
            <TourCard
                key={tour.id}
                imageUrl={tour.acf.thumbnail} // Replace with your image URL
                title={tour.title.rendered}
                thumbnail={tour.thumbnail}
                description={tour.acf.tour_description}
                discountPrice="$599"
                salePrice="$499"
                promotionImage="/assets/badges/best-seller.png"
            />
            ))}
               
            {/* Add more TourCard components with different data */}
      </div> 
    </div>
        
);
}
export default Tours