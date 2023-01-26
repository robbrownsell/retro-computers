import { Component } from '@angular/core';
import {ComputersService} from "../../services/computers.service";
import {IComputer} from "../../domain/IComputer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rc-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  computerResults: IComputer[] | undefined;
  searchTerm: String | undefined;

  constructor(private computersService: ComputersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.searchTerm = params['searchTerm']
          this.doSearch(params['searchTerm'])
        }
      );


  }

  doSearch(searchTerm: String) {
    this.computersService.getComputers().subscribe(
      {
        next: computers => {
          this.computerResults = computers.filter(computer => {
            return computer.make.toLowerCase() === searchTerm.toLowerCase()
          })
        }
      }
    )
  }


}
