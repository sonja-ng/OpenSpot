import React from 'react';

class SearchIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            general: "",
            cuisine: "",
            neighborhood: ""
        }
        this.cuisineList = ["American", "Middle Eastern", "Mexican", "Indian", "Bakery", "Bar", "Mediterranean", "Soul Food", "Venezuelan",
        "Chinese", "Japanese", "Thai", "Fusion"];

        this.neighborhoodList = ["NoHo", "Williamsburg", "Jackson Heights", "Roosevelt Island", "Boerum Hill", "Midtown", "Upper West Side",
        "East Village", "Prospect Heights", "Lower East Side", "Fresh Meadows"]
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }


    componentDidMount(){
        // this.props.fetchRests();
    }

    update(e){
        this.setState({ general: e.target.value }, ()=> {
                const capFirst = this.state.general.charAt(0).toUpperCase();
                const lowRest = this.state.general.slice(1).toLowerCase();
                const combine = capFirst.concat(lowRest);
            if (this.cuisineList.includes(combine)) {
                this.setState({ cuisine: combine });
            } else if (this.neighborhoodList.includes(combine)) {
                this.setState({ neighborhood: combine });
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