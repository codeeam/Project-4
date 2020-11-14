import React, { useState } from 'react';
import './join.css';
import {Link} from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOutContainer">
            <div className="joinInContainer">
                <h1 className='heading'>Join</h1>
                <div><input type="text" placeholder="Name..." className="joinInput mt-20" onChange={(event) => setName(event.target.value)} /></div>
                <div><input type="text" placeholder="Room..." className="joinInput mt-20" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button mt-20">Starting</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;