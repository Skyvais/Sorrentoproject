import '../styles/Contact.css'
import Sorrentomap from '../banners/sorrentophoto.JPG'

export function Contact(props) {
    return (
        <div className="Contact">
            
            <div className="grid">
                <div className="card">
                <h2>Contact Us</h2>
                <p> If you have any questions of just want to get in touch with us, just fill out the form below or give us a call to a phone number provided below the form.</p>
                    <form
                        id="contact-form"
                        action="https://example.com/handler"
                        method="post"
                    >
                        {/* name */}
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Your Name" />
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="you@domain.com" />
                        {/* message */}
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" cols="24" placeholder="Hi, how's it going?"></textarea>
                        {/* <button type="reset">Clear</button> */}
                        <button type="submit">Send</button>
                        <p> <h4>Phone number</h4>  0435 123 456 </p>
                    </form>
                </div>

                <div className="card">
                    <h2>Find us</h2>
                  { /* <img src={Sorrentomap} text="Map" />*/}
                  <iframe width="500" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25032.539483544126!2d144.73234258728078!3d-38.34742120454251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4357b0e516369%3A0xf1dce538da37e359!2s42%20Holyrood%20Ave%2C%20Sorrento%20VIC%203943!5e0!3m2!1sen!2sau!4v1622625319455!5m2!1sen!2sau"  allowfullscreen="" loading="lazy"></iframe>
                  <h3>Address</h3>
                    <p> 42 Holyrood Avenue</p>
                    <p> Sorrento VIC 3943</p>

                </div>
            </div>




            </div>
    )
}



export default Contact