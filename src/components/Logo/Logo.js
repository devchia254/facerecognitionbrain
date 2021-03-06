import React from 'react';
import Tilt from 'react-tilt';
import faceImg from './idea1.svg';
import './Logo.css'

const Logo = () => {
    return (
        <div className=''>
            <Tilt className="Tilt br2 shadow-2 ma0" options={{ max : 50 }} style={{ height: '9em', width: 'auto' }} >
                <div className="Tilt-inner pa3 flex justify-center items-center">
                    {/* Icon made by [https://www.flaticon.com/authors/smashicons] from www.flaticon.com */}
                    <img style={{ height: '7em', width: 'auto'}} alt='Icon made by [https://www.flaticon.com/authors/smashicons] from www.flaticon.com' src={faceImg} />
                </div>
            </Tilt>
            <h1 className='f3'>Face Detection App</h1>
        </div>
    );
}

export default Logo