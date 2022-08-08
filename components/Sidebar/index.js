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
            
              <SidebarAbout  to="productSlides" smooth={true} onClick={toggle} >
              
              About Us
              
              </SidebarAbout>
              
            
            <SidebarLink to="productStory" smooth={true} onClick={toggle}>
              How it Works
            </SidebarLink>
            <SidebarLink to="" smooth={true} onClick={toggle}>
              Products
            </SidebarLink>
            {/* <SidebarLink to="ecommerce" smooth={true} onClick={toggle}>
              Ecommerce
            </SidebarLink> */}
          </SidebarMenu>
          <SideBtnWrap>
            <Link href="/" passHref>
              <SidebarRouter>Home</SidebarRouter>
            </Link>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
}
