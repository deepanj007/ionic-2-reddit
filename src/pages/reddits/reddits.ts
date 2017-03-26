import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditPage {
  items:any=[];
  category:any;
  limit:any;
  spin = true;
  
  splash  = true;
  tabBarElement: any;

  constructor(public navCtrl: NavController,
              private redditService: RedditService) {
      this.tabBarElement = document.querySelector('.tabbar');
      this.getDefaults();
  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  getDefaults(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category')
    } else{
      this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit')
    } else{
      this.limit = 10;
    }
  }

  getPosts(category, limit){
    this.spin = true;
    this.redditService.getPosts(category, limit).subscribe(response => {
    this.spin = false;
    this.items = response.data.children;
    })
  }

  viewItem(item){
   console.log("in view item");
    this.navCtrl.push(DetailsPage, {
      item:item
    })
  }

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

}
