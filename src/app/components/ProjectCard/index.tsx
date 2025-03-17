import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import TagRibbon from "../TagRibbon";

interface ProjectCardType {
  title: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
  tags: string[];
  href: string;
  emoji?: string;
}

const ProjectCard: FC<ProjectCardType> = ({
  title,
  href,
  imgSrc,
  imgAlt,
  tags,
  emoji,
  description,
}) => {
  return (
    <div className="flex flex-col rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)] md:w-1/2">
      <div className="flex justify-between">
        <div className="text-4xl font-bold">{title}</div>
        <Link
          href={href}
          className="flex items-center w-12 h-12 p-2 border-3 border-[#F5F5F5] rounded-full"
        >
          <Image
            height={100}
            width={100}
            src="/icons/ic-arrow-right.svg"
            alt="icon arrow right"
            className="w-12 h-12"
          />
        </Link>
      </div>
      {imgSrc ? (
        <div>
          <Image
            height={150}
            width={200}
            src={imgSrc}
            alt={imgAlt ?? ""}
            className="w-full h-max-[240px] rounded-xl"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex text-7xl">{emoji}</div>
          <div className="text-xl text-[var(--text-secondary)] leading-8">
            {description}
          </div>
        </div>
      )}
      {tags.length > 0 ? <TagRibbon tags={tags} /> : null}
    </div>
  );
};

export default ProjectCard;
