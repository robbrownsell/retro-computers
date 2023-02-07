import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultsComponent} from './search-results.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";
import {ActiveTabDirective} from "../header/active-tab.directive";
import {IComputer} from "../../domain/IComputer";
import {of} from "rxjs";

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsComponent, HeaderComponent, ActiveTabDirective],
      imports: [HttpClientModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to do a search', async () => {
    const mockData = getMockData();
    const httpSpy = TestBed.inject(HttpClient);
    spyOn(httpSpy, 'get').and.returnValue(of(mockData))
    await component.doSearch("Commodore");
    const computers: IComputer[] = component.computerResults!!;
    expect(computers.length).toEqual(2);
    expect(computers[0].make).toEqual("Commodore")
  });

});

const getMockData = () => {
  return [{
    "make": "Commodore",
    "model": "64",
    "memory": "64k",
    "bits": "8",
    "image": "assets/images/c64.png",
    "yearsInProduction": "1982 - 1986",
    "description": "The Commodore 64 was a bestselling, 8-bit home computer from the 1980s. It was created by Commodore International, and it entered the market in 1982. Around 17 million units are believed to have been sold.[5] The Commodore 64 is often credited with making personal computers popular amongst the masses. This quality sparked comparisons with the Ford Model T.[6][7] The Commodore 64 was offered at relatively low prices,[8] and was available in malls, department stores, and toy stores instead of solely in the shops of authorized dealers"
  },
    {
      "make": "Commodore",
      "model": "Amiga 500",
      "memory": "512k - 4096k",
      "bits": "16",
      "image": "assets/images/amiga500.png",
      "yearsInProduction": "1987 - 1992",
      "description": "Amiga is a family of personal computers introduced by Commodore in 1985. The original model is one of a number of mid-1980s computers with 16- or 16/32-bit processors, 256 KB or more of RAM, mouse-based GUIs, and significantly improved graphics and audio compared to previous 8-bit systems."
    }]
}
