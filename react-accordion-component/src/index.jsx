import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const example = [
  {
    id: 0,
    title: 'Hypertext Markup Language',
    text: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    id: 1,
    title: 'Cascading Style Sheets',
    text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: 2,
    title: 'JavaScript',
    text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  },
  {
    id: 3,
    title: 'Hello World',
    text: 'This is merely a test post.'
  }
];

ReactDOM.render(
  <Accordion content={example} />,
  document.getElementById('root')
);
