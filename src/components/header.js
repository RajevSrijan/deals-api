import React from 'react';

class Header extends React.Component{

    render() {
        return (
            <div className="row full-width">
                <div className="banner-image">
                    <img src="https://dynamic.thoughtworks.com/conferences/conference_logo-3c2ba9b358547bfa31f9cda30f15747c.jpeg" alt="Hack day" />
                </div>
            </div>
        );
    }
}
export default Header;