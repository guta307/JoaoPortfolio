import Headline from "@/app/components/headline/headline";

// Importações de imagens
import P1 from "../../assets/home/project1.jpg";
import P2 from "../../assets/home/project2.jpg";
import P3 from "../../assets/home/project3.jpg";
import P4 from "../../assets/home/project4.jpg";
import P5 from "../../assets/home/project5.jpg";
import P6 from "../../assets/home/project6.jpeg";
import P7 from "../../assets/home/project7.png";
import P8 from "../../assets/home/project8.jpg";
import P9 from "../../assets/home/project9.jpg";
import P10 from "../../assets/home/project10.jpg";
import P11 from "../../assets/home/project11.png";
import HeaderComponent from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

const ids = [
  "65b0f8f1dc7465401899bf72",
  "65b0f8d21f5677401f244f42",
  "65b0f8b2266cfc3fde7f3e19",
  "65b0f89bdc7465401899bf4f",
  "65b0f86cdc7465401899bf3e",
  "65b0f8311f5677401f244f07",
  "65b0f80cdc7465401899bf0b",
  "65b0f909dc7465401899bf7e",
  "65b0f7dddc7465401899bef0",
  "65b0f78e1f5677401f244ed7",
  "65b0f7c1266cfc3fde7f3db3",
];

const home = () => {
  return (
    <div>
      <HeaderComponent currentPage="home" />
      <div className="flex tablet:gap-[0.5%] desktop:flex-row overflow-hidden mobile:flex-col mobile:gap-0">
        <Headline
          className={"object-top"}
          url={P1}
          alt={"Documentário: A Arte por trás do mundo áspero"}
          media="documentário"
          title="A Arte por trás do mundo áspero"
          link={`/pages/project/?id=${ids[0]}`}
        />
        <Headline
          className={"object-top"}
          url={P2}
          alt={"Documentário: Em terra de palmeiras: de 1914 a 1999"}
          media="documentário"
          title="Em terra de palmeiras: de 1914 a 1999"
          link={`/pages/project/?id=${ids[1]}`}
        />
        <Headline
          className={"object-top"}
          url={P3}
          alt={"Documentário: MOCHAKK: HOUSE TO THE WORLD"}
          media="documentário"
          title="MOCHAKK: HOUSE TO THE WORLD"
          link={`/pages/project/?id=${ids[2]}`}
        />
      </div>

      <div className="flex overflow-hidden">
        <Headline
          className={"object-top"}
          url={P4}
          type="fullScreen"
          alt={"Documentário: O Sal da vida"}
          media="documentário"
          title="O sal da vida"
          link={`/pages/project/?id=${ids[3]}`}
        />
      </div>

      <div className="flex tablet:gap-[0.5%] desktop:flex-row overflow-hidden mobile:flex-col mobile:gap-0">
        <Headline
          className={"object-top"}
          url={P5}
          alt={"Ensaio: Akira e o retrato de uma geração"}
          media="ensaio"
          title="Akira o o retrato de uma geração"
          link={`/pages/project/?id=${ids[4]}`}
        />
        <Headline
          url={P6}
          alt={"Ensaio: Entendendo wish you were here"}
          media="ensaio"
          title="Entendendo wish you were here"
          link={`/pages/project/?id=${ids[5]}`}
        />
        <Headline
          className={"object-top"}
          url={P7}
          alt={"Ensaio: Tintin e a atemporalidade"}
          media="ensaio"
          title="Tintin e a atemporalidade"
          link={`/pages/project/?id=${ids[6]}`}
        />
      </div>

      <div className="flex overflow-hidden">
        <Headline
          className={"object-top"}
          url={P8}
          type="fullScreen"
          alt={"Ensaio: A vida e arte de Hayao Miazaki"}
          media="ensaio"
          title="A vida e arte de Hayao Miazaki"
          link={`/pages/project/?id=${ids[7]}`}
        />
      </div>

      <div className="flex tablet:gap-[0.5%] desktop:flex-row overflow-hidden mobile:flex-col mobile:gap-0">
        <Headline
          className={"object-top"}
          url={P9}
          alt={"Esquete: especial de hallowen"}
          media="esquete"
          title="Especial de hallowen"
          link={`/pages/project/?id=${ids[8]}`}
        />
        <Headline
          className={"object-top"}
          url={P10}
          alt={"Institucional: A volta da maratona"}
          media="institucional"
          title="A volta da maratona"
          link={`/pages/project/?id=${ids[9]}`}
        />
        <Headline
          className={" object-center"}
          url={P11}
          alt={"Esquete: the beartouille"}
          media="esquete"
          title="the beartouille"
          link={`/pages/project/?id=${ids[10]}`}
        />
      </div>

      <Footer />
    </div>
  );
};

export default home;
