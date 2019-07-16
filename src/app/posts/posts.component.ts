import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {
posts;

  constructor(private service: PostService){
    
  }
  ngOnInit(){
    this.service.getAll()
    .subscribe(posts=>this.posts= posts);
  }

createPost(input:HTMLInputElement){
  let post={ title: input.value};
  this.posts.splice(0,0,post);

  input.value='';
  this.service.create(post)
.subscribe(newPost=>{
  post['id']=newPost['id'];
},
(error: AppError) =>{
  this.posts.splice(0,1);

  if(error instanceof BadInput){
    // this.form.setErrors(error.originalError);
  }
  else throw error;
});
}
update(post){
 this.service.update(post)
  .subscribe(updatedPost=>{
    console.log(updatedPost);
  });
}
delete(post){
  this.service.delete(post.id)
  .subscribe();
  }
}
  
