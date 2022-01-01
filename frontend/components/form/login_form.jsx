import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    handleDemoSubmit(e){
        e.preventDefault();
        this.props.login({
            username: "demo user",
            password: "password"
        });
    }

    renderErrors(){
        return (
            <ul className="form_errors">
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
        <div className="form_background">
            <form onSubmit={this.handleSubmit}>
                <div className="form_logo_header">
                    <Link to="/">X</Link>
                </div>
                <div className="form_header"><h2>Login</h2></div>
                <div className="form_body">
                    <label>Username
                        <br></br>
                        <input type="text" value={this.state.username} onChange={this.update("username")}/>
                    </label>
                    <label>Password
                        <br></br>
                        <input type="password" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    {this.renderErrors()}
                    <div className="form_buttons_login">
                        <input type="submit" value="Login"/>
                        <button className="demo_button" onClick={this.handleDemoSubmit}>Sign in as Demo User</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default LoginForm;