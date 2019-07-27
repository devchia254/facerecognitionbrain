import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <header className="bbg-white-90 w-100 shadow-2 ph3 pv3 pv3-ns ph3-m ph3-l">
                <nav className="flex justify-end">
                    <p onClick={ () => onRouteChange('signout')} className='f3 link dim black pa1 pointer'>Sign Out</p>
                </nav>
            </header>
        );
    } else {
        return (
            <header className="bg-white-90 w-100 shadow-2 ph3 pv3 pv3-ns ph3-m ph3-l">
                <nav className="flex justify-end">
                    <p onClick={ () => onRouteChange('signin')} className='f5 ma0 link dim black pa1 pointer'>Sign In</p>
                    <p onClick={ () => onRouteChange('register')} className='f5 ma0 link dim black pa1 pointer'>Register</p>
                </nav>
            </header>
        );
    }
}
export default Navigation