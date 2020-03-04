import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stud_data } from '../stud_data';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stud_data;
  constructor( private route: ActivatedRoute,) { }

  share(a) {
    window.alert('Student details shared of:'+a);
  }
  ngOnInit() {
     this.stud_data = stud_data;
 
  }

}