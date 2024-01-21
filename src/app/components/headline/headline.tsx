import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

type HeadlineProps = {
  type?: "fullScreen" | "standard";
  media?: "documentário" | "ensaio" | "esquete" | "institucional";
  title: string;
  url: StaticImageData;
  alt: string;
  hoverEffectEnabled?: boolean;
};

const headlineClassMap = {
  fullScreen: "w-screen h-screen",
  standard: " h-screen w-[33%] mobile:w-screen",
};

const titleClassMap = {
  fullScreen: "tablet:text-txl desktop:text-txl mobile:text-lg",
  standard: "tablet:text-txl desktop:text-tmd mobile:text-lg",
};

const Headline = ({
  type = "standard",
  url,
  alt,
  media = "documentário",
  title,
  hoverEffectEnabled = true,
}: HeadlineProps) => {
  const Containerclasses = classNames({
    [headlineClassMap[type]]: type,
    "relative flex items-center justify-center overflow-hidden": true, // classes do contêiner
  });

  const Titleclasses = classNames({
    [titleClassMap[type]]: type,
    "opacity-0 group-hover:opacity-100 transition-opacity duration-300": true, // Efeito de transição de opacidade
  });

  const TitleOpacityClass = hoverEffectEnabled
    ? "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    : "opacity-100";

  // Adiciona o efeito de hover ao contêiner principal
  const hoverEffect = hoverEffectEnabled
    ? "group-hover:translate-y-[-50%] transition-transform duration-300"
    : "";
  return (
    <div className={`${Containerclasses} group`}>
      {/* Elemento de sobreposição para ativar o efeito de hover */}
      <div className="absolute inset-0 z-30"></div>

      {/* Máscara para escurecer a imagem */}
      <div
        className="absolute w-full h-full bg-black
       opacity-40 z-10"
      ></div>

      <Image
        src={url}
        alt={alt}
        className={`object-cover w-full h-full ${
          hoverEffectEnabled ? hoverEffect : ""
        }`}
      />
      <section
        className={`content text-right text-primary uppercase absolute bottom-4 right-2 pr-5 z-20 w-[80%] h-fit`}
      >
        {/* O texto tem a classe de opacidade ajustada com base em hoverEffectEnabled */}
        <h2 className={`text-xxl w-full ${Titleclasses} ${TitleOpacityClass}`}>
          {media}
        </h2>
        <h1 className={`w-full ${Titleclasses} ${TitleOpacityClass}`}>
          {title}
        </h1>
      </section>
    </div>
  );
};

export default Headline;
