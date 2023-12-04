import React from "react";
interface blogType {
    id: number;
    title: string;
    url: string;
    img: string;
    category: string;
    created_at: string;
}
interface propsType {
    projectType: string;
    blogData: blogType;
}
declare const BlogBox: ({ projectType, blogData }: propsType) => React.JSX.Element;
export default BlogBox;
