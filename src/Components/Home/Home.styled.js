import styled from "styled-components";
export const StyledDiv = styled.div`
  font-size: 1rem;
  padding: 2rem 0;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.primaryLight};
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
export const StyledTyping = styled.div`
  height: 25vh;
  width: 50vw;
`;

export const HomeWrapper = styled.div`
  height: 80vh;
  width: 60vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const PicWrapper = styled.div`
  text-align: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: white;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
