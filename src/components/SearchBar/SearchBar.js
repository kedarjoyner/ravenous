import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
    }
    // Return active css class for a sorting option 
    getSortByClass(sortByOption) {
        if( this.state.sortBy === sortByOption ) {
            return 'active';
        } else {
            return '';
        }
    }

    // Set the state of a sorting option
    handleSortByChange(sortByOptions) {
        this.setState({
            sortBy: sortByOptions
        });
    }
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            // store object values
            let sortByOptionValue = sortByOptions[sortByOption];
            // display object key
            // onClick ensures method is called with the appropriate value when clicked
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });
    }
    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
            </div>

        );
    }
}

export default SearchBar;
