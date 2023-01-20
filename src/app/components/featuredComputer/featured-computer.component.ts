import {Component} from "@angular/core";
import {ComputersService} from "../../services/computers.service";
import {IComputer} from "../../domain/IComputer";

@Component({
  selector: "featured-computer",
  templateUrl: "featuredComputer.component.html"
})
export class FeaturedComputerComponent {

  private computerService: ComputersService;
  computer: IComputer | undefined;

  constructor(computerService: ComputersService) {
    this.computerService = computerService;
  }

  ngOnInit(): void {
    const computers = this.computerService.getComputers()
    const randomIndex = this.randomIntFromInterval(0, computers.length-1)
    this.computer = computers[randomIndex]
  }

  private randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
