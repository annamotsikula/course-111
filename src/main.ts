import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));


  interface User {
    name: string,
    age: number
    address: Address
  }

  interface Address {
    street: string,
    city: string,
    zip: string
  }

  interface Student extends User {
    degree: 'master' | 'bachelor'
  }
  const myUser: Student = {
    degree: 'master',
    name: 'john doe',
    age: 23,
    address: {
      street: 'ad',
      city: 'test',
      zip: 'test'
    }
  }