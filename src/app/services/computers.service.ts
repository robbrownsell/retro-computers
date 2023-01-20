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
        "make": "Atari",
        "model": "520 STFM",
        "memory": "512k",
        "bits": "16",
        "image": "assets/images/atari520st.png",
        "yearsInProduction": "1985 - 1990",
        "description": "The Atari ST line of computers was launched in 1985 by Atari Corporation, beginning with the Atari 520ST. " +
          "It included an 8 MHz Motorola 68000 CPU and 512 KB of RAM. Later models included a built-in 3.5\" floppy disk drive, RF modulator and an internal power supply. " +
          "\"ST\" stands for Sixteen-Thirtytwo, because of the 68000 CPU's 16-bit external data bus and 32-bit internal data bus."
      },
      {
        "make": "Commodore" ,
        "model": "Amiga 500",
        "memory": "512k",
        "bits": "16",
        "image": "assets/images/amiga500.png",
        "yearsInProduction": "1985 - 1990",
        "description": "Amiga is a family of personal computers introduced by Commodore in 1985. The original model is one of a number of mid-1980s computers with 16- or " +
          "16/32-bit processors, 256 KB or more of RAM, mouse-based GUIs, and significantly improved graphics and audio compared to previous 8-bit systems."
      }
    ]
  }

}
