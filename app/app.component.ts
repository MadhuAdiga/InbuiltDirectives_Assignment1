import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app/app.component.html`
})


export class AppComponent  { 
    emp_arr:any[] = [
        {
        name: "Crawford Maxwell",
        age: 30,
        profession: "Employee",
        },
        {
        name: "Rob Hoyt",
        age: 26,
        profession: "Employee",
        },
        {
        name: "Gordon Cody",
        age: 28,
        profession: "Employee",
        },
        {
        name: "Bala Savitri",
        age: 24,
        profession: "Employee",
        },
        {
        name: "Kumari Madhavi",
        age: 29,
        profession: "Employee",
        },
        {
        name: "Radha Saraswati",
        age: 29,
        profession: "Employee",
        },
        {
        name: "Sundara Baladeva",
        age: 30,
        profession: "Employee",
        },
        {
        name: "Varuna Pitambara",
        age: 24,
        profession: "Employee",
        }
        
    ]
}
 
