import { useRef } from "react";

const AddMeetupForm = (props) => {
  const {
    addMeetup111,
  }=props;
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const addMeetupData = {
      title:enteredTitle,
      image:enteredImage,
      description:enteredDescription
    }
    addMeetup111(addMeetupData);
    // addMeetupHandle(addMeetupData);
    // history.push('/')
  }
  
  return(
    <div className="addmeetup">
      <form onSubmit={submitHandler}>
        <div>
          <label className="form-text">Title : </label>
          <input className="form-input" type="text" id='title' required ref={titleInputRef}/>
        </div>
        <div>
          <label className="form-text">Image : </label>
          <input className="form-input" type="url" id='image' required ref={imageInputRef} />
        </div>
        <div>
          <label className="form-text">Description : </label>
          <textarea className="form-input" id='description' required ref={descriptionInputRef} />
        </div>
        <input type="submit" value="Add Meetup"/>
      </form>
    </div>
  )
}
export default AddMeetupForm