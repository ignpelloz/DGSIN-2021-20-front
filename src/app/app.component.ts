import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css'] // styles for this comp
})
export class AppComponent {
  title = 'dgsin-contacts-front';

  // here code of my comp

  setTitle(title: string): void {
    
  }

}
