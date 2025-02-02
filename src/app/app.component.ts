import { Component, signal } from '@angular/core';
import { PostFormComponent } from "./post-form/post-form.component";
import { Post } from './models/post.model';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [PostFormComponent, PostCardComponent],
})
export class AppComponent {
  posts = signal<Post[]>([]);

  addPost(post: Post) {
    this.posts.update((posts) => [...posts, post]);
  }
}
