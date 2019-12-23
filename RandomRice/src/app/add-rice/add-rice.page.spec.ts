import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRicePage } from './add-rice.page';

describe('AddRicePage', () => {
  let component: AddRicePage;
  let fixture: ComponentFixture<AddRicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
