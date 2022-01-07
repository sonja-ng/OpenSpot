import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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
    }

    update(e){
        // debugger
        this.setState({suggestion: true});
        // if (this.state.general.length === 0) this.setState({suggestion: false});
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
        this.setState({suggestion: false});
        if (this.state.cuisine) {
            this.props.history.push('/search/');
            this.props.updateFilter("cuisine", this.state.cuisine);
            this.setState({ general: ""});
        } else if (this.state.neighborhood) {
            this.props.history.push('/search/');
            this.props.updateFilter("neighborhood", this.state.neighborhood);
            this.setState({ general: ""});
        } else if (this.state.name) {
            this.props.history.push('/search/');
            this.props.updateFilter("name", this.state.name);
            this.setState({ general: ""});
        } else {
            this.props.history.push('/search/');
            this.props.updateFilter("general", this.state.general);
            this.setState({ general: ""});
        }
    }

    render(){
        const klass = this.state.suggestion ? "main-search-suggestion" : "hidden";
        const matches = this.findMatch().map((item, idx) => <li onClick={this.selectMatch} key={idx}>{item}</li>)
           

        return (
            <div className="search_bar">
                <div className="form_container">
                    <div className="slogan">Find your table for any occasion</div>
                    <form className="main-search-form">
                        <input type="date" className="search_date_main"/>
                        <select name="time" id="time" className="dropdown time">
                            <option value="1:00">1:00pm</option>
                            <option value="2:00">2:00pm</option>
                        </select>
                            <label>
                            <select className="dropdown party" name="party" id="party">
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                
                            </select>
                            </label> 
                            <span className="font_search">
                                <input type="text" className="search_input" placeholder="Neighborhood, Restaurant, or Cuisine"
                                value={this.state.general} onChange={this.update}/>
                                <i className="fas fa-search"></i>
                            </span>
                            <ul className={klass}>
                                {matches}
                            </ul>
                            <button onClick={this.handleSubmit} className="search_submit">Let's go</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;