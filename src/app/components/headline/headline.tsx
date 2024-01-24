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

  // Conteúdo interno do componente Headline
  const content = (
    <>
      {/* Elemento de sobreposição para ativar o efeito de hover */}
      <div className="absolute inset-0 z-20"></div>

      {/* Máscara para escurecer a imagem */}
      <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>

      {/* Imagem de fundo */}
      <Image
        src={url}
        alt={alt}
        layout="fill"
        className={`object-cover w-full h-full ${
          hoverEffectEnabled ? hoverEffect : ""
        } ${className}`}
      />

      {/* Conteúdo textual */}
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
    </>
  );

  // Renderiza o conteúdo dentro de um Link se link for fornecido, caso contrário, mantém dentro de uma div
  return link ? (
    <Link className={`${Containerclasses} group`} href={link} passHref>
      {content}
    </Link>
  ) : (
    <div className={`${Containerclasses} group`}>{content}</div>
  );
};

export default Headline;
