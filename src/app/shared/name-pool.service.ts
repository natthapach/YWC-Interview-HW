import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NameItem } from './name-item';

@Injectable()
export class NamePoolService {
  private names:NameItem[] = [];
  private listener;

  constructor(private http:Http) { 
    this.http
    .get("https://ywc15.ywc.in.th/api/interview")
    .map((res:Response)=>res.json())
    .subscribe(res=>{
      console.log(res)
      this.names = res;

      this.listener(this.names);
    });
  }

  public getNames(){
    return this.names;
  }

  public regisListener(listener){
    this.listener = listener;
    
  }

  public search(text:string){
      let names:NameItem[] = this.names.filter((name:NameItem)=>
        name.firstName.indexOf(text)>=0 || name.lastName.indexOf(text)>=0||name.interviewRef.indexOf(text)>=0
      );
      return names;
  }

}
