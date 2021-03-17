import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import UseGoogleSearch from "../hooks/UseGoogleSearch";
import FetchRandomUser from "../components/FetchRandomUser";

function Search(props) {
  const [searchTerm, setsearchTerm] = useState("");
  const location = useLocation();
  let counter = 1;

  useEffect(() => {
    {
      console.log(location.state.data);
      setsearchTerm(location.state.data);
    }
  }, [location]);

  return (
    <Layout>
      <StyledMain>
        <SearchBar buttonsHidden={true} />
        <StyledResults
          style={searchTerm ? { display: "inline" } : { display: "none" }}
        >
          <h2>Search results for "{searchTerm}"</h2>
          <p>
            Well, it looks like we couldn't find anything relating to your
            serach.
          </p>
          <p>
            Too dark too find anything...? Maybe you should return to the light:{" "}
            <a href="https://google.com">Return to light</a>
          </p>
        </StyledResults>
      </StyledMain>
    </Layout>
  );
}

export default Search;

const StyledMain = styled.main`
  text-align: center;
  width: 50vw;
  max-width: 600px;

  h1 {
    position: relative;
    font-size: ${(props) => props.theme.fontSizes.large};

    span {
      position: absolute;
      bottom: -20%;
      right: -20%;
      width: 100%;
      background: red;

      font-size: 0.8rem;
      font-weight: 300;
    }
  }
`;

const StyledResults = styled.div`
  text-align: left;

  a {
    color: ${(props) => props.theme.main.highlight};
    text-decoration: none;
  }
`;
