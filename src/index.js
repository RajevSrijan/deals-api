// Create new component. This component produce some HTML.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Deals from "./components/deal_list";
import Heading from "./components/headling";
import SearchBar from "./components/search_bar";
const API_URL = 'http://dev-deals-api.pantheonsite.io/api/all/deals?_format=json';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            searchterm : null
        };

    }

    searchdealsdata(searchterm) {
        if(!searchterm) {
            fetch(API_URL)
                .then(response => response.json())
                .then(data => this.setState({ products: data }));
        }
        else {
            fetch('http://dev-deals-api.pantheonsite.io/api/deals?_format=json&title='+searchterm)
                .then(response => response.json())
                .then(data => this.setState({ products: data }));
        }


   }
    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => this.setState({ products: data }));
    }

        render() {

    return (
        <div>
            <Header />
            <SearchBar onSearchTermName = {searchterm =>this.searchdealsdata(searchterm)} />
            <Heading />
            <Deals
                products = {this.state.products} />
            <Footer />
        </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));




// This component generate some HTML put is DOM.