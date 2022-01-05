import React from 'react';
import { Link } from 'react-router-dom';
import smallLogo from '../../../app/assets/images/smallheaderlogo.png'; 

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
        this.enableScrolling = this.enableScrolling.bind(this);
        this.disableScrolling = this.disableScrolling.bind(this);
    }

    componentDidMount(){
        // debugger
        // document.addEventListener("click", this.goBack);
        this.disableScrolling();
    }

    disableScrolling(){
        document.body.classList.add("disable_scroll");
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleDemoSubmit(e){
        e.preventDefault();
        this.props.closeModal();
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

    renderNameError(field, newField){
        const error = this.props.errors.filter(error => error.includes(field));
        if (error.length > 0) {
            return (
                <div className="form_errors">
                    {error[0].replace(field, newField)}
                </div>
            )
        } 
    }

    enableScrolling(){
        this.props.closeModal();
        document.body.classList.remove("disable_scroll");
    }

    resetSessionErrors(){
        this.props.removeSessionErrors();
        this.props.otherForm('login');
    }

    goBack(){
       this.props.history.goBack();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(()=>this.props.closeModal());
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="signup">
                <div className="form_logo_header">
                    <img src={smallLogo}/>
                    <Link to="/" className="x_button" onClick={this.enableScrolling}><i className="fas fa-times"></i></Link>   
                </div>
                <div className="form_header"><h2>Sign Up</h2></div>
                <div className="signup_form">
                    <div className="form_body_header"><h3>About Me</h3></div>
                    <label>First name
                        <br></br>
                        <input type="text" className="session_form_input" value={this.state.fname} onChange={this.update("fname")}/>
                        <span className="require">*</span>
                        {this.renderNameError("Fname", "First name")}
                    </label><br/>
                    <label>Last name
                        <br></br><input type="text" className="session_form_input" value={this.state.lname} onChange={this.update("lname")}/>
                        <span className="require">*</span>
                        {this.renderNameError("Lname", "Last name")}
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
                    <div className="signup_buttons">
                        <input type="submit" value="Sign Up" className="session_button"/><br></br>
                        <div className="form_msg">Have an account?  <button className="demo_button" onClick={this.resetSessionErrors}>Login</button>
                            <br></br>
                            Don't want to create an account?
                            <button className="demo_button" onClick={this.handleDemoSubmit}>Login as Demo User</button>
                        </div>
                    </div>
                </div>
            </form>
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