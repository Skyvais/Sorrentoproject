const BannerStyle = {
    minHeight: '50vh',
    minWidth: '100%',
    position: 'relative'
}
const BannerImage = {
    position: 'absolute',
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: 9
}
const TextStyle = {
    position: 'absolute',
    color: 'dark green',
    width: '100%',
    textAlign: 'center',
    top: '35%',
    zIndex: 9
}
export function Banner( props ) {
    return (
        <div className="banner" style={BannerStyle}>
            <img src={props.image} className="banner-image" style={BannerImage} />
            <h1 className="banner-text" style={TextStyle}>{props.text}</h1>
        </div>
    )
}

export default Banner