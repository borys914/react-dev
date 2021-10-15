import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Meetups from './Meetups.json'
import { ThemeColor } from './components/ThemeColor'
import './App.css';

function App() {

  const [MeetupDatas, setMeetups] = useState(Meetups)
  const [themeColor, setThemeColor] = useState('white');
  const deleteHandle = (meetupId) => {
    const NewMeetups = MeetupDatas.filter(meetup => meetup.id !== meetupId)
    setMeetups(NewMeetups);
  }
  // const addMeetupHandle = (addMeetupData) => {
  //   let maxId = 0
  //   MeetupDatas.forEach((meetUp, index) => {
  //     const idNumber = parseInt(meetUp.id.substr(1, 1))
  //     if(maxId<idNumber){ maxId = idNumber }
  //   })
  //   maxId = maxId+1
  //   addMeetupData.id = 'm'+maxId;
  //   setMeetups([ ...MeetupDatas, addMeetupData ])
  // }
  return (
    <ThemeColor.Provider value={[themeColor, setThemeColor]}>
      <Router>
        <Header/>
        <button onClick={() => {setThemeColor(themeColor === 'red' ? 'white' : 'red')}}>ChangeColor</button>
        <Switch>
          <Route path="/" exact><AllMeetups Meetups = { MeetupDatas } deleteHandle = {deleteHandle}/></Route>
          <Route path="/new-meetup" exact><NewMeetup/></Route>
        </Switch>
      </Router>
    </ThemeColor.Provider>
  );
}

export default App;
