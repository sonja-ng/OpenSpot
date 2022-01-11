import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchPopup extends React.Component {
    constructor(props){
        super(props);

        this.state= { 
            general: "",
            cuisine: "",
            neighborhood: "",
            name: "",
            suggestion: false,
        }

        this.cuisineList = ["american", "middle eastern", "mexican", "indian", "bakery", "bar", "mediterranean", "soul food", "venezuelan",
        "chinese", "japanese", "thai", "fusion"];

        this.neighborhoodList = ["noho", "williamsburg", "jackson heights", "roosevelt island", "boerum hill", "midtown", "upper west side",
        "east village", "prospect heights", "lower east side", "fresh meadows"]

        this.nameList = ["al badawi", "aldama", "angel indian restaurant", "anything at all", "as you are", "bar blondeau", "borrachito", "boulud sud", "cadence",
        "casa ora", "cheli", "chuko", "dhamaka", "soothr", "pecking house"];

        this.allItems = ["American", "Middle Eastern", "Mexican", "Indian", "Bakery", "Bar", "Mediterranean", "Soul food", "Venezuelan",
        "Chinese", "Japanese", "Thai", "Fusion", "NoHo", "Williamsburg", "Jackson Heights", "Roosevelt Island", "Boerum Hill", "Midtown", "Upper West Side",
        "East Village", "Prospect Heights", "Lower East Side", "Fresh Meadows", "Al Badawi", "Aldama", "Angel Indian Restaurant", "Anything At All", "As You Are", 
        "Bar Blondeau", "Borrachito", "Boulud Sud", "Cadence", "Casa Ora", "Cheli", "Chuko", "Dhamaka", "Soothr", "Pecking House" ];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.selectMatch = this.selectMatch.bind(this);
        this.reset = this.reset.bind(this);
        this.removeDropDown = this.removeDropDown.bind(this);
        this.dropRef = React.createRef();
    }

    componentDidMount(){
        document.addEventListener("click", this.removeDropDown);
    }

    componentWillUnmount(){
        document.removeEventListener("click", this.removeDropDown);
    }

    removeDropDown(e){
        e.preventDefault();
        if (this.dropRef && !this.dropRef.current.contains(e.target)) {
            return this.setState({suggestion: false});
        }
    }

    update(e){
        // debugger
        this.setState({suggestion: true});
        this.setState({ general: e.target.value }, ()=> {
                const lowerCase = this.state.general.toLowerCase();
            if (this.cuisineList.includes(lowerCase)) {
                this.setState({ cuisine: lowerCase, neighborhood: "", name: "" });
            } else if (this.neighborhoodList.includes(lowerCase)) {
                this.setState({ neighborhood: lowerCase, cuisine: "", name: "" });
            } else if (this.nameList.includes(lowerCase)) {
                this.setState({ name: lowerCase, cuisine: "", neighborhood: "" });
            } else if (this.state.general === "") {
                this.setState({suggestion: false});
            } 
        });
    }

    findMatch(){
        const match = [];
        if (this.state.general.length > 0) {
            this.allItems.forEach(el => {
                const dup = el.slice(0, this.state.general.length);
                if (dup.toLowerCase() === this.state.general.toLowerCase()){
                    match.push(el);
                }
            })
        }

        return match;
    }
    
    selectMatch(e){
        // debugger
        this.setState({ general: e.currentTarget.innerText, suggestion: false }, ()=> {
                const lowerCase = this.state.general.toLowerCase();
            if (this.cuisineList.includes(lowerCase)) {
                this.setState({ cuisine: lowerCase, neighborhood: "", name: "" });
            } else if (this.neighborhoodList.includes(lowerCase)) {
                this.setState({ neighborhood: lowerCase, cuisine: "", name: "" });
            } else if (this.nameList.includes(lowerCase)) {
                this.setState({ name: lowerCase, cuisine: "", neighborhood: "" });
            }
        });
    }

    reset(){
        // debugger
        this.setState({ general: "", suggestion: false});
        this.props.closeSearch();
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log('test');
        // debugger

        this.props.closeSearch();
        this.setState({suggestion: false});
        if (this.state.cuisine) {
            this.props.history.push('/search/');
            this.props.updateFilter("cuisine", this.state.cuisine);
            this.props.closeSearch();
            this.setState({ general: "", cuisine: ""});
        } else if (this.state.neighborhood) {
            this.props.history.push('/search/');
            this.props.updateFilter("neighborhood", this.state.neighborhood);
            this.setState({ general: "", neighborhood: "" });
            this.props.closeSearch();
        } else if (this.state.name) {
            this.props.history.push('/search/');
            this.props.updateFilter("name", this.state.name);
            this.setState({ general: "", name: "" });
            this.props.closeSearch();
        } else {
            this.props.history.push('/search/');
            this.props.updateFilter("general", this.state.general);
            this.setState({ general: ""});
        }
    }

    render(){
        const klass = this.props.searchOut ? "search-background" : "hidden";
        const klass2 = this.props.searchOut ? "white-searchbar" : "hidden";

        const klass3 = this.state.suggestion ? "white-search-suggestion" : "hidden";
        const matches = this.findMatch().map((item, idx) => <li onClick={this.selectMatch} key={idx}>{item}</li>)

        return (
            <div className={klass}>
                    <div className={klass2}>
                            <button onClick={this.reset} className="search-x">X</button>
                        <div className="search-slogan">Find your table for any occasion</div>
                            <form className="white-search-form">
                                <input type="date" className="search-date-white"/>
                                <select name="time" id="time3" className="white-dropdown clock">
                                    <option value="1:00">1:00pm</option>
                                    <option value="2:00">2:00pm</option>
                                </select>
                                <label>
                                    <select className="white-dropdown party" name="party" id="party3">
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
                                <ul className={klass3} ref={this.dropRef}>
                                    {matches}
                                </ul>
                                <button className="search_submit" onClick={this.handleSubmit}>Let's go</button>
                            </form>
                    </div>
            </div>
        )
    }

}

export default withRouter(SearchPopup);