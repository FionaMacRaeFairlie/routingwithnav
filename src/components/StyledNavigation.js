import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #7303ff;
  display: flex;
  flex-direction: row;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: #e0cafc;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  list-style-type:none;
  margin: 10px;
 
  &:hover,
  &:focus {
    color: white;
    ;
  }

  &:active {
    color: red;
  }
`;


const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contents", path: "/contents" },
  { name: "Contact us", path: "/contactus" },
];

export default function Navigation() {
  return (
    <>
      <NavbarLinkContainer>
        <NavbarContainer>
          {links.map((link, index) => (
            <NavbarLink
              key={index}
              to={link.path}

            >
              <li>{link.name}</li>
            </NavbarLink>
          ))}
        </NavbarContainer>
      </NavbarLinkContainer>
      <Outlet />
    </>
  );
}
