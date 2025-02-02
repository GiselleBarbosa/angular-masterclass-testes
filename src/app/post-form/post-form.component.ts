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
  submitForm = output<Post>();

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
    this.submitForm.emit(this.form.getRawValue());
  }
}
