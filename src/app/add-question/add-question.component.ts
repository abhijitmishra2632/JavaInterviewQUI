import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question-service.service';

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  str:string;
  questionForm = new Question("Java","Basics","What is Java","HCL","Low");
  constructor(private questionService:QuestionService) { 
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.questionForm); 
    this.str=this.questionService.addQuestion(this.questionForm);
  }

}
