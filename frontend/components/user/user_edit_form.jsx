import React from "react";

class UserEditForm extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.success = React.createRef();
    }

    componentDidMount(){
        // debugger
        this.props.receiveUserInfo(this.props.id);
      
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }


    renderError(field){
        const error = this.props.errors.filter(error => error.includes(field));
        return (
            <div className="edit_form_errors">
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

    handleSubmit(e){
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        return this.props.updateUser(user).then(()=> {
            this.success.current.classList.remove("hidden")
        });
    }

    render(){
        // debugger

        if (!this.props.currentUser) return null;

        return (
            <div>
                  <form onSubmit={this.test} className="edit_form">
                        <h3>About me</h3>
                    <div className="form_row">
                        <label>First name
                            <input type="text" className="edit_form_input" value={this.state.fname} onChange={this.update("fname")}/>
                            {this.renderNameError("Fname", "First name")}
                        </label>
                        <label>Last name
                            <input type="text" className="edit_form_input" value={this.state.lname} onChange={this.update("lname")}/>
                            {this.renderNameError("Lname", "Last name")}
                        </label>
                    </div>
                    <br>
                    </br>
                    <label>Username
                        <input type="text" className="edit_form_input" value={this.state.username} onChange={this.update("username")}/>
                        {this.renderError("Username")}
                    </label>
                    
                    <br></br>
                    <label>Email address
                        <input type="text" className="edit_form_input" value={this.state.email} onChange={this.update("email")}/>
                        {this.renderError("Email")}
                    </label>
                    
                    <br></br>
                    <label>Phone
                        <input type="text" className="edit_form_input" value={this.state.phone} onChange={this.update("phone")}/>
                        {this.renderError("Phone")}
                    </label>
                    
                    <input type="hidden" value={this.state.id}/>
                    <br></br>
                    <label>Change password
                        <input type="password" className="edit_form_input" value={this.state.password} onChange={this.update("password")}/>
                        {this.renderError("Password")}
                    </label>
                    <button onClick={this.handleSubmit} className="long_submit">Save Changes</button>
                    <div className="success hidden" ref={this.success}>Your changes are saved!</div>
                </form> 
            </div>
        )
    }
}

export default UserEditForm;

{/* <form onSubmit={this.test.bind(this)}>
<input type="text" value="hi" />
<input type="button" value="save"/>
</form> */}