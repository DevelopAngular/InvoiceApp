import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { Invoice } from '../../models/invoice';

import { InvoiceService } from '../services/invoice.service';

@Injectable()
export class InvoiceResolverService implements Resolve<Invoice | boolean> {

  constructor(
    private invoiceService: InvoiceService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Invoice> | boolean {
    const id = route.paramMap.get('id');
    if (id) {
      return this.invoiceService.getInvoice(id).take(1);
    }

    return false;
  }
}

