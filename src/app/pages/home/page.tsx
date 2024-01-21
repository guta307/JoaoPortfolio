import Headline from "@/app/components/headline/headline";

/*image imports*/
import P1 from "../../assets/home/project1.png";
import P2 from "../../assets/home/project2.png";
import P3 from "../../assets/home/project3.png";
import P4 from "../../assets/home/project4.png";
import P5 from "../../assets/home/project5.jpg";
import P6 from "../../assets/home/project6.jpg";
import P7 from "../../assets/home/project7.png";
import P8 from "../../assets/home/project8.jpg";
import P9 from "../../assets/home/project9.jpg";
import P10 from "../../assets/home/project10.jpg";
import P11 from "../../assets/home/project11.png";
const home = () => {
  return (
    <div>
      <div className=" flex tablet:gap-[0.5%] tablet:flex-col desktop:flex-row overflow-hidden mobile:flex-col  mobile:gap-0">
        <Headline
          url={P1}
          alt={"Documentário: A Arte por trás do mundo áspero"}
          media="documentário"
          title="A Arte por trás do mundo áspero"
        />
        <Headline
          url={P2}
          alt={"Documentário: Em terra de palmeiras: de 1914 a 1999"}
          media="documentário"
          title="Em terra de palmeiras: de 1914 a 1999"
        />
        <Headline
          url={P3}
          alt={"Documentário: MOCHAKK: HOUSE TO THE WORLD"}
          media="documentário"
          title="MOCHAKK: HOUSE TO THE WORLD"
        />
      </div>
      <div className="flex overflow-hidden">
        <Headline
          url={P4}
          type="fullScreen"
          alt={"Documentário: O Sal da vida"}
          media="documentário"
          title="O sal da vida"
        />
      </div>

      <div className=" flex tablet:gap-[0.5%] tablet:flex-col desktop:flex-row overflow-hidden mobile:flex-col  mobile:gap-0">
        <Headline
          url={P5}
          alt={"Ensaio: Akira e o retrato de uma geração"}
          media="ensaio"
          title="Akira o o retrato de uma geração"
        />
        <Headline
          url={P6}
          alt={"Ensaio: Entendendo wish you were here"}
          media="ensaio"
          title="Entendendo wish you were here"
        />
        <Headline
          url={P7}
          alt={"Ensaio: Tintin e a atemporalidade"}
          media="ensaio"
          title="Tintin e a atemporalidade"
        />
      </div>
      <div className="flex overflow-hidden">
        <Headline
          url={P8}
          type="fullScreen"
          alt={"Ensaio: A vida e arte de Hayao Miazaki"}
          media="ensaio"
          title="A vida e arte de Hayao Miazaki"
        />
      </div>

      <div className=" flex tablet:gap-[0.5%] tablet:flex-col desktop:flex-row overflow-hidden mobile:flex-col  mobile:gap-0">
        <Headline
          url={P9}
          alt={"Esquete: especial de hallowen"}
          media="esquete"
          title="Especial de hallowen"
        />
        <Headline
          url={P10}
          alt={"Institucional: A volta da maratona"}
          media="institucional"
          title="A volta da maratona"
        />
        <Headline
          url={P11}
          alt={"Esquete: the beartouille"}
          media="esquete"
          title="the beartouille"
        />
      </div>
    </div>
  );
};

export default home;
