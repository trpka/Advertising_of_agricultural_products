import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  private count: number = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.increment();
      }
    });
  }

  increment() {
    this.count++;
    // Sačuvajte trenutnu vrednost brojača u localStorage
    localStorage.setItem('endpointCount', this.count.toString());
  }

  getCount() {
    return this.count;
  }
}
