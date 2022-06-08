import "./Location.scss";

const Location=(props)=>{
    const{
        locationName,
        description,
        attractions
    }=props.location;

    return(
        <div>
            {/* <h3>{location}</h3> */}
            <p>Name od location: {locationName}</p>
            <p>Location details are: {description}</p>
            <p>Nearby attractions are: {attractions}</p>
        </div>
    )
}

export default Location;