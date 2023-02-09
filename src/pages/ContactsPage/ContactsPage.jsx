import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import s from '../'

const ContactsPage = () => {
  return (
    <Router>
        <Link to="/"> <p className='links'>Контакты</p>  
        </Link>

     <Switch> 
        <Route exact path='/contacts'></Route>
     </Switch>
    </Router>
  )
}

export default ContactsPage