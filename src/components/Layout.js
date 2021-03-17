import React from "react";
import { Link } from "react-router-dom";
import Theme from "../Theme";
import styled from "styled-components";
import { GiPlagueDoctorProfile } from "react-icons/gi";

function Layout({ children }) {
  return (
    <Theme>
      <Container>
        <StyledHeader>
          <nav>
            <Link to="/">Home</Link>
            <a href="https://gumroad.com/keelanjon">Store</a>
          </nav>

          <div>
            <GiPlagueDoctorProfile
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            />
          </div>
        </StyledHeader>
        {children}
        <StyledFooter>
          <p>
            {function () {
              return Date.getFullYear();
            }}
          </p>
          2021 © Coded by{" "}
          <a href="https://keelsdesign.co.uk">Keelan Jonathan</a>
        </StyledFooter>
      </Container>
    </Theme>
  );
}

export default Layout;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2rem 0;

  nav > * {
    color: ${(props) => props.theme.main.primaryColor};
    text-decoration: none;
    padding: 0 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0 2rem;

  color: ${(props) => props.theme.main.primaryColor};
  background: ${(props) => props.theme.main.secondaryColor};
  font-family: ${(props) => props.theme.fonts[0]};

  * {
    font-family: ${(props) => props.theme.fonts[0]};
  }
`;

const StyledFooter = styled.footer`
  padding: 2.5rem 0;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.main.highlight};
  }
`;
