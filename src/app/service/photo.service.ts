import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../model/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient

  ) { }

  public fetchPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
