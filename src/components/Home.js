import '../styles/Home.css'

export function Home(props) {
    return (
        <div className="home">
            <h2>Home</h2>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <h3 className="boom">About</h3>
            
            <div className="grid">
                <div className="card">
                        <ul>
                            <li>On the Mornington Peninsula (one hour from Melbourne) next door to Portsea.</li>
                            <li>Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and lots more. It is located in a quiet avenue, just 4 houses from the beach. It is in easy walking distance of the ocean beaches and surf.</li>
                          
                        </ul>
                </div>
                <div className="card">
                    <ul>
                        <li>Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.
                    A separate kitchenette has everything you need to make your stay relaxed and comfortable.</li>
                        <li> Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out
                    This is the perfect place for a home away from home.</li>
                        
                    </ul>
                </div>
            </div>
          
        </div>
    )
}





export default Home