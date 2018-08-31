import { User } from "./User";

export class Comment{
    id:number;
    created_at:string;
    post:number;
    text:string;
    user:User
}