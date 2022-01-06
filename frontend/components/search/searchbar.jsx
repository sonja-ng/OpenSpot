import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="search_bar">
                <div className="form_container">
                    <div className="slogan">Find your table for any occasion</div>
                    <form>
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
                                <input type="text" className="search_input" placeholder="Neighborhood, Restaurant, or Cuisine"/>
                                <i className="fas fa-search"></i>
                            </span>
                            <input className="search_submit" type="submit" value="Let's go" />
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;