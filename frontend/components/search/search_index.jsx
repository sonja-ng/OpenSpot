import React from 'react';

class SearchIndex extends React.Component {
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


    componentDidMount(){
        // this.props.fetchRests();
    }

    update(e){
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
            this.props.updateFilter("cuisine", this.state.cuisine);
        } else if (this.state.neighborhood) {
            this.props.updateFilter("neighborhood", this.state.neighborhood);
        } else if (this.state.name) {
            this.props.updateFilter("name", this.state.name);
        }
    }


    render(){
        if(!this.props.rests) return null;
        const { rests } = this.props;
        
        const restList = rests.map(rest => <li key={rest.id}>{rest.name}</li>)
        return (
            <div>
                <h1>hello from search index</h1>
                <form className="search_form" onClick={this.handleSubmit}>
                    <span className="font_search">
                        <input type="text" className="search_input" placeholder="Neighborhood, Restaurant, or Cuisine" value={this.state.general} onChange={this.update}/>
                        <i className="fas fa-search"></i>
                    </span>
                    <input className="search_submit" type="submit" value="Let's go" />
                </form>
                <div>
                    {restList}
                </div>
            </div>
        )
    }

}

export default SearchIndex;