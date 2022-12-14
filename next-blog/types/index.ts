export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
    title: string;
    slug: string;
}

export interface IResourceMeta {
    pagination: IPagination;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;

}

export interface IImageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string;
                }
            }
        }
    }
}

export interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            }
                        }
                    }
                }
            }
        }
    }
}

export interface IArticlesAttribute {
    title: string;
    body: string;
    slug: string;
    image: IImageData;
    subtitle: string;
    createdAt: string;
    author: IAuthor;
}

export interface IArticle<> {
    id: number;
    attributes: IArticlesAttribute;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    }
}