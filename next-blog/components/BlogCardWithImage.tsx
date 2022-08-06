import React from 'react';
import {IArticle} from "../types";
import Link from "next/link";
import Image from "next/image";

interface IPropType {
    article: IArticle;
}

const BlogCardWithImage = ({article}: IPropType) => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-violet-900 h-64 rounded-md flex items-center">
            <Link href={`/article/${article.attributes.slug}`}>
                <span
                    className="text-xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                    {article.attributes.title}</span>
            </Link>
            <Image src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} width={140}
                   height={140}/>
        </div>
    );
}

export default BlogCardWithImage;