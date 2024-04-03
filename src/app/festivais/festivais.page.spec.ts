import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FestivaisPage } from './festivais.page';

describe('FestivaisPage', () => {
  let component: FestivaisPage;
  let fixture: ComponentFixture<FestivaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
