import { Post } from './post.model';
import { Injectable } from '@angular/core';
// objects that pass data around, event emiter
import { Subject } from 'rxjs';

// creating one service fore entire angular
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // spread operator creating new array with posts array.
    // try to be immutable
    return [...this.posts];
    // return this.posts;
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string ) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
