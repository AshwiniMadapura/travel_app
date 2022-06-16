import "./LocationList.scss"
import Location from "../Location/Location"

const LocationList=(props)=>{
    return(
        <div className="locationDetails">

            <h2 className="locationDetails__heading">Famous loacations to visit accross UK...</h2>
            <div className="locationDetails__content">
                {props.locations && props.locations.map(location => <Location key={location.locationId} location={location}/>)}
            </div>
        </div>
    )
}
export default LocationList