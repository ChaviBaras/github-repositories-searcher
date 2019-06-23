import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RepositoryService {

  private query: string;


  constructor(private http: Http) {
    console.log('service is now ready');
    this.query = 'GitHub-repositories-search';
  }

  getRepos() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/search/repositories?q=${' + this.query + '}&per_page=100&page=1')
     .pipe(map(res => res.json()));
  }
}
