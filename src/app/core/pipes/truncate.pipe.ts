import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
 transform(value: string, limit: number = 8) {
    const words = value.split(/\s+/) // .split(" ")
    if(limit < 0) {
      limit *= -1;
      return  '... ' + words.slice(words.length - limit).join(" ")
    }
    if(words.length > limit) {
      return words.slice(0, limit).join(" ") + ' ...'
    }
  
  return value
 }

}