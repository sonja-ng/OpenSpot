import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';

const SearchPopup = ({ searchOut, closeSearch }) => {
        const klass = searchOut ? "search-background" : "hidden";
        const klass2 = searchOut ? "white-searchbar" : "hidden";

        return (
            <div className={klass}>
                    <div className={klass2}>
                            <button onClick={() => closeSearch()} className="search-x">X</button>
                        <div className="search-slogan">Find your table for any occasion</div>
                            <SearchFormContainer searchOut={searchOut} closeSearch={closeSearch} />
                    </div>
            </div>
        )
}

export default withRouter(SearchPopup);