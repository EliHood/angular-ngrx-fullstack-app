import { Component, OnInit, DoCheck } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { initRegister } from "../../../store/actions/auth.actions";
import { Store, select } from "@ngrx/store";
import { State, selectUser } from "../../../store/reducers";
import { Observable, from } from "rxjs";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit, DoCheck {
  userForm: FormGroup;
  username: string;
  email: string;
  password: string;
  user: Observable<any>;
  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.user = this.store.pipe(select(selectUser));
    this.userForm = new FormGroup({
      username: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });
    this.user.subscribe(post => {
      this.isAuthenticated = post.isAuthenticated;
    });
    console.log(this.isAuthenticated);
  }
  // can handle validations
  ngDoCheck(): void {
    if (
      this.userForm.value && this.userForm.value.username
        ? this.userForm.value.username.length > 6
        : null
    ) {
      console.log("this is a validation");
    }
  }
  registerUser(): void {
    const raw = this.userForm.getRawValue();
    let post = {
      username: raw.username,
      password: raw.password,
      email: raw.email
    };
    console.log(post);
    this.store.dispatch(new initRegister(post));
  }
}
