import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  noticiaForm: FormGroup;

  constructor() {
    this.noticiaForm = new FormGroup(
      {
        titulo: new FormControl('', []),
        contenido: new FormControl('', []),
        imagen: new FormControl('', []),
        fecha: new FormControl('', []),
      },
      []
    );
  }

  cargarDatos() {
    console.log(this.noticiaForm.value);

  }
}
