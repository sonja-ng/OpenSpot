import React from 'react';

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
        this.disableScrolling();
    }

    disableScrolling(){
        document.body.classList.add("disable-scroll");
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleDemoSubmit(e){
        e.preventDefault();
        this.props.closeModal();
        this.props.login({
            username: "Guest",
            password: "password"
        });
    }

    renderError(field){
        const error = this.props.errors.filter(error => error.includes(field));
        return (
            <div className="form-errors">
                {error[0]}
            </div>
        )
    }

    renderNameError(field, newField){
        const error = this.props.errors.filter(error => error.includes(field));
        if (error.length > 0) {
            return (
                <div className="form-errors">
                    {error[0].replace(field, newField)}
                </div>
            )
        } 
    }

    enableScrolling(){
        this.props.closeModal();
        document.body.classList.remove("disable-scroll");
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
                <div className="form-logo-header">
                    <img src={window.logoURL}/>
                    <button className="x-button" onClick={this.enableScrolling}><i className="fas fa-times"></i></button>   
                </div>
                <div className="form-header"><h2>Sign Up</h2></div>
                <div className="signup-form">
                    <div className="form-body-header"><h3>About Me</h3></div>
                    <label>First name
                        <br></br>
                        <input type="text" className="session-form-input" value={this.state.fname} onChange={this.update("fname")}/>
                        <span className="require">*</span>
                        {this.renderNameError("Fname", "First name")}
                    </label><br/>
                    <label>Last name
                        <br></br><input type="text" className="session-form-input" value={this.state.lname} onChange={this.update("lname")}/>
                        <span className="require">*</span>
                        {this.renderNameError("Lname", "Last name")}
                    </label><br/>
                    <label>Username
                        <br></br><input type="text" className="session-form-input" value={this.state.username} onChange={this.update("username")}/>
                        <span className="require">*</span>
                        {this.renderError("Username")}
                        </label><br/>
                    <label>Email
                        <br></br><input type="text" className="session-form-input" value={this.state.email} onChange={this.update("email")}/>
                        <span className="require">*</span>
                        {this.renderError("Email")}
                        </label><br/>
                    <label>Phone
                        <br></br><input type="text" className="session-form-input" value={this.state.phone} onChange={this.update("phone")}/>
                        <span className="require">*</span>
                        {this.renderError("Phone")}
                    </label>
                    <br/>
                    <label>Password
                        <br></br>
                        <input type="password" className="session-form-input" value={this.state.password} onChange={this.update("password")}/>
                        <span className="require">*</span>
                        {this.renderError("Password")}
                    </label>
                        <br/>
                    <div className="signup-buttons">
                        <input type="submit" value="Sign Up" className="session-button"/><br></br>
                        <div className="form-msg">Have an account?  <button className="demo-button" onClick={this.resetSessionErrors}>Login</button>
                            <br></br>
                            Don't want to create an account?
                            <button className="demo-button" onClick={this.handleDemoSubmit}>&#160;Login as Guest</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignupForm;