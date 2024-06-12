import React, { Component } from 'react';

class HeaderCompenent extends Component {
    constructor(proops){
        super(proops) 
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand">Student Management App</a></div>
                    </nav>
                </header>
            </div>
            
        )
    };
}

export default HeaderCompenent;