import { Component } from '@angular/core';

@Component({
  templateUrl: './post-create.component.html',
  selector : 'app-post-create'
})
export class PostCreateComponent {

  newPost = 'No Content';

  onAddPost(postInput: HTMLTextAreaElement) {
    console.log(postInput);
    this.newPost = 'the user\n is fukcing shet';
  }

}
