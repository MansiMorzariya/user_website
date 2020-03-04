import { Component, OnInit } from '@angular/core';
import {stud_data} from '../stud_data';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student;
  constructor(private router:ActivatedRoute ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{

      this.student = stud_data[params.get('id')];
    })
  }

}