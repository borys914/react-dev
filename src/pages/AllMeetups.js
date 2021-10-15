import { useContext } from 'react';
import Cart from '../components/Cart'
import { ThemeColor  } from '../components/ThemeColor';

const AllMeetups = (props) => {
  const {
    Meetups,
    deleteHandle
  } = props;

  const [themeColor, setThemeColor] = useContext(ThemeColor)

  const handleChangeContext = () => {
    setThemeColor('yellow')
  }
  return(
    Meetups.map((meetup) => {
      return(
        <Cart 
        key={meetup.id} 
        meetupId={meetup.id}
        deleteHandle = {deleteHandle}
        >
        <button onClick={handleChangeContext}>ddd</button>
            <h1> {meetup.title} </h1>
            <img 
              src = {meetup.image} 
              className = "meetup-img" 
              alt = {meetup.title}
            />
            <h5>{meetup.description}</h5>
          </Cart>
      )
    })
  )
}
export default AllMeetups