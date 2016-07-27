import { Component } from '@angular/core';
import { BookComponent } from './book';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BookComponent]
})
export class AppComponent {
  title = 'app works!';
}
