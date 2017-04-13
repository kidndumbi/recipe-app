import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showHide: String = 'rec';

  getNewLink(e) {
    console.log(e);
    this.showHide = e;
  }


}
