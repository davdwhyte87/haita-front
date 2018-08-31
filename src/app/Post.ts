import { User } from "./User";
import {Comment} from "./Comment";
export class Post{
    id:number;
    title:string;
    likes:number[];
    image:string;
    created_at:string;
    text:string;
    user:User
    comment:Comment[]
}