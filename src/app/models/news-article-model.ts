export interface NewsArticleModelResponce{
    articles: NewsArticleModel[];
}

export interface NewsArticleModel{
    source:NewsArticleSource,
    author: string,
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

interface NewsArticleSource{
    id:string;
    name:string;
}