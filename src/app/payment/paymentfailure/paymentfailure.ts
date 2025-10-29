import { Component } from '@angular/core';

import { RouterLink, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-paymentfailure',
  imports: [RouterLink],
  templateUrl: './paymentfailure.html',
  styleUrl: './paymentfailure.css'
})
export class Paymentfailure {


  bookingReference: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookingReference = this.route.snapshot.paramMap.get('bookingReference') || '';
  }
}
