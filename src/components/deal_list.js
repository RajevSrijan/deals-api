import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
class Deals extends React.Component {

    renderList() {
        return this.props.products.map((n) => {
            const url = 'http://dev-deals-api.pantheonsite.io/'+ n.field_deals_im;
            return (
                  <div className="column" key={n.title}>
                    <div className="callout">
                        <p><img src={url} onClick={this.handleClick} /></p>
                        <p className="lead"> {n.title}</p>
                        <p className="subheader">{n.body}</p>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="row small-up-1 medium-up-2 large-up-3">
                {this.renderList()}
            </div>
        );
    }
}

export default Deals;