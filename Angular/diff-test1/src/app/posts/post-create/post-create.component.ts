import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';
import { mimeType } from './mime-type.validator';

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
  form: FormGroup;
  imagePreview: string;

  private mode = 'create';
  private postId: string;


  // ActivatedRoute include routing info
  constructor(public postsService: PostsService,
              public route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      // ships
      title : new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content : new FormControl(null, {
        validators: [Validators.required]
      }),
      image : new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
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
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content
          });
        });
      }
      // tslint:disable-next-line:one-line
      else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    // not sure event.target so convert this to type HTML
    const file = (event.target as HTMLInputElement).files[0];

    // allows you to target a ingle control
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    // console.log(file);
    // console.log(this.form);
    const reader = new FileReader();
    reader.onload = () => {
      /* this.imagePreview = reader.result;
         this.imagePreview = <string>reader.result;
         this.imagePreview = reader.result as string;
         const arr = new Uint8Array(fileReader.result).subarray(0, 4);
         const arr = newUint8Array(<ArrayBuffer>fileReader.result).subarray(0, 4);
         const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4); */
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }

  onSavePost() {
    // console.log(postInput);
    // this.newPost = this.enteredValue;
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postsService.addPost(this.form.value.title, this.form.value.content);
    }
    // tslint:disable-next-line:one-line
    else {
      this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content
      );
    }
    this.form.reset();
  }

}
