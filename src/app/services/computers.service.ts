import {Injectable} from "@angular/core";
import {IComputer} from "../domain/IComputer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ComputersService {

  constructor(private http: HttpClient) {
  }

  getComputers(): Observable<IComputer[]> {
    return this.http.get<IComputer[]>("assets/computers/computers.json")
  }

}
