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
  public postDelivery(): Observable<any> {
  }

  // @ts-ignore
  public getDelivery(): Observable<any> {
  }

  // @ts-ignore
  public getReturn(): Observable<any> {
  }

  // @ts-ignore
  public giveRefund(): Observable<any> {
  }

  // @ts-ignore
  public giveReorder(): Observable<any> {
  }
}
