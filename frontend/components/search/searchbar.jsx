import React from 'react';
import SearchFormContainer from './search_form_container';

const SearchBar = (props) => {
        return (
            <div className="search-bar">
                <div className="form-container">
                    <div className="slogan">Find your table for any occasion</div>
                    <SearchFormContainer />
                </div>
            </div>
        )
}

export default SearchBar;