import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsModule } from '../blogs/blogs.module';
import { BlogDetailModule } from '../blog-detail/blog-detail.module';

import { AdminModule } from '../admin/admin/admin.module'

import { BlogResolverService, BlogDetailResolverService, BlogCommentResolverService, NextBlogResolverService, PreBlogResolverService } from '../service/blog-resolver.service';

// blogmodule
export function loadBlogsModule() { return BlogsModule; }
// blogDetailModule
export function loadBlogDetailModule() { return BlogDetailModule; }
// adminModule
export function loadAdminModule() { return AdminModule; }


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: loadAdminModule,
    resolve: {
      blogList: BlogResolverService
    }
  },
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'blog',
    loadChildren: loadBlogsModule,
    resolve: {
      blogList: BlogResolverService
    }
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  },
  {
    path: 'details/:id',
    loadChildren: loadBlogDetailModule,
    resolve: {
      blog: BlogDetailResolverService,
      preBlog: PreBlogResolverService,
      nextBlog: NextBlogResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BlogResolverService, BlogDetailResolverService, NextBlogResolverService, PreBlogResolverService, BlogCommentResolverService]
})
export class AppRoutingModule { }

