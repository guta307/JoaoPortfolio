import classNames from "classnames";

// Mapas de classes
const headlineClassMap = {
  fullScreen: "w-screen h-screen",
  standard: "h-screen w-[33%] mobile:w-screen",
};

const titleClassMap = {
  fullScreen: "tablet:text-txl desktop:text-txl mobile:text-lg",
  standard: "tablet:text-txl desktop:text-tmd mobile:text-lg",
};

// Funções de estilização
export const getContainerClasses = (type: "fullScreen" | "standard") =>
  classNames({
    [headlineClassMap[type]]: type,
    "relative flex items-center justify-center overflow-hidden": true,
  });

export const getTitleClasses = (
  type: "fullScreen" | "standard",
  hoverEffectEnabled: boolean
) => {
  const baseClass = classNames({
    [titleClassMap[type]]: type,
    "transition-opacity duration-300": true,
  });

  return hoverEffectEnabled
    ? `${baseClass} opacity-0 group-hover:opacity-100`
    : `${baseClass} opacity-100`;
};

export const getHoverEffectClass = (hoverEffectEnabled: boolean) =>
  hoverEffectEnabled
    ? "group-hover:translate-y-[-50%] transition-transform duration-300"
    : "";
