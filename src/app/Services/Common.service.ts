import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw"
import { AppError } from '../Common/service-errors/app-error';
import { BadInput } from '../Common/service-errors/bad-input';
import { NotFoundError } from '../Common/service-errors/not-found-error';

export class CommonService {

    constructor(private url: string, private http: Http) { };

    getAll(): Observable<any> {
        return this.http.get(this.url)
            .map((response => response.json()))
            .catch(this.handleErrors)
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map((response => response.json()))
            .catch(this.handleErrors)
    }

    delete(id) {
        return this.http.delete(`${this.url}/${id}`)
            .map((response => response.json()))
            .catch(this.handleErrors)
    }

    update(resource) {
        return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({ title: "chenna kesava" }))
            .map((response => response.json()))
            .catch(this.handleErrors)
    }

    public handleErrors(error: Response) {

        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error.json()))
        }

        if (error.status === 400)
            return Observable.throw(new BadInput(error.json()))

        return Observable.throw(new AppError(error.json()))
    }

}
