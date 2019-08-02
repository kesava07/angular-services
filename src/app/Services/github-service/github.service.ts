import { CommonService } from '../Common.service';
import { Http } from '@angular/http';


export class GithubService extends CommonService {

  constructor(http: Http) {
    super("https://api.github.com/users/kesava07/followers", http)
  }
}


