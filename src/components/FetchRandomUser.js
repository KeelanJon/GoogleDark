import React, { useState, useEffect } from "react";

let data = null;

function FetchRandomUser() {
  const [data, setData] = useState([]);

  function getAPI() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <h1>Using the Fetch API</h1>
      <button
        onClick={function () {
          getAPI();
        }}
      >
        Get Data
      </button>
      <ul>
        <li>
          {data.map(function (item) {
            return item.title;
          })}
        </li>
      </ul>
    </div>
  );
}

export default FetchRandomUser;
