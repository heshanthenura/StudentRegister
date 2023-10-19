import { Component, OnInit, Output } from '@angular/core';
import { STUDENTDATA } from 'src/app/Model/STUDENTDATA';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-data-container',
  templateUrl: './student-data-container.component.html',
  styleUrls: ['./student-data-container.component.css'],
})
export class StudentDataContainerComponent implements OnInit {
  @Output()
  studentDataList: STUDENTDATA[] = [];
  index!: string;
  name!: string;
  errorMsg: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStudentData().subscribe(
      (data) => {
        this.studentDataList = data.reverse();
        this.errorMsg = '';
      },
      (error) => {
        this.errorMsg = 'Error related to server';
      }
    );
  }

  addStudentData() {
    const newStudentData = {
      index: parseInt(this.index),
      name: this.name,
    };

    this.dataService.postStudentData(newStudentData).subscribe(
      (response) => {
        // Handle a successful response with the expected message
        if (response) {
          console.log(`${this.index} : ${this.name} Posted Successfully`);
          this.studentDataList.push(newStudentData);
          this.index = '';
          this.name = '';
          this.errorMsg = ''; // Clear any previous error message
        }
      },
      (error) => {
        // Handle HTTP request errors
        this.errorMsg = 'Error posting student data to the server';
        console.log('HTTP request error');
        console.log(error);
      }
    );
  }
}
