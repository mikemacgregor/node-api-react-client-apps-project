import React, { useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Header = ({title, children}) => {
  useEffect(() => {
    document.title = title || 'Set a title';
  });

  return (
    <header>
      <h1>{title || 'Set a title'}</h1>
      {/* This is a comment in JSX */}
      {/*
        Below is a ternary statement that is
        checking if the property "children"
        has a value and is rendering it if it
        does. "children" exist when someone places
        content between two tags:
        <tag>{children}</tag>
        When you access the props.children it will
        contain that content.
      */}
      { children ? (
        <>
          { children }
        </>
      ) : null }
    </header>
  );
}
 
export default Header;