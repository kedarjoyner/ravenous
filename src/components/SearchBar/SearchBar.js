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
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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
    // State of input element should be updated to reflect text type into the input
    handleTermChange(event){
        this.setState({
            term: event.target.value
        });
    }
    // State of input element should be updated to reflect text type into the input
    handleLocationChange(event){
        this.setState({
            location: event.target.value
        });
    }

    // Handle search
    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        // Prevent default action of clicking a link from triggering at end of method
        event.preventDefault();
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
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
            </div>

        );
    }
}

export default SearchBar;
