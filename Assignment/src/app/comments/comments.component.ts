import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  cards: { name: string; comment: string; img: string; date: string; }[];


  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        name: 'bruhperson',
        comment: 'Re-Watched it 7 times and counting. I guess I liked it.',
        img: '../../assets/images/boy_1.png',
        date: '12 Oct 2019'
      },
      {
        name: 'manishsingh',
        comment: 'When you finish the show you"ll never be the same..I guarantee you',
        img: '../../assets/images/boy_2.png',
        date: '02 Oct 2019'
      },
      {
        name: 'otnememento',
        comment: 'The best series I have seen in my whole life, even better than the wire.',
        img: '../../assets/images/girl_1.png',
        date: '21 Aug 2019'
      },
      {
        name: 'xpinerhd',
        comment: 'I wanna delete my brain and watch it again like I never knew it.',
        img: '../../assets/images/girl_2.png',
        date: '17 Mar 2019'
      },
      {
        name: 'danulis',
        comment: 'The most perfect show ever created. There will no other show like this.',
        img: '../../assets/images/girl_3.png',
        date: '19 Jan 2019'
      }
    ];
  }

}
