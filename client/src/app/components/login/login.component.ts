import { Component, OnInit, DoCheck } from "@angular/core";
import { initLogout } from "../../store/actions/auth.actions";
import { Store, select } from "@ngrx/store";
import { State, loginError } from "../../store/reducers";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
