import React from 'react';
import {IArticle} from "../types";
import Link from "next/link";
import Image from "next/image";
import {formatDate} from "../utils";

interface IPropType {
    article: IArticle;
}

const BlogCard = ({article}: IPropType) => {
    return (
        <div>
            <Link href={`/article/${article.attributes.slug}`}>
                <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.attributes.title}
                </h1>
            </Link>
            <div className="flex items-center my-4">
                <div className="flex items-center justify-center rounded-lg overflow-hidden mr-2">
                    <Image
                        src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                        height={40}
                        width={40}
                    />
                </div>
                <span className="text-sm font-bold text-gray-600">
                    {article.attributes.author.data.attributes.firstname}{' '}
                    {article.attributes.author.data.attributes.lastname} on
                &nbsp;
                </span>
                <span className="text-gray-400">
                    {formatDate(article.attributes.createdAt)}
                </span>

            </div>
            <div className="text-gray-500">{article.attributes.subtitle.slice(0,250)}{' '}{article.attributes.subtitle.length > 250 ? '...' : ''}</div>

        </div>
    );
}

export default BlogCard;