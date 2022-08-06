import React from 'react';
import {IArticle} from "../types";
import BlogCard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropType {
    articles: IArticle[];
}

const ArticleList = ({articles}: IPropType) => {
    return (
        <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-8">
            {articles.map((article, index) => {
                return (
                    <div key={article.id}>
                        {index === 1 ? (
                            <BlogCardWithImage article={article}/>
                        ) : (
                            <BlogCard key={article.id} article={article}/>
                        )
                        }
                    </div>
                )
            })}
        </div>
    );
}

export default ArticleList;