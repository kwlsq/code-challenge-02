import { FC } from "react";

interface TagRibbonType {
  tags: string[];
}

const TagRibbon: FC<TagRibbonType> = ({ tags }) => {
  return <div>{tags}</div>;
};

export default TagRibbon;
