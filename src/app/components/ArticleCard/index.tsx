import { FC } from "react";

interface ArticleCardType {
  title: string;
  description: string;
}

const ArticleCard: FC<ArticleCardType> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:w-3/4 rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)]">
      <div className="text-[var(--text-default)] text-4xl font-bold">
        {title}
      </div>
      <div
        className="text-[var(--text-secondary)] text-xl"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default ArticleCard;
