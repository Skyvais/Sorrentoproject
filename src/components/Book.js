import { Banner } from './Banner'
import BannerImage from '../banners/bruno-van-der-kraan-5d5-pYbOMPQ-unsplash.jpg'
import '../styles/Book.css'

export function Book(props) {
    return (
        <div className="Book">
            <Banner image={BannerImage} text="A Home Away From Home" />
            <h2>Testimonials</h2>
            <div className="grid">
                <div className="card">

                    <ul className="babune">
                        <li>"Your attention to detail made our stay so relaxed and comfortable. It was such a shame we had to drive back to our little flat, which is smaller than your apartment. We want to move in!"</li>
                        <li>"This apartment is close to everything. We didn't need the car as the walks were amazing"</li>
                        <li>"Cosy and comfortable. We imagined we owned it and enjoyed being spoilt.  Thank you." </li>
                        <li>“Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!"</li>
                    </ul>
                </div>
                <div className="card">
                    <ul className="babune">
                        <li>"A few minutes’ walk from the beach, picnic basket in hand and towel over the shoulder - can't think of anything better except that wonderful breakfast. That bacon is the best in Melbourne!"</li>
                        <li>"So sorry we had to go home after only one night. We will definitely stay two nights next time!"</li>
                        <li>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again."</li>
                        <li>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!"</li>
                    </ul>
                </div>
            </div>
         </div>

















    )
}

export default Book