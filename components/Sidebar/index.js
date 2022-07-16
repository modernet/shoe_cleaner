import {
  SidebarContainer,
  Icon,
  
  SidebarWrapper,
  SidebarLink,
  SidebarRouter,
  SidebarMenu,
  SideBtnWrap,
} from "./SidebarElement";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
         <CloseIcon sx={{'color' : 'red'}} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" smooth={true} onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="workflow" smooth={true} onClick={toggle}>
              Why Us
            </SidebarLink>
            <SidebarLink to="services" smooth={true} onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="ecommerce" smooth={true} onClick={toggle}>
              Ecommerce
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <Link href="/calendly" passHref>
              <SidebarRouter>Contact Us</SidebarRouter>
            </Link>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
}
