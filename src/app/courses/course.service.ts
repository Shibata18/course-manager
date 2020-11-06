import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private courseUrl:string = 'http://localhost:3100/api/courses';
    constructor(private httpClient:HttpClient){}
    retriveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.courseUrl);
    }
    retriveById(id:number):Course{
        return COURSES.find((courseIterator:Course)=>courseIterator.id ===id)
    }
    save(course:Course):void{
        if(course.id){
            const index = COURSES.findIndex((courseIterator:Course)=>courseIterator.id== course.id)
            COURSES[index] = course;
        }
    }
}
var COURSES: Course[] = [
    {
        id: 1,
        name: "Angular HTTP",
        imageUrl: "/assets/images/animations.png",
        price: 45.99,
        code: 'LKL-8292',
        description: "",
        duration: 88,
        rating: 4,
        releaseDate: 'November 21, 2020'
    },
    {
        id: 1,
        name: "Angular CLI",
        imageUrl: "/assets/images/animations.png",
        price: 45.99,
        code: 'LKL-8292',
        description: "",
        duration: 88,
        rating: 4,
        releaseDate: 'November 21, 2020'
    },
    {
        id: 2,
        name: "Angular Form",
        imageUrl: "/assets/images/animations.png",
        price: 45.99,
        code: 'LKL-8292',
        description: "",
        duration: 88,
        rating: 4,
        releaseDate: 'November 21, 2020'
    },
    {
        id: 3,
        name: "Angular HTTP",
        imageUrl: "/assets/images/animations.png",
        price: 45.99,
        code: 'LKL-8292',
        description: "",
        duration: 88,
        rating: 4,
        releaseDate: 'November 21, 2020'
    },
    {
        id: 4,
        name: "Angular HTTP",
        imageUrl: "/assets/images/animations.png",
        price: 45.99,
        code: 'LKL-8292',
        description: "",
        duration: 88,
        rating: 4,
        releaseDate: 'November 21, 2020'
    },
]