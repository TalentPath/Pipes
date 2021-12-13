import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'case-pipe',
  templateUrl: './case-pipe.component.html',
  styleUrls: ['./case-pipe.component.scss']
})
export class CasePipeComponent implements OnInit {

  upperCaseString: string = 'I am an uppercase string.';
  lowerCaseString: string = 'I am an lowercase string.';

  curr: number = 34;

  decimalCurr: number = 78.21;

  user = {
    firstName: 'Neely Mann',
    city: 'Atlanta',
    cityCode: 'ATL'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
