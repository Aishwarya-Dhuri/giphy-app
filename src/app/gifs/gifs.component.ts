import { Component, OnInit } from '@angular/core';
import { GifsdataService } from '../gifsdata.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {
  gifs:any[] = [];
  constructor(private dataservice:GifsdataService) { }

  ngOnInit() {
    this.dataservice.getTrendingGifs().subscribe((response:any)=>{
      console.log('Data',response);
      this.gifs = response.data;
    });
  }

}
