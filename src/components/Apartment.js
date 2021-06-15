import '../styles/Apartment.css'
import {Banner} from './Banner'
import BannerImage from '../banners/oscar-nilsson-JaA38YzaBQg-unsplash.jpg'
import PhotoOfAppartment from '../banners/apartment_front.jpg'
import Photothis from '../banners/apartment_garden.jpg'
import Bathtub from '../banners/apartment_bath.jpg'

export function Apartment(props) {
    return (
        <div className="apartment">
            <Banner image={BannerImage} text="" />
            <h2>Apartment</h2>

            <div className="grid">
                <div className="card">
                    <h3>Information about Appartment</h3>
                        <ul>
                            <li>We offer a spacious living area overlooking a beautiful garden
                    Modern and elegant bathroom</li>
                    <li>Queen sized bedroom suite</li>
                    <li>A private entrance allows you to come and go as you please.</li>
                    <li>Car parking is close by with room for a boat as well!</li>

                    <li>Your luxury apartment consists of a spacious separate living area with leather furniture overlooking a private garden for you to enjoy.</li>
                    
                     
                        </ul>
                </div>
                <div className="card">
                   <img src = {Photothis} text = "Front Garden" alt="front garden"/>
                </div>
            </div>
            


            <div className="grid">
                <div className="card">
                    <h3>We provide:</h3>
                        <ul>
                        <li>The kitchenette provides everything you will need for a relaxing breakfast. We include a coffee machine and a variety of coffee pods for your enjoyment.</li>
                    <li>Two TVS will keep everyone happy along with a DVD player, stereo system and games galore.</li>
                    <li>There is an undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of </li>
                    <li>Sit back and relax and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy.</li>
                
                
                        </ul>
                </div>
                <div className="card">
                   <img src = {PhotoOfAppartment} text = "Front view of apartment" alt="Front view"/>
                </div>
            </div>
          
            <div className="grid">
                <div className="card">
                    <h3>Also</h3>
                        <ul>
                        <li>Amenities include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools.</li>
                    <li>We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates.</li>
                    <li>A separate Queen sized bedroom suite with quality linen also overlooks the garden. The modern, elegant bathroom has a luxurious bath that entices you to unwind and relax whilst overlooking a private courtyard fernery.</li>
                        </ul>
                </div>

                <div className="card">
                   <img src = {Bathtub} text = "Bath Tub" alt="bath tub"/>
                </div>
            </div>




        </div>
    )
}




export default Apartment