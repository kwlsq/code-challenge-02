import Image from "next/image";
import { FC } from "react";

interface ArticleCardType {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}
const ArticleCard: FC<ArticleCardType> = ({
  title,
  description,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-4">
      <div className="flex md:w-1/4">
        <Image
          height={100}
          width={200}
          src={imgSrc}
          alt={imgAlt}
          className="object-cover object-top w-full h-[536px] md:h-[359px] rounded-2xl"
        />
      </div>
      <div className="flex flex-col md:w-3/4 rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)]">
        <div className="text-[var(--text-default)] text-4xl font-bold">
          {title}
        </div>
        <div
          className="text-[var(--text-secondary)] text-xl"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleCard;
