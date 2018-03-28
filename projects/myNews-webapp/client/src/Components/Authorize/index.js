import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {signup, login} from '../../redux/auth';
import './authStyle.css';


class AuthFormContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            loginToggle: false,
            user: {
                username: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }
        });
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state.user);
        this.clearInputs();
    }


    handleLogin(e){
        e.preventDefault();
        this.props.login(this.state.user);
        this.clearInputs();
    }


    clearInputs(){
        this.setState({
            user: {
                username: '',
                password: ''
            }
        })
    }


    handleToggle(){
        this.setState(prevState => ({
            loginToggle: !prevState.loginToggle ? true : false
        }))
    }


    render(){
        const selected = {
            backgroundColor: 'cornflowerblue'
        }

        return (
            <div className="authContainer">
                <div className="authTitleContainer">
                { !this.state.loginToggle ?
                    <div>
                        <h3 style={selected} className="authLeft">Sign Up</h3>
                        <h3 onClick={this.handleToggle} className="authRight">Login</h3>
                    </div>
                :
                    <div>
                        <h3 onClick={this.handleToggle} className="authLeft">Sign Up</h3>
                        <h3 style={selected} className="authRight">Login</h3>
                    </div>
                }
                </div>

                { !this.state.loginToggle ?
                    <SignupForm
                        value={this.state.user}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                :
                    <LoginForm
                        value={this.state.user}
                        handleChange={this.handleChange}
                        handleLogin={this.handleLogin}
                    />
                }
            </div>
        )
    }
}


export default connect(state=>state, {signup, login})(AuthFormContainer);
