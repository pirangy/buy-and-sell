import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
email: string = '';
message: string = '';
listing: Listing = {} as Listing;

constructor(
  private route: ActivatedRoute,
  private router: Router,
) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.listing = fakeListings.find(listing => listing.id === id) || {} as Listing;
  this.message = `Hi, I'm interested in your ${this.listing.name.toLocaleLowerCase()}!`
}

sendMessage(): void {
  alert('Your message has been sent!');
  this.router.navigateByUrl('/listings');
}

}
