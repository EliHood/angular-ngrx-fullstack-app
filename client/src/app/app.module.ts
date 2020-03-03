import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "./shared/material.module";
import { HttpModule } from "@angular/http";
import { StoreModule } from "@ngrx/store";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffect } from "./store/effects/user.effect";
import { appReducers } from "./store/reducers";
import { AuthGuard } from "./auth.guard";
import { RegisterFormComponent } from "./components/forms/register-form/register-form.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegisterFormComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    HttpModule,
    StoreModule.forRoot(appReducers, {
      // runtimeChecks: {
      //   strictStateImmutability: true,
      //   strictActionImmutability: true
      // }
    }),
    EffectsModule.forRoot([AuthEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
