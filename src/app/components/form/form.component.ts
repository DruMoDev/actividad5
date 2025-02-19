import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  noticiaForm: FormGroup;
  errorText: string = '';

  constructor() {
    this.noticiaForm = new FormGroup(
      {
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required]),
        img: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
      },
      []
    );
  }
  @Output() postEnviar: EventEmitter<IPost> = new EventEmitter();

  cargarDatos() {
    if (!this.noticiaForm.valid) {
      this.errorText = 'Faltan campos por rellenar';
      return;
    }
    if (!this.noticiaForm.value.img.startsWith('http')) {
      this.errorText = 'La imagen no tiene un formato http valido';
      return
    }
    this.errorText = '';
    this.noticiaForm.value.date = new Date(this.noticiaForm.value.date);
    this.postEnviar.emit(this.noticiaForm.value);

    this.noticiaForm.reset()
  }
}
