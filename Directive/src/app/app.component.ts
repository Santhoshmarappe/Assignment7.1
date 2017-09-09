import { Component } from '@angular/core';
import {title} from './models/heading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
   /* Create variable */
  Name = 'Santhosh Kumar';
  lastName = 'Marappe'
  /* the title value*/
  headingTitle;
  ComponentHeading:Array<title> =[
    new title('Angular Directive')
  ];
/* display with title on click of button */
  onBtnClick(title){
  this.headingTitle=title;
  }
  }
