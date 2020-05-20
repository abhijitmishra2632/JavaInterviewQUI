import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  str:any;
  selectedSubject:string;
  questionList:any;
  constructor(private httpClientModule:HttpClient) { }
  addQuestion(questionForm:any){
    this.httpClientModule.post('http://localhost:8090/question',questionForm ).subscribe(data=> this.str);
    return this.str;
  }
  getAllQuestions(){
    this.httpClientModule.get<Question[]>('http://localhost:8090/question')
    .subscribe((data)=>{
      console.log("Data came back Old"+data);
      if(data.length){
        console.log("Data came back"+data);
        this.questionList = data;
      }
    });
    console.log("Model came back"+this.questionList);
    return this.questionList;
  }
}