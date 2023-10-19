import { Component, Input } from '@angular/core';
import { STUDENTDATA } from 'src/app/Model/STUDENTDATA';

@Component({
  selector: 'app-student-data-item',
  templateUrl: './student-data-item.component.html',
  styleUrls: ['./student-data-item.component.css'],
})
export class StudentDataItemComponent {
  @Input() data!: STUDENTDATA;
}
