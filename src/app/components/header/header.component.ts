import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'rc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  }
)
export class HeaderComponent {

  @Input() activeComponent: string = "home"
  searchTerm: string = "";
  constructor(private router: Router) {
  }

  performSearch(): void {
    this.router.navigate(['/search'], { queryParams: { searchTerm: this.searchTerm }});
  }

}
