import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Comment } from '../model/comment';

@Injectable()
export class CommentService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private strUrl = 'api/comments';
  constructor(private http: Http) { }
  
  // Affiche un commentaire selon l'id du blog
  getCommentByBlogId(postId: number) {
    const url = `${this.strUrl}/?postId=${postId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  //creer un commentaire
  create(commentObj: string): Promise<Comment> {
    return this.http
      .post(this.strUrl, commentObj, { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Comment)
      .catch(this.handleError);
  }

  //supprimer un commentaire
  delete(id: number): Promise<void> {
    const url = `${this.strUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
