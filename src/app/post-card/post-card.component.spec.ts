import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('post', {      
          title: 'Titulo do Post',
          body: 'Corpo do Post',        
      }
    )
    fixture.detectChanges();
  });

  it('Deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('Deve mostrar o titulo do post', () => {
    const title = fixture.nativeElement.querySelector('.post-title');
    expect(title.textContent).toContain('Titulo do Post');
  });

  it('Deve mostrar o Corpo do Post', () => {
    const title = fixture.nativeElement.querySelector('.post-body');
    expect(title.textContent).toContain('Corpo do Post');
  });
});
