import { Link as ScrollLink } from "react-scroll";

const RightBullets = () =>{
    return(
        <div className="rightbullets">
            <ul>
                <li>
                    <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    to="section-herosection"
                    >
                        Herosection
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    to="section-howitworks"
                    >
                        How it works
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    to="section-aboutus"
                    >
                        About Us 
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    to="section-contacttus"
                    >
                        Contact Us 
                    </ScrollLink>
                </li>
            </ul>
        </div>
    );
};

export default RightBullets;