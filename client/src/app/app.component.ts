import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";
import { AuthService } from "./services/auth-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Routing Test";

  constructor(public authService: AuthService) {}

  ngOnInit() {
    console.log("hello");
  }
}
