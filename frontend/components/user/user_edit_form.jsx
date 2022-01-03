import React from "react";

class UserEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.receiveUserInfo(this.props.match.params.userId);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(){
        this.props.updateUser(this.state);
    }

    render(){
        // debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="edit_form">
                    <h3>About me</h3>
                    <label>First name
                        <input type="text" value={this.state.fname} onChange={this.update("fname")}/>
                    </label>
                    <label>Last name
                        <input type="text" value={this.state.lname} onChange={this.update("lname")}/>
                    </label><br></br>
                    <label>Username
                        <input type="text" value={this.state.username} onChange={this.update("username")}/>
                    </label><br></br>
                    <label>Email address
                        <input type="text" value={this.state.email} onChange={this.update("email")}/>
                    </label><br></br>
                    <label>Phone
                        <input type="text" value={this.state.phone} onChange={this.update("phone")}/>
                    </label>
                    <br></br>
                    <label>Change password
                        <input type="password" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    <input type="submit" value="Update"/>
                </form>
            </div>
        )
    }
}

export default UserEditForm;