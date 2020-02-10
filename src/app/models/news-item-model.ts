export interface NewsPublisherItemsResponse{
    sources: NewsPublisherItemModel[];
}

export interface NewsPublisherItemModel{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}