import {Component} from '@angular/core';
import {IComputer} from "../domain/IComputer";

@Component({
  selector: 'rc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  newComputer: IComputer = new class implements IComputer {
    bits: string = "";
    description: string = "";
    image: string = "";
    make: string = "";
    memory: string = "";
    model: string = "";
    yearsInProduction: string = "";
  }

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    console.log(this.newComputer?.make);
  }

}
