import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, } from 'react-router-dom';
import English from './English'
import './Languages.css';
function Languages() {
    return (
        <Router>
            {/* <div className="rows">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <Link to="/english"><h2 className="english">English</h2></Link>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <h3>Card 2</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <h3>Card 3</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <h3>Card 4</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </Router>



    );

}

export default Languages;






