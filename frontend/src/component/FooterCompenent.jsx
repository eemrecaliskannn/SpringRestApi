import React, { Component } from 'react';

class FooterCompenent extends Component {
    constructor(proops){
        super(proops)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2023 @Emre Chalashkan </span>
                </footer>
            </div>
            
        )
    };
}

export default FooterCompenent;