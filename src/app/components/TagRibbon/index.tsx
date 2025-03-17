import { FC } from "react";

interface TagRibbonType {
  tags: string[];
}

const TagRibbon: FC<TagRibbonType> = ({ tags }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <div
          key={tag}
          className="px-3 py-2 bg-[var(--default-hover)] rounded-full font-bold"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagRibbon;
