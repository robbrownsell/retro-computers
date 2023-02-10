import {ComputersService} from "./computers.service";
import {TestBed} from "@angular/core/testing";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

describe('Computer service test', () => {

  let computerService: ComputersService;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  })


  it('should ', async () => {
    const httpSpy = TestBed.inject(HttpClient);
    const mockData = getMockData();
    spyOn(httpSpy, 'get').and.returnValue(of(mockData))
    computerService = new ComputersService(httpSpy);

    computerService.getComputers().subscribe(
      {
        next: computers => {
          expect(computers[0].make).toEqual("Commodore")
        }
      });
  })


})


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
      "make": "Atari",
      "model": "Amiga 500",
      "memory": "512k - 4096k",
      "bits": "16",
      "image": "assets/images/amiga500.png",
      "yearsInProduction": "1987 - 1992",
      "description": "Amiga is a family of personal computers introduced by Commodore in 1985. The original model is one of a number of mid-1980s computers with 16- or 16/32-bit processors, 256 KB or more of RAM, mouse-based GUIs, and significantly improved graphics and audio compared to previous 8-bit systems."
    }]
}
