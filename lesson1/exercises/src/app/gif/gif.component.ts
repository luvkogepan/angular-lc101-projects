import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gif: string[] = ['https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'];
  constructor() { }

  ngOnInit() {
  }

}
