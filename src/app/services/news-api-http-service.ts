import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NewsItemModel } from '../models/news-item-model';
import { map } from 'rxjs/operators';

@Injectable()
export class NewsApiHttpService{
    private apiKey:string = 'a8e7022f2469447b94e5d28e5ecbecdd';

    constructor(private http: HttpClient){ }
      
    getAllNews(){
        return this.http.get<NewsItemsResponse>(`https://newsapi.org/v2/sources?apiKey=a8e7022f2469447b94e5d28e5ecbecdd`)
        .pipe(map(data =>{return data.sources;}));
    }
}

interface NewsItemsResponse{
    sources:NewsItemModel[];
}