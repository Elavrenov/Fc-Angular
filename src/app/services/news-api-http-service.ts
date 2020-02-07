import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NewsItemsResponse } from '../models/news-item-model';
import { NewsArticleModelResponce } from '../models/news-article-model';

import { map } from 'rxjs/operators';

@Injectable()
export class NewsApiHttpService{
    private apiKey:string = 'a8e7022f2469447b94e5d28e5ecbecdd';

    constructor(private http: HttpClient){ }
      
    getAllNewsPublishers(){
        return this.http.get<NewsItemsResponse>(`https://newsapi.org/v2/sources?apiKey=${this.apiKey}`)
        .pipe(map(data =>{return data.sources;}));
    }

    getNewsByPublisherId(publisherId){
        const getOptions={
            params: {
                apiKey: this.apiKey, 
                sources: publisherId
            }
        }
        return this.http.get<NewsArticleModelResponce>(`https://newsapi.org/v2/everything`, getOptions)
        .pipe(map(data =>{return data.articles;}));
    }
}