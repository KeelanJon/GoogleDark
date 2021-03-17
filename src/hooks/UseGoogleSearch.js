import { useState, useEffect } from "react";
import { CompleteURL } from "../API";

function UseGoogleSearch(term) {
  const [data, setData] = useState(null);

  // function getData() {
  //   fetch(CompleteURL)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <pre></pre>
    </div>
  );
}

export default UseGoogleSearch;
