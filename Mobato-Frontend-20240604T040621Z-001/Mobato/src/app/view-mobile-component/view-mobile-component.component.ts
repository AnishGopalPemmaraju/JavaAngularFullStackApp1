import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppService } from '../app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-view-mobile-component',
  standalone: true,
  imports: [MatCardModule,HttpClientModule,MatDividerModule],
  templateUrl: './view-mobile-component.component.html',
  styleUrl: './view-mobile-component.component.css'
})
export class ViewMobileComponentComponent implements OnInit {
  mobileList:any;
  constructor(private appService:AppService){}
  ngOnInit(): void {
    this.appService.viewMobile().subscribe((data:any)=>{
      console.log(data);
      this.mobileList = data;
    })
  }

}
