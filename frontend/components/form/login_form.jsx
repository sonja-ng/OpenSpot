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

        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.resetUserErrors = this.resetUserErrors.bind(this);
        // this.goBack = this.goBack.bind(this);
        this.enableScrolling = this.enableScrolling.bind(this);
        this.disableScrolling = this.disableScrolling.bind(this);
    }

    componentDidMount(){
        // document.addEventListener("click", this.goBack);
        this.disableScrolling();
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    disableScrolling(){
        document.body.classList.add("disable_scroll");
    }

    enableScrolling(){
        this.props.closeModal();
        document.body.classList.remove("disable_scroll"); 
    }

    resetUserErrors(){
        this.props.removeUserErrors();
        this.props.otherForm('signup');
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(()=>this.props.closeModal());
    }

    handleDemoSubmit(e){
        e.preventDefault();
        this.props.closeModal();
        this.props.login({
            username: "demo user",
            password: "password"
        });
    }

    // goBack(e){
    //     e.preventDefault();
    //     // debugger
    //     // if (this.formRef && !this.formRef.current.contains(e.target)){
    //     //     return this.props.history.goBack();
    //     // };
    //  }

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
        return (
            <form onSubmit={this.handleSubmit} className="login" ref={this.formRef}>
                <div className="form_logo_header">
                    <img src={smallLogo}/>
                    <div className="x_button" onClick={this.enableScrolling}><i className="fas fa-times"></i></div>
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
                        <div className="form_msg">Don't have an account? <button className="demo_button" onClick={this.resetUserErrors}>Signup</button>
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

export default LoginForm;