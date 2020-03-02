import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { initLogin } from "../../../store/actions/auth.actions";
import { Store, select } from "@ngrx/store";
import { State } from "../../../store/reducers";
import { Observable, from } from "rxjs";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  userForm: FormGroup;
  username: string;
  password: string;
  error: string;
  user: Observable<any>;
  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
  }
  // can handle validations
  loginUser(): void {
    const raw = this.userForm.getRawValue();
    let post = {
      username: raw.username,
      password: raw.password
    };
    console.log(post);
    this.store.dispatch(new initLogin(post));
  }
}
