import { Component } from '@angular/core';
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
  featuredComputer: IComputer = {"name": ""};

  constructor(computerService: ComputersService) {
    this.computerService = computerService;
  }

  ngOnInit(): void {
    this.featuredComputer = this.computerService.getComputers()[0]
  }

}
