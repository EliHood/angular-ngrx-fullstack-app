import { Component, OnInit, DoCheck } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { initRegister } from "../../store/actions/auth.actions";
import { Store, select } from "@ngrx/store";
import { State, selectUser } from "../../store/reducers";
import { Observable, from } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  title = "Register";
  constructor() {}
}
