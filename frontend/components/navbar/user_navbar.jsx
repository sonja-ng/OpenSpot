import React from 'react';
import UserDropDown from './user_dropdown';
import { withRouter } from 'react-router-dom';
import SearchPopupContainer from './search_popup_container';

class UserNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false,
            searchOut: false,
        }

        this.dropRef = React.createRef();
        this.toggleDropDown=this.toggleDropDown.bind(this);
        this.removeDropDown = this.removeDropDown.bind(this);
        this.showSearch = this.showSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
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
        if (this.dropRef && !this.dropRef.current.contains(e.target)) {
            return this.setState({selected: false});
        }
    }

    toggleDropDown(){
        if (this.state.selected === false) {
          return  this.setState({ selected: true })
        } else {
           return this.setState({ selected: false })
        }
    }

    showSearch(){
        this.setState({ searchOut: true });
    }

    closeSearch(){
        this.setState({ searchOut: false });
    }

    render() {
        return (
            <div className="right-navbar">
                <div className="dropdown-container" ref={this.dropRef}>
                    <button onClick={this.toggleDropDown} className="user-icon"><i className="fas fa-user-circle"></i></button>
                    <UserDropDown selected={this.state.selected} logout={this.props.logout} currentUser={this.props.currentUser} toggle={this.toggleDropDown} />
                </div>
                {/* <span className="calendar-icon"><i className="far fa-calendar"></i></span>
                <span className="bell-icon"><i className="far fa-bell"></i></span> */}
                <div>
                    <button className="search-icon" onClick={this.showSearch}><i className="fas fa-search"></i></button>
                </div>
                <SearchPopupContainer closeSearch={this.closeSearch} searchOut={this.state.searchOut} />
            </div>
        )
    }
}

export default withRouter(UserNavBar);