import { CommonService } from '../Common.service';
import { Http } from '@angular/http';

export class PostsService extends CommonService {

  constructor(http: Http) {
    super("https://jsonplaceholder.typicode.com/posts", http)
  }
}
