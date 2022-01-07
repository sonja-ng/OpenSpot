import React from 'react';
import UserDropDown from './user_dropdown';
import { withRouter } from 'react-router-dom';

class UserNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false,
            searchOut: false,
            general: "",
            cuisine: "",
            neighborhood: "",
            name: ""
        }

        this.cuisineList = ["american", "middle Eastern", "mexican", "indian", "bakery", "bar", "mediterranean", "soul food", "venezuelan",
        "chinese", "japanese", "thai", "fusion"];

        this.neighborhoodList = ["noho", "williamsburg", "jackson heights", "roosevelt island", "boerum hill", "midtown", "upper west side",
        "east village", "prospect heights", "lower east side", "fresh meadows"]

        this.nameList = ["al badawi", "aldama", "angel indian restaurant", "anything at all", "as you are", "bar blondeau", "borrachito", "boulud sud", "cadence",
        "casa ora", "cheli", "chuko", "dhamaka", "soothr", "pecking house"];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
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
        // debugger
        this.setState({ searchOut: true });
    }

    closeSearch(){
        this.setState({ searchOut: false });
    }

    update(e){
        e.preventDefault();
        // debugger
        this.setState({ general: e.target.value }, ()=> {
                const lowerCase = this.state.general.toLowerCase();
            if (this.cuisineList.includes(lowerCase)) {
                this.setState({ cuisine: lowerCase });
                this.setState({ neighborhood: "" });
                this.setState({ name: "" });
            } else if (this.neighborhoodList.includes(lowerCase)) {
                this.setState({ neighborhood: lowerCase });
                this.setState({ cuisine: "" });
                this.setState({ name: "" });
            } else if (this.nameList.includes(lowerCase)) {
                this.setState({ name: lowerCase });
                this.setState({ cuisine: "" });
                this.setState({ neighborhood: "" });
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log('test');
        // debugger

        if (this.state.cuisine) {
            this.props.history.push('/search/');
            this.props.updateFilter("cuisine", this.state.cuisine);
            this.setState({searchOut: false, general: "" });
        } else if (this.state.neighborhood) {
            this.props.history.push('/search/');
            this.props.updateFilter("neighborhood", this.state.neighborhood);
            this.setState({searchOut: false, general: "" });
        } else if (this.state.name) {
            this.props.history.push('/search/');
            this.props.updateFilter("name", this.state.name);
            this.setState({searchOut: false, general: "" });
        }
    }

    render() {
        const klass = this.state.searchOut ? "search-background" : "hidden";
        const klass2 = this.state.searchOut ? "white-searchbar" : "hidden";

        return (
            <div className="right_navbar">
                <div className="dropdown_container" ref={this.dropRef}>
                    <button onClick={this.toggleDropDown} className="user_icon"><i className="fas fa-user-circle"></i></button>
                    <UserDropDown selected={this.state.selected} logout={this.props.logout} currentUser={this.props.currentUser} toggle={this.toggleDropDown} />
                </div>
                <span className="calendar_icon"><i className="far fa-calendar"></i></span>
                <span className="bell_icon"><i className="far fa-bell"></i></span>
                <div>
                    <button className="search_icon" onClick={this.showSearch}><i className="fas fa-search"></i></button>
                </div>
                <div className={klass}>
                    <div className={klass2}>
                    <button onClick={this.closeSearch} className="search-x">X</button>
                        <div className="search-slogan">Find your table for any occasion</div>
                            <form >
                                <input type="date" className="search-date-white"/>
                                <select name="time" id="time" className="white-dropdown clock">
                                    <option value="1:00">1:00pm</option>
                                    <option value="2:00">2:00pm</option>
                                </select>
                                    <label>
                                    <select className="white-dropdown party" name="party" id="party">
                                        <option value="2">2 people</option>
                                        <option value="3">3 people</option>
                                        <option value="4">4 people</option>
                                        
                                    </select>
                                    </label> 
                                    <span className="font_search">
                                        <input type="text" className="white-search_input" placeholder="Neighborhood, Restaurant, or Cuisine"
                                        value={this.state.general} onChange={this.update}/>
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <button className="search_submit" onClick={this.handleSubmit}>Let's go</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(UserNavBar);