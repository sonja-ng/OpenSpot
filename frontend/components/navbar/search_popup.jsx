import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';

class SearchPopup extends React.Component {
    constructor(props){
        super(props);

        this.state= { 
            general: "",
            search: "",
            neighborhood: "",
            name: "",
            suggestion: false,
            date: new Date(),
            time: "12:00",
            party: 2
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.selectMatch = this.selectMatch.bind(this);
        this.reset = this.reset.bind(this);
        this.removeDropDown = this.removeDropDown.bind(this);
        this.dropRef = React.createRef();
        this.updateDate = this.updateDate.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateParty = this.updateParty.bind(this);
    }

    updateDate(d){
        this.setState({date: d});
    }

    updateTime(e){
        e.preventDefault();
        this.setState({time: e.target.value})
    }

    updateParty(e){
        e.preventDefault();
        this.setState({party: e.target.value})
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
        this.setState({ general: e.target.value, suggestion: true }, ()=> {
            const searchItem = this.state.general.toLowerCase();
        if (this.props.searchTerms.includes(searchItem)) {
            this.setState({ search: searchItem });
        } else if (this.state.general === "") {
            this.setState({suggestion: false});
        }});
    }

    findMatch(){
        const match = [];
        const suggestions = new Set();
        this.props.capTerms.forEach(term => suggestions.add(term));

        if (this.state.general.length > 0) {
            suggestions.forEach(el => {
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
                const searchItem = this.state.general.toLowerCase();
            if (this.props.searchTerms.includes(searchItem)) {
                this.setState({ search: searchItem });
            }
        });
    }

    reset(){
        this.setState({ general: "", suggestion: false});
        this.props.closeSearch();
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

        this.props.closeSearch();
        this.setState({suggestion: false});
        if (this.state.search) {
            this.props.updateFilter("search", this.state.search);
        } else {
            this.props.updateFilter("general", this.state.general);
        }
        this.setState({ general: "", search: "" });
        this.props.history.push('/search/');
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
                                <DatePicker dateFormat="yyyy-MM-dd" className="search-date-white" minDate={new Date()}
                                selected={this.state.date} onChange={this.updateDate}/>
                                <select name="time3" id="time3" className="white-dropdown clock" value={this.state.time} onChange={this.updateTime}>
                                    <option value="12:00">12:00pm</option>
                                    <option value="12:00">12:30pm</option>
                                    <option value="01:00">1:00pm</option>
                                    <option value="01:00">1:30pm</option>
                                    <option value="02:00">2:00pm</option>
                                    <option value="02:00">2:30pm</option>
                                    <option value="03:00">3:00pm</option>
                                    <option value="03:00">3:30pm</option>
                                    <option value="04:00">4:00pm</option>
                                    <option value="04:00">4:30pm</option>
                                    <option value="05:00">5:00pm</option>
                                    <option value="05:00">5:30pm</option>
                                    <option value="06:00">6:00pm</option>
                                    <option value="06:00">6:30pm</option>
                                    <option value="07:00">7:00pm</option>
                                    <option value="07:00">7:30pm</option>
                                    <option value="08:00">8:00pm</option>
                                    <option value="08:00">8:30pm</option>
                                    <option value="09:00">9:00pm</option>
                                    <option value="09:00">9:30pm</option>
                                    <option value="10:00">10:00pm</option>
                                </select>
                                <label>
                                    <select className="white-dropdown party" name="party3" id="party3" value={this.state.party} onChange={this.updateParty}>
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
                                <span className="font_search">
                                    <input type="text" className="white-search_input" placeholder="Neighborhood, Restaurant, or Cuisine"
                                        value={this.state.general} onChange={this.update}/>
                                    <i className="fas fa-search"></i>
                                </span>
                                <ul className={klass3} ref={this.dropRef}>
                                    {matches}
                                </ul>
                                <button className="new-submit" onClick={this.handleSubmit}>Let's go</button>
                            </form>
                    </div>
            </div>
        )
    }

}

export default withRouter(SearchPopup);