import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  // Injecting service and router service which enables navigation.
  constructor (
    public storeService: StoreService,
    private router: Router) { }

  ngOnInit (): void {
  }

  // Method that passes a string which is the url the user routes to when an event is triggered.
  navigateTo (url: string) {

    // clears the local storage after routing a new view.
    localStorage.clear();
    
    // set object of the user to undefined so it has no value.
    this.storeService.setUser({ name: undefined, organisationName: undefined, email: undefined});

    // use router service to naviagte to specified url.
    
    this.router.navigate([ url ]);
     
  }
  


}
