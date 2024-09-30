import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignUpClass } from '../model/class';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  
    UsingClassForm !:FormGroup;
    msg:string="";
    private scls:SignUpClass=new SignUpClass();
    constructor(private fb:FormBuilder)
    {
      this.UsingClassForm =this.formInIt();
    }
    formInIt(){
      return this.fb.group({
        aname:[''],
        gender : [''],
        mobileNo :[''],
        email :[''],
        Qualifications:[''],
        hobbies:[''],
        time :[''],
        date:[''],
        url:[''],
        quantity:[''],
        file:[''],
        msg:[''],
        psw:[''],
        range:['']     
      });
    }
    onSubmit(){
      console.log(this.UsingClassForm.invalid)
      if(this.UsingClassForm.invalid){
        this.msg=this.UsingClassForm.status;
        return;
      }
      else{
      const frmValue=this.UsingClassForm.value;
      this.scls.appName=frmValue.aname;
      this.scls.gender=frmValue.gender;
      this.scls.mobileNo=frmValue.mobileNo;
      this.scls.email=frmValue.email;
      this.scls.qualification=frmValue.Qualifications;
      this.scls.hobbies=frmValue.hobbies;
      this.scls.time=frmValue.time;
      this.scls.date=frmValue.date;
      this.scls.url=frmValue.url;
      this.scls.quantity=frmValue.quantity;
      this.scls.file=frmValue.file;
      this.scls.msg=frmValue.msg;
      this.scls.password=frmValue.psw;
      this.scls.range=frmValue.range;
  
      console.log(this.scls)
      ;
      }
  
  //  console.log(this.UsingClassForm.value);
    }
    clear(){
     this.UsingClassForm = this.formInIt();
    }
    back(){
    //  this.router.navigateByUrl('/home');
    }
  }
