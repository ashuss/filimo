import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor() { }

  cards = [
    {
      title: 'El Camino',
      subTitle: 'TV-MA | Action, Crime',
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'Better Call Saul',
      subTitle: 'TV-MA | Crime, Drama',
      img: '../../assets/images/episode_2.jpg'
    },
    {
      title: 'The Parts You Lose',
      subTitle: 'Movie | Drama, Thrille',
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'Need For Speed',
      subTitle: 'Movie | Action, Crime',
      img: '../../assets/images/episode_2.jpg'
    },
    {
      title: 'Last Christmas',
      subTitle: 'Movie | Comedy, Drama',
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'El Camino',
      subTitle: 'TV-MA | Action, Crime',
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'Better Call Saul',
      subTitle: 'TV-MA | Crime, Drama',
      img: '../../assets/images/episode_2.jpg'
    },
    {
      title: 'The Parts You Lose',
      subTitle: 'Movie | Drama, Thrille',
      img: '../../assets/images/episode_3.jpg'
    },
    {
      title: 'Need For Speed',
      subTitle: 'Movie | Action, Crime',
      img: '../../assets/images/episode_2.jpg'
    },
    {
      title: 'Last Christmas',
      subTitle: 'Movie | Comedy, Drama',
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
    this.slides = this.chunk(this.cards, 5);
  }

}
