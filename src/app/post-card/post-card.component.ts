import { Component, input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  standalone: true,
  imports: [],
})
export class PostCardComponent {
  readonly post = input.required<Post>();
}
