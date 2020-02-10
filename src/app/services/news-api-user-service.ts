import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NewsPublisherItemsResponse } from '../models/news-item-model';
import { NewsArticleModel } from '../models/news-article-model';


@Injectable()
export class NewsApiUserService{
    private static userArticles:NewsArticleModel[] = [];
    private static idCounter:number = 0;

    static createArticle(model:NewsArticleModel){
        debugger;

        model.source.id= `custom-article-${++this.idCounter}`;
        this.userArticles.push(model);
    }

    static getUserArticleById(id:string):NewsArticleModel{
        return this.userArticles.find(x=>x.source.id == id);
    }

    static editUserArticleById(id:string, updateModel:NewsArticleModel){
        let article = this.getUserArticleById(id);
        article = updateModel;
    }

    static getAllUserArticles():NewsArticleModel[]{
        debugger;
        return this.userArticles;
    }

    static deleteUserArticleById(id:string){
        const article = this.getUserArticleById(id);
        const index = this.userArticles.indexOf(article);
        this.userArticles.splice(index,1);
    }

}