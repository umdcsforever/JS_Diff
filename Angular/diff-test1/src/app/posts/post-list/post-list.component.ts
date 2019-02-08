import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the 1 post\'s content'},
  //   {title: 'Second Post', content: 'This is the 2 post\'s content'},
  //   {title: 'Third Post', content: 'This is the 3 post\'s content'}
  // ];

  // bindable with @input  from the outside (parent direct)
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    // automatically executed when initalized.
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListner()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    // prevent memory leak
    this.postsSub.unsubscribe();
  }
}
