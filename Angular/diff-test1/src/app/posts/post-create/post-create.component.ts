import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';
/* Decorator @
define basic component
*/
@Component({
  templateUrl: './post-create.component.html',
  /* allows us to use that template */
  selector : 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  post: Post;
  isLoading = false;

  private mode = 'create';
  private postId: string;


  // ActivatedRoute include routing info
  constructor(public postsService: PostsService,
              public route: ActivatedRoute) {}

  ngOnInit() {
    // paramMap is an observable because parameter in the
    // url could change whilst we are on the page bc
    // some links can be clicked to load same angular comps but
    // for different post id,
    // we can now listen to the routes and updates
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
      }
      // tslint:disable-next-line:one-line
      else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    // console.log(postInput);
    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content);
    }
    // tslint:disable-next-line:one-line
    else {
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
    form.resetForm();
  }

}
