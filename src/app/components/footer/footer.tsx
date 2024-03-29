import Link from "next/link";
/*Image imports*/
import IgIcon from "../../assets/footer/ig.png";
import LinkedinIcon from "../../assets/footer/linkedin.png";
import Image from "next/image";

type FooterProps = {
  className?: string;
};

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      className={`flex bg-black justify-center items-center w-full pt-8 pb-8 ${className}`}
    >
      <ul className="flex gap-4 footer text-xl text-primary pr-8">
        <li>
          <Link
            className=" w-fit flex-grow-0"
            href="https://www.instagram.com/pac.u"
          >
            <Image
              src={IgIcon}
              alt={"Imagem do instagram para redirecionar a página oficial"}
              className=" desktop:w-[3vw]  tablet:w-[3vw] mobile:w-[10vw]"
            />
          </Link>
        </li>
        <li>
          <Link
            className=" w-fit flex-grow-0"
            href="https://www.linkedin.com/in/joaopastoriza/"
          >
            <Image
              src={LinkedinIcon}
              alt={"Imagem do linkedin para redirecionar a página oficial"}
              className=" desktop:w-[3vw] tablet:w-[3vw] mobile:w-[10vw]"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
