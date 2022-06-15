import { useState } from "react";
import "./Form.scss";


const Form = () => {
    const [location, setLocation] = useState({
      locationName: "",
      description: "",
      // attractions: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://cloud-travel-app-mgpd7hiizq-nw.a.run.app/locations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(location)
        })
        .then((response) => response.json())
        .then((json => console.log(json)))
        .catch(err => console.log(err))
        e.target.reset();
      }

      return (
        <div className="log-form">
          <h2>Add A New Location</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="location name" onInput={(e) => setLocation({ ...location, locationName: e.target.value })} />
            <input type="text" placeholder="description" onInput={(e) => setLocation({ ...location, description: e.target.value })} />
            <input type="text" placeholder="attractions" onInput={(e) => setLocation({ ...location, attractions: e.target.value })} />
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      );
}
export default Form;