import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #242424;
  /* transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(-100%)"}; */
  height: 100vh;
  
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.2rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

`;

export const NavTop = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #242424;
  padding: 0;
  height: 3%;
  width: 100%;
  text-align: left;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;
