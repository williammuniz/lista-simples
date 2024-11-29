import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from "./components/person/person.component";

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
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
