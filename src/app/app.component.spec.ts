import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Deve adicionar um novo post a lista', () => {
    component.addPost({ title: 'Titulo do post', body: 'Corpo do post' });
    expect(component.posts()).toEqual([
      { title: 'Titulo do post', body: 'Corpo do post' },
    ]);

    component.addPost({ title: 'Titulo do post 2', body: 'Corpo do post 2' });
    expect(component.posts()).toEqual([
      { title: 'Titulo do post', body: 'Corpo do post' },
      { title: 'Titulo do post 2', body: 'Corpo do post 2' },
    ]);
  });
});
