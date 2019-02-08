import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
/* Decorator @
define basic component
*/
@Component({
  templateUrl: './post-create.component.html',
  /* allows us to use that template */
  selector : 'app-post-create',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    // console.log(postInput);
    // this.newPost = this.enteredValue;
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
