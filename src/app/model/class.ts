import { Time } from "@angular/common";
import { Data } from "@angular/router";

export class SignUpClass{
    appName:string="";
    gender:string="";
    mobileNo:string="";
    email:string="";
    qualification:string="";
    hobbies:string="";
    time!:Time;
    date!:Date;
    url:string="";
    quantity:number=0;
    file:string="";
    msg:string="";
    password:string="";
    range:[number,number]=[0,0];

}