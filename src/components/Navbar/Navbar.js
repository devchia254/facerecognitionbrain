import React from 'react';

const Navbar = (props) => {
  // console.log(props, "props");
  return (
    <article className="mw5 bg-white br2 br--right pa3 pa4-ns ba b--black-10 shadow-2 h-100 flex flex-column items-center justify-between">
        {props.children}
    </article>
  );
};

export default Navbar