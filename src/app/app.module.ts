import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './Services/album-service/albums.service';
import { AppErrorHandler } from './Common/service-errors/app-error-handler';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './Services/posts-service/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AlbumsService,
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
