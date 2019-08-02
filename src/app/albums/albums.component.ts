import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../Services/album-service/albums.service';
import { AppError } from '../Common/service-errors/app-error';
import { NotFoundError } from '../Common/service-errors/not-found-error';
import { BadInput } from '../Common/service-errors/bad-input';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any[];
  loader: boolean = true;

  constructor(private service: AlbumsService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(albums => {
        this.albums = albums;
        this.loader = false
      }, () => this.loader = false)
  }

  createAlbum(album) {
    let postTitle = { title: album.value }
    album.value = ""
    this.service.create(album)
      .subscribe(response => {
        this.albums.splice(0, 0, postTitle)
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          alert("Bad request")
        } else throw error;
      })
  }

  deleteAlbum(album) {
    this.service.delete(album.id)
      .subscribe(response => {
        let index = this.albums.indexOf(album);
        this.albums.splice(index, 1)
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("the item already deleted")
        } else throw error;
      })
  }

  updateAlbum(album, index) {
    this.service.update(album)
      .subscribe(response => {
        this.albums[index].title = "Hello i'm updated";
      })
  }

}
