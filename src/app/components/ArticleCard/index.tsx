import { FC } from "react";

interface ArticleCardType {
  title: string;
  description: string;
  className?: string;
}

const ArticleCard: FC<ArticleCardType> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)] ${className}`}
    >
      <div className="text-[var(--text-default)] text-4xl font-bold">
        {title}
      </div>
      <div
        className="text-[var(--text-secondary)] text-xl leading-8 "
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default ArticleCard;
