import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Theme from "../Theme";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import GoogleLogo from "../images/google-logo.png";

function SearchBar(props) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const hideButtons = props.buttonsHidden;

  function handleChange(e) {
    let NewValue = e.target.value;
    setInput(NewValue);
  }

  function handleSearch(e) {
    e.preventDefault();

    console.log(`You searched  ${input}`);

    // history.push(`/search`, { data: input });
    history.push({
      pathname: "/search",
      state: { data: input },
    });
  }

  return (
    <div>
      <Link to="/">
        <StyledLogo src={GoogleLogo}></StyledLogo>
      </Link>

      <form
        onSubmit={function (e) {
          handleSearch(e);
        }}
      >
        <InputWrapper>
          <BiSearch type="submit" />
          <StyledInput
            value={input}
            placeholder="Oh...pray tell what you seek?"
            onChange={function (e) {
              handleChange(e);
            }}
          />
        </InputWrapper>

        <div
          style={hideButtons ? { visibility: `hidden` } : { display: `inline` }}
        >
          <StyledButton type="submit">Google Search</StyledButton>

          <StyledButton href="https://keelsdesign.co.uk/">
            I'm Feeling Intrigued
          </StyledButton>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

const StyledLogo = styled.img`
  width: 80%;
  padding: 2rem;
  transition: 0.6s ease 0s;
  &:hover {
    transform: scale(1.05);
    filter: invert(100);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.main.secondaryColor};
  border-radius: 50px;
  border: 1px solid rgba(245, 245, 245, 0.2);
  padding: 1rem;

  -webkit-box-shadow: 0px 10px 39px -15px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 10px 39px -15px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 39px -15px rgba(0, 0, 0, 0.4);

  & > * {
    color: ${(props) => props.theme.main.primaryColor};
    font-size: 1.5rem;
    transition: 0.3s ease 0s;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding-left: 1rem;
  background: none;
  border: none;

  color: ${(props) => props.theme.main.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.small};

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  color: ${(props) => props.theme.main.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 500;
  background: ${(props) => props.theme.main.buttonStyle.primary};
  border: none;
  border-radius: 6px;
  margin: 1rem;
  margin-top: 2rem;
  padding: 0.8em 1.5rem;
  cursor: pointer;
  letter-spacing: 0.5px;

  transition: 0.3s ease 0s;

  &:hover {
    color: #fff;
    opacity: 0.5;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.screenDimensions.tablet}) {
    display: none;
  }
`;
