import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'articleDescription'
})

export class ArticleDescriptionPipe implements PipeTransform{
    transform(data:string){
        return data.slice(0,200);
    }
}