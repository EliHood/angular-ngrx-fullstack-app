import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";
import { AuthService } from "./services/auth-service.service";
import { initLogout } from "../app/store/actions/auth.actions";
import { Store } from "@ngrx/store";
import { State } from "../app/store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Routing Test";

  constructor(public authService: AuthService, private store: Store<State>) {}

  ngOnInit() {
    console.log("hello");
  }

  logoutUser() {
    console.log("testing");
    this.store.dispatch(new initLogout());
  }
}
