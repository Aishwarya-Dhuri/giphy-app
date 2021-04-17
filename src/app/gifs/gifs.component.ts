import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GifsdataService } from '../gifsdata.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit,OnDestroy {
  gifs:any[] = [];
  subscription:Subscription;
  constructor(private dataservice:GifsdataService) { }

  ngOnInit() {
    this.dataservice.getTrendingGifs();
   this.subscription = this.dataservice.getGifs().subscribe((response:any)=>{
      this.gifs = response
    });
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
