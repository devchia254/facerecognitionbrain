import React from 'react';

const Navbar = (props) => {

  return (
    <article className="mw5 bg-white br2 br--right pa3 pa4-ns ba b--black-10 shadow-2 h-100 flex flex-column items-center justify-between">
      <div className='ma2'>
        {props.children[0]}
        {props.children[1]}
      </div>
      <div className=''>
        {props.children[2]}
      </div>
    </article>
  );
};

export default Navbar