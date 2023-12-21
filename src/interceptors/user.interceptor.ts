import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class UserInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>){
        const request = context.switchToHttp().getRequest()
        const userEmail = request.user.email
        const userID = request.user.id
        return next.handle().pipe(tap(() => {
            console.log('URL: ' + request.url)
            console.log('Method: ' + request.method)
            console.log('IP User: ' + request.ip)
            console.log('Email user: ' + userEmail + ' ID user: ' + userID)
        }))
    }
}