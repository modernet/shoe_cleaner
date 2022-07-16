import styled from "styled-components";
import { Link as Scroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#FFD700" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;