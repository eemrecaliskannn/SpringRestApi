import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom/'
import ListStudentComponent from './component/ListStudentCompenent';
import HeaderCompenent from './component/HeaderCompenent';
import FooterCompenent from './component/FooterCompenent';
import CreateStudentCompenent from './component/CreateStudentCompenent';

function App() {
  return (
    <div>
        <Router>
              <HeaderCompenent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListStudentComponent}></Route>
                          <Route path = "/students"  component = {ListStudentComponent}></Route>
                          <Route path = "/add-students"  component = {CreateStudentCompenent}></Route>
                          
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterCompenent />
        </Router>
    </div>
    
  );
}

export default App;