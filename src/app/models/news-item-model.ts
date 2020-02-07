export interface NewsItemsResponse{
    sources: NewsItemModel[];
}

export interface NewsItemModel{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}