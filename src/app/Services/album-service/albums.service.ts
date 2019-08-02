import { Http } from '@angular/http';
import { CommonService } from '../Common.service';

export class AlbumsService extends CommonService {
  constructor(http: Http) {
    super("https://jsonplaceholder.typicode.com/albums", http)
  }
}
