import { Injectable } from '@angular/core';
import {Post} from "../model/post.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [

    {
      userId: 1,
      id: 1,
      title: 'lorem1',
      body: 'lorem ipsum1',
    },
    {
      userId: 2,
      id: 1,
      title: 'lorem2',
      body: 'lorem ipsum2',
    }
  ];

  constructor(
    private http: HttpClient
  ) {

  }

  public readPosts(): Post[]{
    return this.posts;
  }

  public fetchPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public fetchPost(id: string): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
