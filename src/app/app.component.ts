import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd_even_components = [];

  createNumberComponent(time){
    time = parseInt(time, 10)
    console.log("Event parameter: "+time);
    if(time%2==0)
      this.odd_even_components.push("even")
    else
      this.odd_even_components.push("odd")
  }
}