import Image from "next/image";
import { FC } from "react";

interface SocialMediaBtnType {
  imgSrc: string;
  imgAlt: string;
  text: string;
  href: string;
}

const SocialMediaBtn: FC<SocialMediaBtnType> = ({
  href,
  imgSrc,
  imgAlt,
  text,
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex w-full items-center justify-center gap-4 rounded-2xl px-6 py-4 bg-[var(--card-white)] border-2 border-[var(--border-grey)] hover:cursor-pointer "
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        height={100}
        width={100}
        className="w-10 h-10"
      />
      <div className="text-2xl">{text}</div>
    </a>
  );
};

export default SocialMediaBtn;
