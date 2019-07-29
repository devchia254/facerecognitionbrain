import React from 'react';
import Tilt from 'react-tilt';
import faceImg from './idea1.svg';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma2'>
            <Tilt className="Tilt br2 shadow-2 ma0" options={{ max : 50 }} style={{ height: '9em', width: 'auto' }} >
                <div className="Tilt-inner pa3">
                    <img style={{ height: '7em', width: 'auto'}} alt='logo' src={faceImg} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo