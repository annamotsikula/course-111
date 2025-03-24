import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    coutner: number = 11

    increaseCounter() {
        console.log('Clicked')
        this.coutner++
    }
}