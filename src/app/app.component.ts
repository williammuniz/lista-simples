import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from "./components/person/person.component";
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number | undefined;

  listPessoas = [
    { name: 'William Muniz', age: 35 },
    { name: 'Letícia Muniz', age: 29 },
    { name: 'Tobias Muniz', age: 4 },
    { name: 'Bruce Dickinson', age: 70 },
    { name: 'Rogério Ceni', age: 42 },
    { name: 'Lucas Moura', age: 34 },
    
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
