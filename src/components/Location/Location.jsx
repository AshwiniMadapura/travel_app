import "./Location.scss";

const Location=(props)=>{
    const{
        locationName,
        description,
        attractions,
        locationId
    }=props.location;

    const handleDelete = () => {
        console.log("it works")
        fetch(
            'https://cloud-travel-app-mgpd7hiizq-nw.a.run.app/locations/'+locationId,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((err) => console.log(err));
        console.log('deleted');
      };

    return(
        <div className="location">
            {/* <h3>{location}</h3> */}
            <h3>Name of location: {locationName}</h3>
            <p>Location details are: {description}</p>
            <p>Nearby attractions are: {attractions}</p>
            <a href="">Know more</a>
            <button type="button" className="location__delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Location;