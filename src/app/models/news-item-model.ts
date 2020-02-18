export class NewsPublisherItemsResponse{
    sources: NewsPublisherItemModel[];
}

export class NewsPublisherItemModel{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}