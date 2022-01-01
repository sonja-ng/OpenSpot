import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            fname: "",
            lname: "",
            email: "",
            phone: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleDemoSubmit(e){
        e.preventDefault();
        this.props.login({
            username: "demo user",
            password: "password"
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    renderFNameError(){
        const fNameError = this.props.errors.filter(error => error.includes("Fname"));
        return (
            <div className="form_errors fname">
                {fNameError[0]}
            </div>
        )
    }

    renderLNameError(){
        const lNameError = this.props.errors.filter(error => error.includes("Lname"));
        return (
            <div className="form_errors lname">
                {lNameError[0]}
            </div>
        )
    }

    renderEmailError(){
        const emailError = this.props.errors.filter(error => error.includes("Email"));
        return (
            <div className="form_errors email">
                {emailError[0]}
            </div>
        )
    }

    renderUsernameError(){
        const usernameError = this.props.errors.filter(error => error.includes("Username"));
        return (
            <div className="form_errors username">
                {usernameError[0]}
            </div>
        )
    }

    renderPasswordError(){
        const fNameError = this.props.errors.filter(error => error.includes("Password"));
        return (
            <div className="form_errors password">
                {fNameError[0]}
            </div>
        )
    }

    renderPhoneError(){
        const phoneError = this.props.errors.filter(error => error.includes("Phone"));
        return (
            <div className="form_errors phone">
                {phoneError[0]}
            </div>
        )
    }

    // renderErrors(){
    //     return (
    //         <ul className="form_errors">
    //             {this.props.errors.map((error, idx) => (
    //                 <li key={idx}>{error}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    render(){
        return (
        <div className="form_background">
            <form onSubmit={this.handleSubmit} className="session_form">
                <div className="form_logo_header">
                    <Link to="/" className="x_button">X</Link>
                </div>
                <div className="form_header"><h2>Sign Up</h2></div>
                <div className="form_body">
                    <div className="form_body_header"><h3>About Me</h3></div>
                <label>First name
                    <br></br>
                    <input type="text" className="session_form_input" value={this.state.fname} onChange={this.update("fname")}/>
                    <span className="require">*</span>
                    {this.renderFNameError()}
                </label><br/>
                <label>Last name
                    <br></br><input type="text" className="session_form_input" value={this.state.lname} onChange={this.update("lname")}/>
                    <span className="require">*</span>
                    {this.renderLNameError()}
                    </label><br/>
                <label>Username
                    <br></br><input type="text" className="session_form_input" value={this.state.username} onChange={this.update("username")}/>
                    <span className="require">*</span>
                    {this.renderUsernameError()}
                    </label><br/>
                <label>Email
                    <br></br><input type="text" className="session_form_input" value={this.state.email} onChange={this.update("email")}/>
                    <span className="require">*</span>
                    {this.renderEmailError()}
                    </label><br/>
                <label>Phone
                    <br></br><input type="text" className="session_form_input" value={this.state.phone} onChange={this.update("phone")}/>
                    <span className="require">*</span>
                    {this.renderPhoneError()}
                </label>
                <br/>
                <label>Password
                    <br></br>
                    <input type="password" className="session_form_input" value={this.state.password} onChange={this.update("password")}/>
                    <span className="require">*</span>
                    {this.renderPasswordError()}
                </label>
                    <br/>
                {/* {this.renderErrors()} */}
                <div className="form_buttons">
                    <input type="submit" value="Sign Up" className="session_button"/><br></br>
                    <button className="demo_button" onClick={this.handleDemoSubmit}>Login as Demo User</button>
                </div>
                </div>
            </form>
                
        </div>
        )
    }
}

export default SignupForm;