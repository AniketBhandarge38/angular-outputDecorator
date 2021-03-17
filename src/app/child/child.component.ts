import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() countchild: number;
  @Output() countChangedfromchild: EventEmitter<number> = new EventEmitter();

  constructor() {}

  inc() {
    this.countchild++;
    this.countChangedfromchild.emit(this.countchild);
  }
  dec() {
    this.countchild--;
    this.countChangedfromchild.emit(this.countchild);
  }

  ngOnInit() {}
}
