import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
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
                    <input type="text" value={this.state.username} onChange={this.update("username")}/>
                </label>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.update("email")}/>
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>
                </label>
                {this.renderErrors()}
                <input type="submit" value="Sign Up!"/>
            </form>
        </div>
        )
    }
}

export default SignupForm;