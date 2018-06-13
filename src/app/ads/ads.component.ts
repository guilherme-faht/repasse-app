import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ad } from './ad.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads: Ad[];
  page: number;
  collectionSize: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.page = 1;

    this.getAds();
  }

  getAds():void {
    
    this.http.get<Ad[]>('assets/mocks/ads.json').subscribe(ads => {
      this.collectionSize = ads.length;
      this.ads = ads.slice((this.page - 1) * 10, this.page * 10);
    });
  }

  onPageChange():void {

    this.getAds();
  }
}
