import React from 'react';

const Card = (props) => {
  // console.log(props, "props");
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns ba b--black-10 flex flex-column justify-start shadow-2 h-100">
        {props.children}
    </article>
  );
};

export default Card