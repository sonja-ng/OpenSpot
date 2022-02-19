import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            general: "",
            search: "",
            suggestion: false,
            date: new Date(),
            time: "12:00",
            party: 2
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.selectMatch = this.selectMatch.bind(this);
        this.removeDropDown = this.removeDropDown.bind(this);
        this.dropRef = React.createRef();
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
        if (this.state.search) {
            this.props.updateFilter("search", this.state.search);
        } else {
            this.props.updateFilter("general", this.state.general);
        }
        this.setState({ general: "", search: "" });
        this.props.history.push('/search/');
        if (this.props.closeSearch) {
            this.props.closeSearch();
        }
    }

    render(){
        const klass = this.state.suggestion ? "search-suggestion" : "hidden";
        const matches = this.findMatch().map((item, idx) => <li onClick={this.selectMatch} key={idx}>{item}</li>)
        
        return (
                    <form className="search-form">
                        <DatePicker dateFormat="yyyy-MM-dd" minDate={new Date()} className="search-date" selected={this.state.date} onChange={this.updateDate}/>
                        <select name="time" id="time" value={this.state.time} className="dropdown time" onChange={this.updateTime}>
                            <option value="12:00">12:00pm</option>
                            <option value="12:15">12:15pm</option>
                            <option value="12:30">12:30pm</option>
                            <option value="12:45">12:45pm</option>
                            <option value="01:00">1:00pm</option>
                            <option value="01:15">1:15pm</option>
                            <option value="01:30">1:30pm</option>
                            <option value="01:45">1:45pm</option>
                            <option value="02:00">2:00pm</option>
                            <option value="02:15">2:15pm</option>
                            <option value="02:30">2:30pm</option>
                            <option value="02:45">2:45pm</option>
                            <option value="03:00">3:00pm</option>
                            <option value="03:15">3:15pm</option>
                            <option value="03:30">3:30pm</option>
                            <option value="03:45">3:45pm</option>
                            <option value="04:00">4:00pm</option>
                            <option value="04:15">4:15pm</option>
                            <option value="04:30">4:30pm</option>
                            <option value="04:45">4:45pm</option>
                            <option value="05:00">5:00pm</option>
                            <option value="05:15">5:15pm</option>
                            <option value="05:30">5:30pm</option>
                            <option value="05:45">5:45pm</option>
                            <option value="06:00">6:00pm</option>
                            <option value="06:15">6:15pm</option>
                            <option value="06:30">6:30pm</option>
                            <option value="06:45">6:45pm</option>
                            <option value="07:00">7:00pm</option>
                            <option value="07:15">7:15pm</option>
                            <option value="07:30">7:30pm</option>
                            <option value="07:45">7:45pm</option>
                            <option value="08:00">8:00pm</option>
                            <option value="08:15">8:15pm</option>
                            <option value="08:30">8:30pm</option>
                            <option value="08:45">8:45pm</option>
                            <option value="09:00">9:00pm</option>
                            <option value="09:15">9:15pm</option>
                            <option value="09:30">9:30pm</option>
                            <option value="09:45">9:45pm</option>
                            <option value="10:00">10:00pm</option>
                        </select>
                            <label>
                            <select className="dropdown party" name="party" id="party" value={this.state.party} onChange={this.updateParty}>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">10 people</option>  
                                <option value="11">11 people</option>  
                                <option value="12">12 people</option>  
                                <option value="13">13 people</option>  
                                <option value="14">14 people</option>  
                                <option value="15">15 people</option> 
                            </select>
                            </label> 
                            <span className="font-search">
                                <input type="text" className="search-input" placeholder="Neighborhood, Restaurant, or Cuisine"
                                value={this.state.general} onChange={this.update}/>
                                <i className="fas fa-search"></i>
                            </span>
                            <ul className={klass} ref={this.dropRef}>
                                {matches}
                            </ul>
                            <button onClick={this.handleSubmit} className="new-submit">Let's go</button>
                    </form>
        )
    }
}

export default withRouter(SearchForm);