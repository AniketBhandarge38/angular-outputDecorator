import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  parentcount = 100;

  countChangedHandler(cnt: number) {
    this.parentcount = cnt;
    console.log(cnt);
  }
}
