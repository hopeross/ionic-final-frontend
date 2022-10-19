import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from '../models/tasks';
//import { Http } from '@capacitor-community/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseURL: string = "http://localhost:7172/api/tasks"

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.baseURL}`);
  }
}



// import { Post } from '../models/post';


//   createPost(newPost: Post){
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.post(this.baseURL, newPost, {headers: reqHeaders});
//   }

//   getPost(postId: string) {
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.get<Post>(this.baseURL + "/" + postId, {headers: reqHeaders});
//   }

//   updatePost(updatedPost: Post) {
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.put(this.baseURL + "/" + updatedPost.postId, updatedPost, { headers: reqHeaders})
//   }

//   deletePost(postId: string) {
//     let reqHeaders = {
//       Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
//     }
//     return this.http.delete<any>(this.baseURL + "/" + postId, { headers: reqHeaders});
//   }
// }