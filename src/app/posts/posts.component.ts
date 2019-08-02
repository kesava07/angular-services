import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts-service/posts.service';
import { AppError } from '../Common/service-errors/app-error';
import { BadInput } from '../Common/service-errors/bad-input';
import { NotFoundError } from '../Common/service-errors/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  loader: boolean = true;

  constructor(private service: PostsService) { }
  ngOnInit() {
    this.service.getAll()
      .subscribe((posts) => {
        this.posts = posts;
        this.loader = false;
      }, () => {
        this.loader = false;
      })
  }

  createPost(post) {
    let postTitle = { title: post.value }
    post.value = ""
    this.service.create(post)
      .subscribe(response => {
        this.posts.splice(0, 0, postTitle)
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          alert("Bad request")
        } else throw error;
      })
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("the item already deleted")
        } else throw error;
      })
  }

  updatePost(post, index) {
    this.service.update(post)
      .subscribe(response => {
        this.posts[index].title = "Hello the post was updated";
      })
  }

}
