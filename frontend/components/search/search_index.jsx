import React from 'react';
import SearchIndexItem from './search_index_item';
import DatePicker from 'react-datepicker';

class SearchIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            general: "",
            cuisine: "",
            neighborhood: "",
            name: "",
            suggestion: false,
            date: new Date(),
            time: "12:00",
            party: 2
        }

        this.dropRef = React.createRef();

        this.cuisineList = ["american", "middle eastern", "mexican", "indian", "bakery", "bar", "mediterranean", "soul food", "venezuelan",
        "chinese", "japanese", "thai", "fusion"];

        this.neighborhoodList = ["williamsburg", "jackson heights", "roosevelt island", "boerum hill", "midtown", "upper west side",
        "east village", "prospect heights", "lower east side", "fresh meadows"];

        this.nameList = ["al badawi", "aldama", "angel indian restaurant", "anything at all", "as you are", "bar blondeau", "borrachito", "boulud sud", "cadence",
        "casa ora", "cheli", "chuko", "dhamaka", "soothr", "pecking house"];

        this.allItems = ["American", "Middle Eastern", "Mexican", "Indian", "Bakery", "Bar", "Mediterranean", "Soul food", "Venezuelan",
        "Chinese", "Japanese", "Thai", "Fusion", "Williamsburg", "Jackson Heights", "Roosevelt Island", "Boerum Hill", "Midtown", "Upper West Side",
        "East Village", "Prospect Heights", "Lower East Side", "Fresh Meadows", "Al Badawi", "Aldama", "Angel Indian Restaurant", "Anything At All", "As You Are", 
        "Bar Blondeau", "Borrachito", "Boulud Sud", "Cadence", "Casa Ora", "Cheli", "Chuko", "Dhamaka", "Soothr", "Pecking House" ];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.selectMatch = this.selectMatch.bind(this);
        this.removeDropDown = this.removeDropDown.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateParty = this.updateParty.bind(this);
    }

    updateDate(d){
        this.setState({date: d}, ()=> this.props.fillInOneFieldBooking("date", `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1}-${this.state.date.getDate()}`));
    }

    updateTime(e){
        e.preventDefault();
        this.setState({time: e.target.value}, ()=> this.props.fillInOneFieldBooking("time", this.state.time))
    }

    updateParty(e){
        e.preventDefault();
        this.setState({party: e.target.value}, ()=> this.props.fillInOneFieldBooking("party_size", parseInt(this.state.party)))
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
   

    handleSubmit(e){
        e.preventDefault();
        const user = this.props.currentUser ? this.props.currentUser.id : "";
        this.props.fillInBooking({
            date: `${this.state.date.getFullYear()}-${this.state.date.getMonth()+1}-${this.state.date.getDate()}`,
            time: this.state.time,
            party_size: parseInt(this.state.party),
            user_id: user
        });

        this.setState({suggestion: false});
        if (this.state.cuisine) {
            this.props.updateFilter("cuisine", this.state.cuisine);
            this.setState({ general: "", cuisine: ""});
        } else if (this.state.neighborhood) {
            this.props.updateFilter("neighborhood", this.state.neighborhood);
            this.setState({ general: "", neighborhood: "" });
        } else if (this.state.name) {
            this.props.updateFilter("name", this.state.name);
            this.setState({ general: "", name: "" });
        } else {
            this.props.updateFilter("general", this.state.general);
            this.setState({ general: ""});
        }
    }

    render(){
        if(!this.props.rests) return null;
        const klass = this.state.suggestion ? "search-suggestion" : "hidden";
        const { rests, fillInOneFieldBooking, currentUser, openModal } = this.props;
        const restList = rests.map(rest => <SearchIndexItem key={rest.id} rest={rest} fillInOneFieldBooking={fillInOneFieldBooking} currentUser={currentUser} openModal={openModal}/>);
        const msg = rests.length === 15 ? (
            <div className="alert">
                <h1>Your search did not return any results, see below for suggestions!</h1>
            </div>
        ) : (
            null
        )

        const matches = this.findMatch().map((item, idx) => <li onClick={this.selectMatch} key={idx}>{item}</li>)
        return (
            <div>
                <div className="search-header">
                    <form className="search-form">
                    <DatePicker dateFormat="yyyy-MM-dd" minDate={new Date()} className="search-date" selected={this.state.date} onChange={this.updateDate}/>
                        <select name="time" className="dropdown time" value={this.state.time} id="time2" onChange={this.updateTime}>
                            <option value="12:00">12:00pm</option>
                            <option value="01:00">1:00pm</option>
                            <option value="02:00">2:00pm</option>
                            <option value="03:00">3:00pm</option>
                            <option value="04:00">4:00pm</option>
                            <option value="05:00">5:00pm</option>
                            <option value="06:00">6:00pm</option>
                            <option value="07:00">7:00pm</option>
                            <option value="08:00">8:00pm</option>
                            <option value="09:00">9:00pm</option>
                            <option value="10:00">10:00pm</option>
                        </select>
                        <label>
                        <select className="dropdown party" name="party" id="party2" value={this.state.party} onChange={this.updateParty}>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">10 people</option>  
                        </select>
                        </label>
                        <span className="font_search" >
                            <input type="text" className="banner-input" placeholder="Neighborhood, Restaurant, or Cuisine" value={this.state.general} 
                            onChange={this.update}/>
                            <i className="fas fa-search"></i>
                        </span>
                        <ul className={klass} ref={this.dropRef}>
                                {matches}
                        </ul>
                        <button onClick={this.handleSubmit} className="banner-submit">Find a table</button>
                    </form>
                </div>
                <div className="search-result">
                    {msg}
                    <ul>
                        {restList}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SearchIndex;