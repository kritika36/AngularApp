import { FavoriteChangedeventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    title: "Title",
    isFavorite: true
  }
  onFavoriteChanged(eventArgs:FavoriteChangedeventArgs){
    console.log("Favorite Changed",eventArgs);
  }
  viewMode="map";
  courses;
     loadCourses(){
this.courses=[{id:1, name:'course1'},
{id:2, name:'course2'},
{id:3, name:'course3'}
];
  }
  trackCourse(index,course){
    return course? course.id:undefined;
  }
  onClick(){
    this.courses.push({id:4,name:'course4'});
  }
  // onRemove(course){
  //   let index= this.courses.indexOf(course);
  //   this.courses.splice(index,1);}
  canSave=true;
  task={
    title:'Review Application',
    assignee:null
  }
}
