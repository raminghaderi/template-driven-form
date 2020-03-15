import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-driven-form';
  hello;
  data = [
    {id: 1, value: 'hello'},
    {id: 2, value: 'bye'}
  ];
  @ViewChild('f') ourForm: NgForm;

  log(x) {
    console.log(x);
  }

  onSubmit(f) {
    console.log(f);
    f.reset();
  }

  reset() {
    this.ourForm.reset();
  }
}
