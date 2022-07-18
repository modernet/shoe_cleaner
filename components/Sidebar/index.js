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
            <Link href="/" passHref>
              <SidebarAbout onClick={toggle} >
              
              About Us
              
              </SidebarAbout>
              </Link>
            
            <SidebarLink to="productStory" smooth={true} onClick={toggle}>
              How it Works
            </SidebarLink>
            <SidebarLink to="productSlides" smooth={true} onClick={toggle}>
              Products
            </SidebarLink>
            {/* <SidebarLink to="ecommerce" smooth={true} onClick={toggle}>
              Ecommerce
            </SidebarLink> */}
          </SidebarMenu>
          <SideBtnWrap>
            <Link href="/items" passHref>
              <SidebarRouter>Shop Now</SidebarRouter>
            </Link>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
}
