import "./Location.scss";

const Location=(props)=>{
    const{
        locationName,
        description,
        attractions
    }=props.location;

    return(
        <div className="location">
            {/* <h3>{location}</h3> */}
            <h3>Name of location: {locationName}</h3>
            <p>Location details are: {description}</p>
            <p>Nearby attractions are: {attractions}</p>
        </div>
    )
}

export default Location;