import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export class DeliveryService {
  basUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  public postUserSignUP(): Observable<any> {
  }

  // @ts-ignore
  public getUserLogIN(): Observable<any> {
  }

  // @ts-ignore
  public getUserUpdate(): Observable<any> {
  }
}
