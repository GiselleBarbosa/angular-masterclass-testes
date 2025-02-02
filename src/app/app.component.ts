import { Component } from '@angular/core';
import { PostFormComponent } from "./post-form/post-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [PostFormComponent]
})
export class AppComponent {
  title = 'angular-masterclass-testes';
}
