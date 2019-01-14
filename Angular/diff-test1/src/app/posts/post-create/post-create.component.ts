import { Component } from '@angular/core';

/* Decorator @
define basic component
*/
@Component({
  templateUrl: './post-create.component.html',
  selector : 'app-post-create',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredValue = '';
  newPost = 'No Content';

  onAddPost() {
    // console.log(postInput);
    this.newPost = this.enteredValue;
  }

}
