import { FC } from "react";

interface TagRibbonType {
  tags: string[];
  bgColor: string;
}

const TagRibbon: FC<TagRibbonType> = ({ tags,bgColor }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`px-4 py-2 ${bgColor}  rounded-full font-bold`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagRibbon;
