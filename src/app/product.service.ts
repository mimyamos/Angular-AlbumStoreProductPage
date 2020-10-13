import { Injectable } from '@angular/core';
import {HttpClient, Response} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

private albumUrl = '../assets/album.json';

constructor(private http: HttpClient) { }
  
  getAlbum(id: number) {

    return this.http.get(this.albumUrl).map((response: any) => Response.json());
  }

}