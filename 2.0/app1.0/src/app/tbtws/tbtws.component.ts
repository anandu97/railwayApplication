import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tbtws',
  templateUrl: './tbtws.component.html',
  styleUrls: ['./tbtws.component.css']
})
export class TbtwsComponent implements OnInit {
  from :String='';
  to:String='';
  date:String='';
  flag=[];
  constructor(private router:Router) { }
  getresult():void{
    this.flag=this.date.split('-');
    this.date=this.flag[0];
    this.flag[0]=this.flag[2];
    this.flag[2]=this.date;
    this.date=this.flag.join('-');
    this.router.navigate([`/tbtwsresults/${this.from}/${this.to}/${this.date}`]);
    console.log(`/tbtwsresults/${this.from}/${this.to}/${this.date}`)
  }
  ngOnInit() {
  }

}
