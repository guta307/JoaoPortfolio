"use client";

import fetchDataFromBin from "@/app/services/getProjects";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderComponent from "../header/header";
import Headline from "../headline/headline";
import Link from "next/link";
import LoadingComponent from "../loadingComponent/loadingComponent";

interface ProjectData {
  header: string;
  image: string;
  media: "documentário" | "ensaio" | "esquete" | "institucional";
  title: string;
  article: {
    paragraphs: string[];
  };
  link: {
    text: string;
    href: string;
  }[];
}

interface LinkItem {
  text: string;
  href: string;
}
const formatHeader = (header: string) => {
  return header.replace(/\n/g, "<br />");
};

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (typeof id === "string") {
      fetchDataFromBin(id).then((response) => setProjectData(response.record));
    }
  }, [id]);

  if (!projectData) return <LoadingComponent />; // Retorna null enquanto os dados não estão disponíveis

  // Conteúdo do projeto a ser renderizado
  return (
    <>
      <HeaderComponent />
      <div className="flex gap-8 desktop:pt-[80px] mobile:pt-[50px] flex-col items-center">
        <Headline
          className={"object-top"}
          url={projectData.image}
          type="fullScreen"
          alt={`${projectData.media}: ${projectData.title}`}
          media={projectData.media}
          hoverEffectEnabled={false}
          title={projectData.title}
        />
        <h1
          className="Header mobile:text-tmd desktop:text-tlg text-primary text-center"
          dangerouslySetInnerHTML={{ __html: formatHeader(projectData.header) }}
        />
        <article className="article flex flex-col gap-8 text-primary text-center text-xxl p-6 w-[90%]">
          {projectData.article.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {projectData.link.map((value: LinkItem, index: number) => {
            return (
              <Link
                id={index.toString()}
                className="article underline text-tmd"
                href={value.href}
              >
                {value.text}
              </Link>
            );
          })}
        </article>
      </div>
    </>
  );
};

export default ProjectDetails;
