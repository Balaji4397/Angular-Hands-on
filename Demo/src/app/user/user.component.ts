import { Component, Input, OnInit, ElementRef , HostListener} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  bgcolor:string='lightblue';
  hcolors:string='green';
  size:string='48px';
  constructor() { 
  }
  ngOnInit(){  
  }
}
