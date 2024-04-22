import { IArticle } from "@/types";
import React from "react";
import Blogcard from "./Blogcard";

interface IPropType {
  articles: IArticle[];
}
const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-8 ">
      {articles.map((article) => {
        return <Blogcard article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
