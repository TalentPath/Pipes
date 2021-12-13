import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, city:string, cityCode:string): string {
    if (cityCode === 'ATL') {
      return "City Name: Hotlanta"
    } 
    return 'City Name: ' + city
  }

}
