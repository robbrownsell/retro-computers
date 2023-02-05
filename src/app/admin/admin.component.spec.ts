import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from "../components/header/header.component";
import { FormsModule } from "@angular/forms";
import { ActiveTabDirective} from "../components/header/active-tab.directive";

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent, HeaderComponent, ActiveTabDirective ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
