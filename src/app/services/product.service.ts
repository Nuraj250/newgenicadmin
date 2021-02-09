import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export class ProductService {
  basUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  public postCategory(): Observable<any> {
  }

  // @ts-ignore
  public getCategory(): Observable<any> {
  }

  // @ts-ignore
  public postProduct(): Observable<any> {
  }

  // @ts-ignore
  public getProductByView(): Observable<any> {
  }
   }

