import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            // <header className="bbg-white-90 fixed w-100 shadow-2 ph3 pv3 pv3-ns ph3-m ph3-l">
            // </header>
                <div className="flex">
                    <p onClick={ () => onRouteChange('signout')} className='f5 link dim black pa1 pointer'>Sign Out</p>
                </div>
        );
    } else {
        return (
            // <header className="bg-white-90 fixed top-0 w-100 shadow-2 ph3 pv3 pv3-ns ph3-m ph3-l">
            // </header>
                <div className="flex justify-end">
                    <p onClick={ () => onRouteChange('signin')} className='f5 ma0 link dim black pa1 pointer'>Sign In</p>
                    <p onClick={ () => onRouteChange('register')} className='f5 ma0 link dim black pa1 pointer'>Register</p>
                </div>
        );
    }
}
export default Navigation