import React from 'react';
import Result from './Result/Result';

import "./Results.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomResults(props) {

  let data = {
    documents: [
      {
        id: 1,
        title: "The Fault in Our Stars",
        author: "John Green",
        image_url: "https://images.gr-assets.com/books/1360206420m/11870085.jpg"
      },
      {
        id: 2,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        image_url: "https://images.gr-assets.com/books/1447303603m/2767052.jpg"
      },
      {
        id: 3,
        title: "The Hobbit",
        author: "Mary Spoiled",
        image_url: "https://images.gr-assets.com/books/1372847500s/5907.jpg"
      },
      {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        image_url: "https://images.gr-assets.com/books/1398034300m/5107.jpg"
      },
      {
        id: 5,
        title: "Animal Farm",
        author: "George Orwell",
        image_url: "https://images.gr-assets.com/books/1424037542s/7613.jpg"
      }
    ]
  };
  console.log(props.results);

  const infoStyle = {
    margin: '1em'
  }
  //const result_html = [];

  let results = data.documents.map(result => {
    return <Result 
        key={result.id} 
        title={result.title} 
        author={result.author}
        image_url={result.image_url}
      />;
});

  return (
    <div>
      <p style={infoStyle}>Showing 5 of 25 results</p>
      <div className="row row-cols-lg-5 Results">
        {results}
      </div>
    </div>
  );
};