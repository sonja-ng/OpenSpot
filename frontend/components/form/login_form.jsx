import React from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../../../app/assets/images/smallheaderlogo.png'; 

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.resetUserErrors = this.resetUserErrors.bind(this);
        this.goBack = this.goBack.bind(this);
        this.enableScrolling = this.enableScrolling.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    enableScrolling(){
        document.body.classList.remove("disable_scroll");
    }

    resetUserErrors(){
        this.props.removeUserErrors();
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

    goBack(){
        this.props.history.goBack();
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
            <form onSubmit={this.handleSubmit} className="login">
                <div className="form_logo_header">
                    <img src={smallLogo}/>
                    <Link to="/" className="x_button" onClick={this.enableScrolling}><i className="fas fa-times"></i></Link>
                </div>
                <div className="form_header"><h2>Login</h2></div>
                <div className="login_form">
                    <label>Username
                        <br></br>
                        <input type="text" className="session_form_input" value={this.state.username} onChange={this.update("username")}/>
                    </label>
                    <label>Password
                        <br></br>
                        <input type="password" className="session_form_input" value={this.state.password} onChange={this.update("password")}/>
                        {this.renderErrors()}
                    </label>
                    <div className="login_buttons">
                        <input type="submit" className="session_button" value="Login"/>
                        <div className="form_msg">Don't have an account?  <Link to="/signup" className="demo_button" onClick={this.resetUserErrors}>Signup here</Link>
                            <br></br>
                            Don't want to create an account?
                            <button className="demo_button" onClick={this.handleDemoSubmit}>Login as Demo User</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default LoginForm;