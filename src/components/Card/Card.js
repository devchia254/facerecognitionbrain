import React from 'react';

const Card = (props) => {
  // console.log(props, "props");
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv5 ba b--black-10">
        {props.children}
    </article>
  );
};

export default Card