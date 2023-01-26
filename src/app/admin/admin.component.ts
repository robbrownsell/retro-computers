import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'rc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  makeInput = new FormControl('');

  submitComputer(): void {
    console.log(this.makeInput.value);
  }

}
