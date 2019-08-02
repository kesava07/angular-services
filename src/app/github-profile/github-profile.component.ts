import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Services/github-service/github.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        console.log(response)
      })
  }

}
