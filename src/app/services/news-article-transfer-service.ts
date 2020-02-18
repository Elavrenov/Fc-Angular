import {Injectable} from '@angular/core';
import { NewsArticleModel } from '../models/news-article-model';


@Injectable()
export class NewsArticleTransferService{
    private static article: NewsArticleModel;
    private static isExpired = true;

    static setTransferArticle(article:NewsArticleModel){
        this.article = article;
        this.isExpired = false;
    }

    static getCurrentArticle():NewsArticleModel{
        if(!this.isExpired){
            this.isExpired = true;
            return this.article;
        }

        return null;
    }
}