import React from 'react';
import {GetServerSideProps} from "next";
import {IArticle, ICategory, ICollectionResponse, IQueryOptions} from "../../types";
import qs from "qs";
import {AxiosResponse} from "axios";
import {getArticle} from "../../http";
import Head from "next/head";
import {formatDate, formatSlug} from "../../utils";
import Image from "next/image";

interface IPropType {
    article: IArticle;
    notFound?: boolean;
}

const Article = ({article, notFound = false}: IPropType) => {
    return (
        <div>
            <Head>
                <title>{formatSlug(article.attributes.slug)}</title>
                <meta name="description" content={article.attributes.subtitle}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="my-12 grid lg:grid-cols-3 gap-12">
                <div className="col-span-2">
                    <h1 className="text-3xl font-bold">{article.attributes.title}</h1>
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
                    <div className="text-lg text-gray-600 leading-8">
                        <img
                            className="w-full my-12 mb-6"
                            src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                            alt={article.attributes.title}/>
                        <p>{article.attributes.body}</p>
                    </div>
                </div>
                <div>R</div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    // fetch slug based article
    const options: Partial<IQueryOptions> = {
        populate: ['author.avatar', "image"],
        filters: {
            slug: {$eq: query.slug}
        }
    }


    const queryString = qs.stringify(options);
    const {data: article}: AxiosResponse<ICollectionResponse<IArticle[]>> = await getArticle(queryString);

    if (article.data.length === 0) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            article: article.data[0],
        }
    }
}

export default Article;