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
        this.resetSessionErrors = this.resetSessionErrors.bind(this);
        this.goBack = this.goBack.bind(this);
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

    renderError(field){
        const error = this.props.errors.filter(error => error.includes(field));
        return (
            <div className="form_errors">
                {error[0]}
            </div>
        )
    }

    resetSessionErrors(){
        this.props.removeSessionErrors();
    }

    goBack(){
       this.props.history.goBack();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    render(){
        return (
        <div className="form_background" >
            <form onSubmit={this.handleSubmit} className="session_form">
                <div className="form_logo_header">
                    <Link to="/" className="x_button"><i className="fas fa-times"></i></Link>   
                </div>
                <div className="form_header"><h2>Sign Up</h2></div>
                <div className="form_body">
                    <div className="form_body_header"><h3>About Me</h3></div>
                    <label>First name
                        <br></br>
                        <input type="text" className="session_form_input" value={this.state.fname} onChange={this.update("fname")}/>
                        <span className="require">*</span>
                        {this.renderError("Fname")}
                    </label><br/>
                    <label>Last name
                        <br></br><input type="text" className="session_form_input" value={this.state.lname} onChange={this.update("lname")}/>
                        <span className="require">*</span>
                        {this.renderError("Lname")}
                    </label><br/>
                    <label>Username
                        <br></br><input type="text" className="session_form_input" value={this.state.username} onChange={this.update("username")}/>
                        <span className="require">*</span>
                        {this.renderError("Username")}
                        </label><br/>
                    <label>Email
                        <br></br><input type="text" className="session_form_input" value={this.state.email} onChange={this.update("email")}/>
                        <span className="require">*</span>
                        {this.renderError("Email")}
                        </label><br/>
                    <label>Phone
                        <br></br><input type="text" className="session_form_input" value={this.state.phone} onChange={this.update("phone")}/>
                        <span className="require">*</span>
                        {this.renderError("Phone")}
                    </label>
                    <br/>
                    <label>Password
                        <br></br>
                        <input type="password" className="session_form_input" value={this.state.password} onChange={this.update("password")}/>
                        <span className="require">*</span>
                        {this.renderError("Password")}
                    </label>
                        <br/>
                    <div className="form_buttons">
                        <input type="submit" value="Sign Up" className="session_button"/><br></br>
                        <div className="form_msg">Already have an account?  <Link to="/login" className="demo_button" onClick={this.resetSessionErrors} >Login here</Link>
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

export default SignupForm;

    // renderErrors(){
    //     return (
    //         <ul className="form_errors">
    //             {this.props.errors.map((error, idx) => (
    //                 <li key={idx}>{error}</li>
    //             ))}
    //         </ul>
    //     );
    // }