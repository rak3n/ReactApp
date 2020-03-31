import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Read from './input'
import User from './user'

import firebase from './firebase'

import './index.css'


class NavBar extends React.Component {


  render() {
    const ele =
      <div className='NavBar'>
        <div className='Item'>
          {this.props.item}
        </div>
      </div>

    return ele
  }
}



class Board extends React.Component {

  constructor(){
    super();
    this.state={
      auth:false
    }
  }

  
  async componentDidMount(){
    if((await firebase.auth().currentUser)){
      console.log("logged");
      this.setState({auth:true})
    }
    else{
      this.setState({auth:false})
    }
  }

  render() {
    if(this.state.auth){
      return <App auth="true"></App>
    }    
    else{
      return <Redirect to="/login"></Redirect>
    }
  }
}

class App extends React.Component{
  render(){
    return (
      <Router>

        <Switch>
          
          <Route path="/login">
            <NavBar item="Tasker"></NavBar>
            <User type="Login" />
          </Route>
          
          <Route path="/Signup">
            <NavBar item="Tasker"></NavBar>
            <User type="Signup" />
          </Route>


          
          <Route path="/">
            <NavBar item="Tasker"></NavBar>
            <Board />
          </Route>

        </Switch>
      </Router>

    );    
  }
}


//ReactDOM.render(<User />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));