import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, } from 'react-router-dom';

function Search() {


    const searchButton = () => {

    }


    const searchInput = () => {

    }

    return (
        <div className="search">
            <input
                onChange={searchInput}
                type="Search"
                value=''
            />
            <button
                onClick={searchButton}
                type="submit"

                >
                Search</button>
        </div>
    );
}

export default Search;