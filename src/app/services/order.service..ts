import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  basUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  public postorder(): Observable<any> {
  }

  // @ts-ignore
  public getShipedOrders(): Observable<any> {
  }

  // @ts-ignore
  public getDeliveryOrdersbyid(): Observable<any> {
  }

   // @ts-ignore
  public getInvoicebyid(): Observable<any> {
  }
}

