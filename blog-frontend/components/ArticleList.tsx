import { IArticle } from "@/types";
import React from "react";
import Blogcard from "./Blogcard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropType {
  articles: IArticle[];
}
const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-8 ">
      {articles.map((article, index) => {
        return (
          <div key={article.id}>
            {index === 1 ? (
              <BlogCardWithImage article={article} />
            ) : (
              <Blogcard article={article} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
