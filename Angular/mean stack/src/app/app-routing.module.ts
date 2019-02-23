import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  // { path: '', component: },
  { path : '', component: PostListComponent},
  // you don't add '/create', just 'create'
  { path : 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
  { path : 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]},
  { path : 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

/*
Important note is that
router is only for client side: meaning backend will not be
able to pick up these urls rather the url and re-rendering
parts of the page and server side routing which is all
about handling incoming request and sending back response.
*/

// routes are js object which url is presented
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
