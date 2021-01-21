import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  constructor() { }

  cards = [
    {
      title: 'Episode 1',     
      
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'Episode 2',
      
      
      img: '../../assets/images/episode_2.jpg'
    },
    {
      title: 'Episode 3',
      
      
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'Episode 4',
      
      
      img: '../../assets/images/episode_2.jpg'
    },
    {
      title: 'Episode 5',
      
      
      img: '../../assets/images/episode_3.jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
  }

}
