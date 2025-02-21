import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPost } from '../../interfaces/ipost.interface';
import { validateImageUrl } from '../../lib/validate-img-url';
import { ErrorMessageComponent } from "../error-message/error-message.component";

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  noticiaForm: FormGroup;
  errorText: string = '';

  constructor() {
    this.noticiaForm = new FormGroup(
      {
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        body: new FormControl('', [Validators.required]),
        img: new FormControl('', [Validators.required, validateImageUrl]),
        date: new FormControl('', [Validators.required]),
      },
      []
    );
  }
  @Output() postEnviar: EventEmitter<IPost> = new EventEmitter();

  cargarDatos() {
    if (!this.noticiaForm.get('title')?.valid) {
      this.errorText = 'Falta añadir un titulo';
      return;
    }
    if (!this.noticiaForm.get('body')?.valid) {
      this.errorText = 'Falta añadir un contenido';
      return;
    }
    if (!this.noticiaForm.get('img')?.valid) {
      this.errorText = 'Formato http no valido para la imagen';
      return;
    }
    if (!this.noticiaForm.get('date')?.valid) {
      this.errorText = 'Falta seleccionar una fecha';
      return;
    }

    this.errorText = '';
    this.noticiaForm.value.date = new Date(this.noticiaForm.value.date);
    this.postEnviar.emit(this.noticiaForm.value);

    this.noticiaForm.reset();
  }

  // Funcion para validar los campos del formulario
  checkControl(controlName: string, errorName: string): boolean | undefined {
    return (
      this.noticiaForm.get(controlName)?.hasError(errorName) &&
      this.noticiaForm.get(controlName)?.touched
    );
  }
}
