import {Injectable, Inject} from '@angular/core';;
import {NewsApiHttpService} from '../services/news-api-http-service';
import { NewsArticleModel} from '../models/news-article-model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Injectable({
    providedIn: 'root',
  })
export class NewsApiInternalService{
    private static i:number;
    private key:string='key';

    constructor(private newsApiService: NewsApiHttpService,
                @Inject(LOCAL_STORAGE) private storage: WebStorageService){ }

    getArticlesByPubliherId(publisherId:string){
        NewsApiInternalService.i = 1;

        return this.newsApiService.getNewsByPublisherId(publisherId).then(x=>{
                x.forEach(el=> {
                    el.uid = `${el.source.id}-${NewsApiInternalService.i++}`;
                });

                this.storage.set(this.key, x);
                return x;
            });
    }

    getArticleById(id:string){
        let item = this.storage.get(id);
        if(!item){
            item = this.storage.get(this.key).find((x:NewsArticleModel) => x.uid === id);
        }
        return item;
    }
}