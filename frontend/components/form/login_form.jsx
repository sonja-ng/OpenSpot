import React from 'react';

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
            username: "Demo User",
            password: "password"
        });
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
        <div className="form">
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <label>Username
                    <input type="text" value={this.state.username} onChange={this.update("username")}/>
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>
                </label>
                {this.renderErrors()}
                <input type="submit" value="Login"/>
            </form>
                <button onClick={this.handleDemoSubmit}>Sign in as Demo User</button>
        </div>
        )
    }
}

export default LoginForm;