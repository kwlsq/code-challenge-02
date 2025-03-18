import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import TagRibbon from "../TagRibbon";

interface ProjectCardType {
  title: string;
  description?: string;
  imgSrc?: string;
  maxImgHeight?: string;
  imgAlt?: string;
  tags: string[];
  href: string;
  emoji?: string;
  containerWidth: string;
}

const ProjectCard: FC<ProjectCardType> = ({
  title,
  href,
  imgSrc,
  imgAlt,
  maxImgHeight,
  tags,
  emoji,
  description,
  containerWidth,
}) => {
  console.log(containerWidth);
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)] ${containerWidth}`}
    >
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
            height={500}
            width={500}
            src={imgSrc}
            alt={imgAlt ?? ""}
            className={`object-cover w-full ${maxImgHeight} rounded-xl`}
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
