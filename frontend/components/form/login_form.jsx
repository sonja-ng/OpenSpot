import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    updatePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                   <li key={idx}>{error}</li>
                   )
                )}
            </ul>
        );
    }

    render(){
        // debugger
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <label>Username
                    <input type="text" value={this.state.username} onChange={this.updateUsername}/>
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.updatePassword}/>
                </label>
                {this.renderErrors()}
                <input type="submit" value="Login"/>
            </form>
        </div>
        )
    }
}

export default LoginForm;