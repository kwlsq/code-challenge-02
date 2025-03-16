import { FC } from "react";

interface PageHeadLineType {
  headline: string;
  description: string;
}

const PageHeadline: FC<PageHeadLineType> = ({ headline, description }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
      <h1
        dangerouslySetInnerHTML={{ __html: headline }}
        className="text-[var(--text-default)] text-4xl md:text-6xl"
      ></h1>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-[var(--text-secondary)] text-2xl md:text-4xl"
      ></p>
    </div>
  );
};

export default PageHeadline;
