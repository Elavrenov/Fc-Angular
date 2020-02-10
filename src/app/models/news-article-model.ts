export interface NewsArticleModelResponce{
    articles: NewsArticleModel[];
}

export class NewsArticleModel{
    source:NewsArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export class NewsArticleSource{
    id:string;
    name:string;
}