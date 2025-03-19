export interface Project {
    id: number;
    project_name: string;
    thumbnail_name: string;
    thumbnail_description: string;
    emoji: string;
    description: string;
    tags: string[];
    challenges: string;
    thumbnail_img_src: string;
    thumbnail_img_alt: string;
    max_img_height: string;
    showcase_img_src: string;
    showcase_img_src_mobile: string;
    showcase_img_alt: string;
    outcome_description: string,
    outcome_img_src: string;
    outcome_img_src_mobile: string;
    outcome_img_alt: string;
    container_width: string;
}