import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Demo';
  public name:string="Balaji";
  constructor(private route:Router){}
  routing(){
    this.route.navigate(['/admin'])
  }
  ngOnInit(): void {
  }
  
}
