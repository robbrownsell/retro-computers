import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from "@angular/forms";
import { ActiveTabDirective} from "../header/active-tab.directive";
import {FeaturedComputerComponent} from "../featuredComputer/featured-computer.component";
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeaderComponent, ActiveTabDirective, ActiveTabDirective, FeaturedComputerComponent ],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
