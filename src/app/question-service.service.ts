import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  str:any;
  selectedSubject:string;
  constructor(private httpClientModule:HttpClient) { }
  addQuestion(questionForm:any){
    this.httpClientModule.post('http://localhost:8090/question',questionForm ).subscribe(data=> this.str);
    return this.str;
  }
}