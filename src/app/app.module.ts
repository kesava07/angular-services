import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './Services/album-service/albums.service';
import { AppErrorHandler } from './Common/service-errors/app-error-handler';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './Services/posts-service/posts.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { GithubService } from './Services/github-service/github.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PostsComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundPageComponent,
    GithubProfileComponent,
    GithubFollowerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers", component: GithubProfileComponent },
      { path: "follower/:userName", component: GithubFollowerComponent },
      { path: "albums", component: AlbumsComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: NotFoundPageComponent }
    ])
  ],
  providers: [
    AlbumsService,
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GithubService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
