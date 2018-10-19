import { DialogService } from 'ng2-bootstrap-modal';
import { NytService } from './../../modules/nyt/nyt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css',
]
})
export class TechComponent implements OnInit {

  articles: any[] = [ ];
  attributes: any[] = [ ];
  selectedArt = -1;
  constructor(private _apiSvc: NytService, private _dialogService: DialogService) {
    _apiSvc.getTechArticles().subscribe(x => {
      this.articles = x.results;
      this.attributes = x;
     });
  }

  showDetail(index, article) {
    console.log(index);
    console.log(article.name);
    if (this.selectedArt === index){
      this.selectedArt = -1;
    } else {
      this.selectedArt = index;
    }
  }

  mySplit(string, nb) {
    var array = string.split('T');
    return array[nb];
  }

  ngOnInit() {

  }

}
