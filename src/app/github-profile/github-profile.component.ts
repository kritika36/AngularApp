import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent  {

  constructor(private router: Router) {}
  submit(){
    this.router.navigate(['followers'],
    {
      queryParams:{page:1,order:'newest' }
    });
  }
}
 //ngOnInit() {
    // console.log("Github Profile OnInit");
    // let id= this.route.snapshot.paramMap.get('id');
     //  console.log(id);
 // }


