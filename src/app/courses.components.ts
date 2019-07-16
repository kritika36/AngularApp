import {Component}from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: ` 
    {{text|summary:10}}
     `
})

export class CourseComponent{
text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nobis quia quisquam. Iste natus cum tempora laborum labore. Possimus alias necessitatibus quidem tempora eaque laudantium cumque enim itaque deserunt? Consequatur!";
 
}