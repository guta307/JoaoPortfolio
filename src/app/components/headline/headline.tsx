import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Certifique-se de importar o Link do Next.js
import {
  getContainerClasses,
  getTitleClasses,
  getHoverEffectClass,
} from "./style";

export type HeadlineProps = {
  type?: "fullScreen" | "standard";
  media?: "documentário" | "ensaio" | "esquete" | "institucional";
  title: string;
  url: StaticImageData | string;
  alt: string;
  hoverEffectEnabled?: boolean;
  className?: string;
  link?: string; // propriedade link opcional
};

const Headline = ({
  type = "standard",
  url,
  alt,
  media = "documentário",
  title,
  hoverEffectEnabled = true,
  link,
  className = "",
}: HeadlineProps) => {
  const Containerclasses = getContainerClasses(type);
  const Titleclasses = getTitleClasses(type, hoverEffectEnabled);
  const hoverEffect = getHoverEffectClass(hoverEffectEnabled);
  const SectionContent = () =>
    link ? (
      <Link
        href={link}
        className={`content text-right text-primary uppercase absolute bottom-4 right-2 pr-5 z-30 w-[80%] h-fit`}
      >
        <h2
          className={`desktop:text-tmd tablet:text-tmd mobile:text-tmd w-full ${Titleclasses}`}
        >
          {media}
        </h2>
        <h1
          className={`desktop:text-tmd tablet:text-tmd mobile:text-tmd w-full ${Titleclasses}`}
        >
          {title}
        </h1>
      </Link>
    ) : (
      <section
        className={`content text-right text-primary uppercase absolute bottom-4 right-2 pr-5 z-30 w-[80%] h-fit`}
      >
        <h2
          className={`desktop:text-tmd tablet:text-tmd mobile:text-tmd w-full ${Titleclasses}`}
        >
          {media}
        </h2>
        <h1
          className={`desktop:text-tmd tablet:text-tmd mobile:text-tmd w-full ${Titleclasses}`}
        >
          {title}
        </h1>
      </section>
    );
  return (
    <div className={`${Containerclasses} group`}>
      {/* Elemento de sobreposição para ativar o efeito de hover */}
      <div className="absolute inset-0 z-20"></div>

      {/* Máscara para escurecer a imagem */}
      <div
        className="absolute w-full h-full bg-black
       opacity-40 z-10"
      ></div>

      <Image
        src={url}
        alt={alt}
        layout="fill"
        className={`object-cover w-full h-full ${
          hoverEffectEnabled ? hoverEffect : ""
        } ${className}`}
      />
      {/* Se link estiver definido, envolva a seção com <Link>, senão, apenas retorne a seção */}
      <SectionContent />
    </div>
  );
};

export default Headline;
