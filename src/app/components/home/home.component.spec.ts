import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";
import {ActiveTabDirective} from "../header/active-tab.directive";
import {FeaturedComputerComponent} from "../featuredComputer/featured-computer.component";
import {HttpClientModule} from '@angular/common/http';

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

  it('should have a featured computer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('featured-computer')).not.toBeNull();
  })

  it('should have a header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('rc-header');
    expect(header).not.toBeNull();
    expect(header?.attributes.getNamedItem("ng-reflect-active-component")?.value).toEqual("home");
  })

});
