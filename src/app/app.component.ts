import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  price = 3.123935453453;

  obj = {
    name: "Angular",
    version: "18"
  }

  name: string = "This iS STRing"

  today = new Date();

  constructor() {

  }
} 

/* 

  <h2>Pipes</h2>
       <p>Original Value: {{price}}</p>
       <p>Number Pipe: {{price | number: '0.0-0' }}</p>
       <p>Number Pipe: {{price | number: '1.3-5' }}</p>
       <p>Original Value: {{price | percent }}</p>
       <p>Original Value: {{price | currency: 'RUB' }}</p>

       <!-- JSON PIPE -->
       <h2>JSON Pipe</h2>

       <p>{{obj | json}}</p>
       <!-- String Pipe -->
       <h2>String Pipe</h2>
       <p>Original value: {{name}}</p>
       <p>{{name | uppercase}}</p>
       <p>{{name | lowercase}}</p>
       <p>{{name | titlecase}}</p>
       <p>{{name | slice: 4}}</p>
       <p>{{name | slice: 5 : 10}}</p>
       <br>
       <h2>KeyValue Pipe</h2>
       @for (item of obj | keyvalue; track item.key) {
        <div>{{ item.key }}:{{ item.value }}</div>
      }
       <!-- Date Pipe -->

       <p>{{today}}</p>
       <p>{{today | date: "short"}}</p>
       <p>{{today | date: "medium"}}</p>
       <p>{{today | date: "long"}}</p>
       <p>{{today | date: "yyyy"}}</p>*/