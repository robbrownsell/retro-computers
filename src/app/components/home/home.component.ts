import {Component} from '@angular/core';
import {ComputersService} from "../../services/computers.service";
import {IComputer} from "../../domain/IComputer";

@Component({
  selector: 'rc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ComputersService]
})
export class HomeComponent {

  private computerService;

  constructor(computerService: ComputersService) {
    this.computerService = computerService;
  }

  getComputers(): IComputer[] {
    return this.computerService.getComputers()
  }

  // ngOnInit(): void {
  //   this.featuredComputer = this.computerService.getComputers()[0]
  // }

}
