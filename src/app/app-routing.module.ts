import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {PostsComponent} from "./component/posts/posts.component";
import {PhotosComponent} from "./component/photos/photos.component";
import {PostItemComponent} from "./component/post-item/post-item.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'posts/:id',
    component: PostItemComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
