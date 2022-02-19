import React from 'react';
import SearchIndexItem from './search_index_item';
import SearchFormContainer from './search_form_container';

const SearchIndex = ({ rests, fillInOneFieldBooking, currentUser, openModal }) => {
        if(!rests) return null;
        const restList = rests.map(rest => <SearchIndexItem key={rest.id} rest={rest}
        fillInOneFieldBooking={fillInOneFieldBooking} currentUser={currentUser} openModal={openModal}/>);
        const msg = rests.length === 15 ? (
            <div className="alert">
                <h1>Your search did not return any results, see below for suggestions!</h1>
            </div>
        ) : ( null )

        return (
            <div>
                <div className="search-header">
                    <SearchFormContainer />
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

export default SearchIndex;