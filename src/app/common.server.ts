import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class GoodsService {
  public postListURL = "mock-data/goods-list.json";
  constructor(public http: Http) { }
  public getGoodsList({
                        searchText,
                        page: number = 1,
                        type: string= "get"
                      }) {
    return Observable.of({});
  }
}
