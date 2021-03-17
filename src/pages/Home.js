import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Theme from "../Theme";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import GoogleLogo from "../images/google-logo.png";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import Data from "../API";

function Home() {
  return (
    <Layout>
      <StyledMain>
        <SearchBar buttonsHidden={false} />
      </StyledMain>
    </Layout>
  );
}

export default Home;

const StyledMain = styled.main`
  text-align: center;
  width: 50vw;
  max-width: 600px;

  h1 {
    position: relative;
    font-size: ${(props) => props.theme.fontSizes.large};

    h1::after {
      content: "Dark Mode";
    }

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

  @media screen and (max-width: ${(props) =>
      props.theme.screenDimensions.mobile}) {
    width: 80%;
    max-width: none;
  }
`;
