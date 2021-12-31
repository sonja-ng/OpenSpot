import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    updateEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    updatePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(){
        this.props.signup(this.state);
    }

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        );
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <label>Username
                    <input type="text" value={this.state.username} onChange={this.updateUsername}/>
                </label>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.updateEmail}/>
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.updatePassword}/>
                </label>
                {this.renderErrors()}
                <input type="submit" value="Sign Up!"/>
            </form>
        </div>
        )
    }
}

export default SignupForm;