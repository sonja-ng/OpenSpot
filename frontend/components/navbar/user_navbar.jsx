import React from 'react';
import UserDropDown from './user_dropdown';

class UserNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
        this.dropRef = React.createRef();
        this.toggleDropDown=this.toggleDropDown.bind(this);
        this.removeDropDown = this.removeDropDown.bind(this);
    }

    componentDidMount(){
        this.props.enableScrolling();
        document.addEventListener("click", this.removeDropDown);
    }

    componentWillUnmount(){
        document.removeEventListener("click", this.removeDropDown);
    }

    removeDropDown(e){
        e.preventDefault();
        // debugger
        if (this.dropRef && !this.dropRef.current.contains(e.target)) {
            return this.setState({selected: false});
        }

    }

    toggleDropDown(){
        // debugger
        if (this.state.selected === false) {
          return  this.setState({ selected: true })
        } else {
           return this.setState({ selected: false })
        }
    }

    render() {
        return (
            <div className="right_navbar">
                <div className="dropdown_container" ref={this.dropRef}>
                    <button onClick={this.toggleDropDown} className="user_icon"><i className="fas fa-user-circle"></i></button>
                    <UserDropDown selected={this.state.selected} logout={this.props.logout} currentUser={this.props.currentUser} />
                </div>
                <span className="calendar_icon"><i className="far fa-calendar"></i></span>
                <span className="bell_icon"><i className="far fa-bell"></i></span>
                <div>
                    <span className="search_icon"><i className="fas fa-search"></i></span>
                </div>
            </div>
        )
    }
}

export default UserNavBar;