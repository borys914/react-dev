import { useHistory } from "react-router-dom";
import AddMeetupForm from "../components/AddMeetupForm";

const NewMeetup = () => {
  const history = useHistory();
  const addMeetup111 = (addMeetupData) => {
    fetch(
      'https://react-first-860f2-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(addMeetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.push("/");
    });
  }

  return(
    <div>
      <h1> AddMeetup</h1>
      <AddMeetupForm addMeetup111={addMeetup111}/>
    </div>
  )
}
export default NewMeetup