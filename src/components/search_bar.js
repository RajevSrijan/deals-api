import React from 'react';

class SearchBar extends React.Component{
    constructor (props) {
        super(props);
        this.state = { searchterm: '' };
    }
    render() {
        return (
            <div className="row search-deals">
                <input
                    onChange={event => this.onInputChange(event.target.value)}
                    type='search'
                    className='search-input'
                    placeholder='Search deal here' />
            </div>
        );
    }
    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermName(term);
    }

}
export default SearchBar;