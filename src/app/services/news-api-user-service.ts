import {Injectable, Inject} from '@angular/core';
import { NewsArticleModel } from '../models/news-article-model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
    providedIn: 'root',
})
export class NewsApiUserService{
    private userArticles:NewsArticleModel[] = [];
    private static idCounter:number = 1;

    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService){}

    createArticle(model:NewsArticleModel){
        model.uid = `custom-article-${++NewsApiUserService.idCounter}`;
        this.userArticles.push(model);
        this.storage.set(model.uid, model);
    }

    getUserArticleById(id:string):NewsArticleModel{
        return this.userArticles.find(x=>x.source.id == id);
    }

    editUserArticleById(id:string, updateModel:NewsArticleModel){
        let article = this.getUserArticleById(id);
        article = updateModel;
    }

    getAllUserArticles():NewsArticleModel[]{
        return this.userArticles;
    }

    deleteUserArticleById(id:string){
        const article = this.getUserArticleById(id);
        const index = this.userArticles.indexOf(article);
        this.userArticles.splice(index,1);
        this.storage.remove(id);
    }

}