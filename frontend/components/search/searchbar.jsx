import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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
    }

    update(e){
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
            this.setState({ general: ""});
        } else if (this.state.neighborhood) {
            this.props.history.push('/search/');
            this.props.updateFilter("neighborhood", this.state.neighborhood);
            this.setState({ general: ""});
        } else if (this.state.name) {
            this.props.history.push('/search/');
            this.props.updateFilter("name", this.state.name);
            this.setState({ general: ""});
        } 
    }

    render(){
        return (
            <div className="search_bar">
                <div className="form_container">
                    <div className="slogan">Find your table for any occasion</div>
                    <form >
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
                            <button onClick={this.handleSubmit} className="search_submit">Let's go</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;