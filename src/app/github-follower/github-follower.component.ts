import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Services/github-service/github.service';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers: any[];
  loading: boolean = true

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.followers = response;
        this.loading = false;
        // console.log(response) 
      }, () => {
        this.loading = false;
      })
  }

}
