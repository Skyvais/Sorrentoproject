import {Banner} from './Banner'
import BannerImage from '../banners/ryan-farid-v-ICeCElzqg-unsplash.jpg'
import '../styles/Local.css'

import BackBeachSorrento from '../banners/back_beach_sorrento.jpg'
import SorrentoFromJetty from '../banners/sorrento_from_jetty.jpg'



export function Local( props ) {
    return(
        <div className="Local">
        <Banner image={BannerImage} text="You Deserve A Break" />
            <h2>Highlights of local area</h2>
            <div className="grid">
                <div className="card">
                <h5>Queenscliff-Sorrento Ferry</h5>
                    <p> There's no better way to cross the Bay either with your car or as a foot passenger.
                         It only takes 40 minutes. Spot the playful dolphins whilst enjoying a coffee and light refreshments. The ferries run every day of the year on the hour. 
                         Wonderful restaurants at historic Queenscliff on the Bellarine peninsula offer perfect lunchtime adventures.</p>
                         <h5>Walking Tracks</h5>
                         <p>Fabulous walking tracks in any direction for all ages.
                              Beautiful beach walks, amazing cliff top strolls and for the more serious walkers,
                               a 100km walk combines the Bay trial, National Parks and the two Bays walk through the hinterland.</p>
                               <h5>Water Sports</h5>
                               <p>Endless Fun for all the family. Sailing, fishing, kayaking, paddle boarding, snorkeling,
                                    scuba diving and surfing are all on offer, not to mention the cricket match on the beach.</p>
                </div>
                <div className="card">
                   <img src = {SorrentoFromJetty} text = "Sorento from a jetty" alt="Sorento from a jetty"/>
                </div>
            </div>
            


            <div className="grid">
                <div className="card">
                <h5>Shopping Escapades</h5>
                    <p>Lovely, leisurely shopping - for pure pleasure - is listed as the number one activity for holidaymakers.
                    Sorrento and Mornington will not disappoint. Bookshops, giftware, home living and of course the odd handbag
                     or "must have that" top is yours for the exploring.</p>
                     <h5>Arts and Culture</h5>
                    <p>The Mornington Peninsula hosts an array of exhibitions and galleries, featuring fine art,
                         sculpture, ceramics, jewelry, hand blown glass and clothing. 
                         Small local galleries and craft markets are in abundance across the region.</p>
                </div>
                <div className="card">
                   <img src = {BackBeachSorrento} text = "Back beach of Sorrento" alt="Back beach of Sorrento"/>
                </div>
            </div>

        </div>
    )
}


export default Local