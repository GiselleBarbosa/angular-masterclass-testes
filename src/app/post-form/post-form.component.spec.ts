/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve preencher o input de titulo corretamente', () => {
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Titulo do post';
    title.dispatchEvent(new Event('input'));

    expect(component.form.controls.title.value).toBe('Titulo do post');
  });

  it('Deve preencher o textarea de corpo corretamente', () => {
    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Corpo do post';
    body.dispatchEvent(new Event('input'));

    expect(component.form.controls.body.value).toBe('Corpo do post');
  });

  it('Deve enviar o formulario corretamente', () => {
    spyOn(component.submitForm, 'emit');
    //Simula o usuário digitando
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Titulo do post';
    title.dispatchEvent(new Event('input'));

    //Simula o usuário digitando
    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Corpo do post';
    body.dispatchEvent(new Event('input'));

    // simula usuario submetendo o formulario
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Garante que o evento foi emitido corretamente
    expect(component.submitForm.emit).toHaveBeenCalledWith({
      title: 'Titulo do post',
      body: 'Corpo do post',
    });
  });
});
