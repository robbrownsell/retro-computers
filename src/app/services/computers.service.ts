import {Injectable} from "@angular/core";
import {IComputer} from "../domain/IComputer";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ComputersService {

  getComputers(): IComputer[] {
    return [
      {
        "name": "Atari ST"
      },
      {
        "name": "Commodore Amiga"
      }
    ]
  }

}
