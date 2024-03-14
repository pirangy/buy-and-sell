import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent {
  listing: Listing = {} as Listing;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit (): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.listing = fakeListings.find(listing => listing.id === id) || {} as Listing;
  }
}
