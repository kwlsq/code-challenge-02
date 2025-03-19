"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { motion } from "framer-motion";
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
  containerWidth?: string;
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#E5E5E5" : "#FFFFFE",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`flex flex-col justify-between rounded-2xl py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)] transition-all duration-300 ${containerWidth}`}
      >
        <div className="flex justify-between">
          <div className="text-4xl font-bold">{title}</div>
          <div className="flex items-center w-12 h-12 p-2 border-3 border-[#F5F5F5] bg-white rounded-full">
            <motion.div
              animate={{ rotate: isHovered ? -45 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-12 h-12"
            >
              <Image
                height={100}
                width={100}
                src="/icons/ic-arrow-right.svg"
                alt="icon arrow right"
                className="w-12 h-12"
              />
            </motion.div>
          </div>
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
        {tags.length > 0 ? (
          <TagRibbon tags={tags} bgColor="bg-[var(--default-hover)]" />
        ) : null}
      </motion.a>
    </Link>
  );
};

export default ProjectCard;
