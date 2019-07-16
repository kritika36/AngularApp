import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, } from 'rxjs/operators';
import { Observable, throwError, pipe, observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url:string, private http:HttpClient) { }
  getAll(){
    return this.http.get(this.url)
    .pipe(
    map (response=>response),
    catchError(this.handleError)
    );
  }
  create(resource){
      return Observable.throw(new AppError());
    // return this.http.post(this.url,JSON.stringify(resource))
    // .pipe(
    //   map (response=>response),
    //   catchError(this.handleError)
    // );
  }
  update(resource){
  return this.http.patch(this.url+ '/'+ resource.id, JSON.stringify({isRead:true}))
  .pipe(
    map (response=>response),
    catchError(this.handleError)
  );
 }
 delete(id){
    // return Observable.throw(new AppError());
     return this.http.delete(this.url+ '/'+ id)
   .pipe(
     map (response=>response), 
    
    catchError(this.handleError)
  );
 }
  private handleError(error:Response){
    if(error.status===400)
      return Observable.throw(new BadInput(error));

    if(error.status===404)
     return Observable.throw(new NotFoundError());

  return Observable.throw(new AppError(error));
  }

}