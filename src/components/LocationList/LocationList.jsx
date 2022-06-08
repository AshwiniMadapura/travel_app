import "./LocationList.scss"
import Location from "../Location/Location"

const LocationList=(props)=>{
    return(
        <>
            <h2 className="heading">Famous loacations to visit accross UK...</h2>
            <div>
                {props.locations && props.locations.map(location => <Location key={location.locationId} location={location}/>)}
            </div>
        </>
    )
}
export default LocationList