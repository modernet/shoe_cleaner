import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="herosection">
      <div className="herosectionTop">
        <h1 className="herosectionBgtitle">
          Shoe <br /> Perior
        </h1>
        <div className="container">
          <div className="herosectionTopInner">
            <div className="herosectionImage">
              <Image
                src="/images/hero-image.png"
                height={605}
                width={403}
                alt="Hero-image"
              />
            </div>
            <div className="herosectionContent">
              <h1>Shoeperior</h1>
              <p>
                Keep your head in the game with gentle, yet effective cleaning
                power in every pump.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="herosectionBottom">
        <div className="container">
          <Link href="/product">
            <a className="herosectionButton">Shop Now</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
