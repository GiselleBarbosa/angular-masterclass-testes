import { Component, OnInit, signal } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from './models/post.model';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [PostFormComponent, PostCardComponent],
})
export class AppComponent implements OnInit {
  posts = signal<Post[]>([]);

  ngOnInit(): void {
    const savedPosts = localStorage.getItem('dataForm');
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts);
        if (Array.isArray(parsedPosts)) {
          this.posts.set(parsedPosts);
        }
      } catch (error) {
        throw('Error parsing saved posts from local storage' + error);
      }
    }
  }

  addPost(post: Post) {
    this.posts.update((posts) => {
      const updatedPosts = [...posts, post];
      localStorage.setItem('dataForm', JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  }
}