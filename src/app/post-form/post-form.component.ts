import { Component, EventEmitter, output, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class PostFormComponent {
  @Output() submitForm = new EventEmitter<Post>();

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(50)],
    }),
    body: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(355)],
    }),
  });

  onSubmit() {
    const dataForm = this.form.getRawValue();
    this.submitForm.emit(dataForm);
    this.form.reset();
  }
}