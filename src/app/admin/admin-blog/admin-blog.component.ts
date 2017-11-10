
import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Blog } from '../../model/blog'
import { NgForm } from '@angular/forms';
import { BlogService } from '../../service/blog.service'

@Component({
  selector: 'admin-form-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  blogModel: Blog = new Blog();

  @Output() onParentEvent = new EventEmitter();

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
  }

 
  addOrUpdateBlog(blog: Blog) {
    
    if (blog.id) {
      this.blogService.update(blog).then(result => {
        this.hideBlogFormModal();
        this.onParentEvent.emit();
      });
    } else {
      
      let commentObj = {
        id: (new Date()).valueOf(),
        title: blog.title,
        content: blog.content,
        createdTime: new Date(),
        author: 'admin',
        viewCount: 1
      }

      this.blogService.create(JSON.stringify(commentObj)).then(result => {
        this.hideBlogFormModal();
        this.onParentEvent.emit();
      });
    }
  }

 
  public adminForm(id: Number): void {
   
    if (id) {
      this.blogService.getBlog(id).then(result => {
        this.blogModel = result;
      })
    }
    else {
      this.blogModel = new Blog();
    }
    this.childModal.show();
  }

  
  public hideBlogFormModal(): void {
    this.childModal.hide();
  }
}
