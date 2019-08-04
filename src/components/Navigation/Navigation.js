import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            // <header className="bbg-white-90 fixed w-100 shadow-2 ph3 pv3 pv3-ns ph3-m ph3-l">
            // </header>
                <div className="flex align-center bg-gold br-pill pa2 shadow-4 grow">
                    <p onClick={ () => onRouteChange('signout')} className='f5 ma0 link dim black pa1 pointer'>Sign Out</p>
                </div>
        );
    } else {
        return (
            // <header className="bg-white-90 fixed top-0 w-100 shadow-2 ph3 pv3 pv3-ns ph3-m ph3-l">
            // </header>
            <div className="flex">
                <div className="flex justify-center bg-gold br-pill pa2 shadow-4 grow ma1">
                    <p onClick={ () => onRouteChange('signin')} className='f6 near-black ma0 link black pa1 pointer'>Sign In</p>
                </div>
                <div className="flex justify-center bg-gold br-pill pa2 shadow-4 grow ma1">
                    <p onClick={ () => onRouteChange('register')} className='f6 near-black ma0 link black pa1 pointer'>Register</p>
                </div>
            </div>
        );
    }
}
export default Navigation