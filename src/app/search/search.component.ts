import { Component, OnInit } from '@angular/core';
import { GifsdataService } from '../gifsdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataservice:GifsdataService) { }

  ngOnInit() {
   
  }
  search(searchTerm:string){
      this.dataservice.searchGifs(searchTerm);
  }
}
