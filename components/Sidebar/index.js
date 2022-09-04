import {
  SidebarContainer,
  Icon,
  
  SidebarWrapper,
  SidebarLink,
  SidebarRouter,
  SidebarMenu,
  SideBtnWrap,
  SidebarAbout
} from "./SidebarElement";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
         <CloseIcon sx={{'color' : '#fff'}} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {/* <SidebarLink> */}
            <Link href="/">
              <SidebarAbout >
              Home
              </SidebarAbout>
            </Link>
            {/* </SidebarLink> */}
            <Link href="/about">
              <SidebarAbout >
              
              About Us
              
              </SidebarAbout>
              
            </Link>
            <SidebarLink to="productStory" smooth={true} onClick={toggle}>
              How it Works
            </SidebarLink>
            <SidebarLink to="product" smooth={true} onClick={toggle}>
              Products
            </SidebarLink>
            
          </SidebarMenu>
          {/* <SideBtnWrap>
            <Link href="/" passHref>
              <SidebarRouter>Home</SidebarRouter>
            </Link>
          </SideBtnWrap> */}
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
}
