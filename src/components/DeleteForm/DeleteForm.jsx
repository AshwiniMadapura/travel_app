// import { useState } from "react";
import "./DeleteForm.scss";


const DeleteForm = (props) => {
    // const [location, setLocation] = useState({
    //   locationId: "",
    //   // description: "",
    //   // attractions: ""
    // })

    const{
      locationId
    }=props.deleteForm;

    const handleDelete = (e) => {
        e.preventDefault()
        fetch('https://cloud-travel-app-mgpd7hiizq-nw.a.run.app/locations/'+locationId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(location)
        })
        .then((response) => response.json())
        .then((json => console.log(json)))
        .catch(err => console.log(err))
        console.log("deleted")
        e.target.reset();
      }

      return (
        <div className="log-form">
          <h2>Delete A Location</h2>
          <form >
          {/* <input type="number" placeholder="location Id" {locationId}/> */}
            {/* <input type="text" placeholder="location Id" onInput={(e) => setLocation({ ...location, locationId: e.target.value })} /> */}
            {/* <input type="text" placeholder="description" onInput={(e) => setLocation({ ...location, description: e.target.value })} />
            <input type="text" placeholder="attractions" onInput={(e) => setLocation({ ...location, attractions: e.target.value })} /> */}
            <button type="submit" className="btn" onClick={handleDelete}>Delete</button>
          </form>
        </div>
      );
}
export default DeleteForm;