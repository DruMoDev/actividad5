import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { IPost } from '../../interfaces/ipost.interface';
import { PostsListComponent } from "../posts-list/posts-list.component";

@Component({
  selector: 'app-blog',
  imports: [FormComponent, PostsListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  postsList: IPost[] = [
    {
      title: 'Nueva Versión de Angular Lanzada',
      body: 'El equipo de Angular ha lanzado una nueva versión de Angular con nuevas características y mejoras emocionantes.',
      img: 'https://plus.unsplash.com/premium_photo-1669075651811-9fdf720c7b67?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: new Date('2023-10-01'),
    },
    {
      title: 'Anunciado TypeScript 5.0',
      body: 'TypeScript 5.0 ha sido anunciado con varias nuevas características y mejoras de rendimiento.',
      img: 'https://images.unsplash.com/photo-1672308627194-9a2c28daa17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHlwZXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D',
      date: new Date('2023-10-02'),
    },
  ];
}
