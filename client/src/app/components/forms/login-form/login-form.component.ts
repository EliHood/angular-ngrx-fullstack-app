import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { initLogin } from "../../../store/actions/auth.actions";
import { Store, select } from "@ngrx/store";
import { State, loginError } from "../../../store/reducers";
import { Observable, Subscription, from } from "rxjs";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  username: string;
  password: string;
  user: Observable<any>;
  error: string;
  isAuthenticated: Observable<boolean>;
  userSubscription: Subscription;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
    this.user = this.store.pipe(select(loginError));
  }
  // can handle validations
  loginUser(): void {
    const raw = this.userForm.getRawValue();
    let post = {
      username: raw.username,
      password: raw.password
    };
    console.log(post);
    this.userSubscription = this.user.subscribe(err => {
      this.error = err;
    });

    this.store.dispatch(new initLogin(post));
  }
  ngOnDestroy(): void {
    console.log("this worked");
    this.userSubscription.unsubscribe();
  }
}
