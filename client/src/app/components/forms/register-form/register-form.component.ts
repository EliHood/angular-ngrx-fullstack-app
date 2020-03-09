import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  initRegister,
  resetRegister
} from "../../../store/actions/auth.actions";
import { Store, select } from "@ngrx/store";
import { State, registerError, isLoading } from "../../../store/reducers";
import { Observable, from, Subscription } from "rxjs";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  username: string;
  email: string;
  password: string;
  error: string;
  user: Observable<any>;
  userSubscription: Subscription;
  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    // this.user = this.store.pipe(select(selectUser));
    this.userForm = new FormGroup({
      username: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });

    this.user = this.store.pipe(select(registerError));
    this.userSubscription = this.user.subscribe(err => {
      console.log(err);
      this.error = err;
    });
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
    console.log(this.error);
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.store.dispatch(new resetRegister());
  }
}
