import React from 'react';
import {Redirect, Link} from 'react-router-dom'
import App from './input'
import firebase from './firebase.js';
import './user.css'


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            authorized:false,
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, error: '' })
    }

    addUser = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((e) => {
            this.setState({ error: e.message })
        })
        this.setState({authorized:true})
    }

    signIn=e=>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(
            e=>{
                this.setState({error:e.message})
            }
        )
        console.log(";pgeg in")
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                console.log(user.email);
                this.setState({authorized: true})
            }
        })
    }

    render() {

        const SignUp = (

            <form className="form" onSubmit={this.addUser}>
                <h1>Register</h1>
                <br></br>
                <br></br>
                <div className="form__group">
                    <input type="email" name='email' onChange={this.handleChange} placeholder="Email" className="form__input" />
                </div>
                <br></br>
                <div className="form__group">
                    <input type="password" name='password' onChange={this.handleChange} placeholder="Password" className="form__input" />
                </div>
                <br></br>
                <div className="form__group alert">
                    {this.state.error}
                </div>
                <button className="btn" type="submit">Register</button>
                <br></br>
                <div class_name="form__group Text">
                        Already have a account ? <Link to="/login">SignIn Now</Link>
                </div>
                <br></br>
            </form>
        )

        const SignIn = (
            <form className="form" onSubmit={this.signIn}>
                <h1>SignIn</h1>
                <br></br>
                <br></br>
                <div className="form__group">
                    <input type="email" name='email' onChange={this.handleChange} placeholder="Email" className="form__input" />
                </div>
                <br></br>
                <div className="form__group">
                    <input type="password" name='password' onChange={this.handleChange} placeholder="Password" className="form__input" />
                </div>
                <br></br>
                <div className="form__group alert">
                    {this.state.error}
                </div>
                <button className="btn" type="submit">Log In</button>
                <div class_name="form__group Text">
                        New Here ? <Link to="/signup">SignUp Now</Link>
                </div>
            </form>
        )

        if(this.state.authorized){
            return <App auth={true} />;
        }

        if(this.props.type === "Signup"){
            return SignUp
        }
        else{
            return SignIn
        }

    }

}


export default User;