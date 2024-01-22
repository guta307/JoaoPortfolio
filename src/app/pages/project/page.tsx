"use client";

import React, { useState, useEffect } from "react";
import Headline from "@/app/components/headline/headline";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import fetchDataFromBin from "@/app/services/getProjects";

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
  };
}

const ProjectPage = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (typeof id === "string") {
      getData(id);
    }
  }, [id]);

  const getData = async (id: string) => {
    const response = await fetchDataFromBin(id);
    setProjectData(response.record);
  };

  const formatHeader = (header: string) => {
    return header.replace(/\n/g, "<br />");
  };

  if (!projectData) return <div>Carregando...</div>;

  return (
    <div className="flex gap-8 flex-col items-center">
      <Headline
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

        <Link
          className="article underline text-tmd"
          href={projectData.link.href}
        >
          {projectData.link.text}
        </Link>
      </article>
    </div>
  );
};

export default ProjectPage;
