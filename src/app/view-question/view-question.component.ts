import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  topic:string;
  importance:string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){}

}
