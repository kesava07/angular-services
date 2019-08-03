import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users$;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.users$ = this.db.list('/users')
  }

}
