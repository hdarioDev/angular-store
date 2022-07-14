import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = ''
  imgDefault = './assets/default.png'
  @Output() loaded = new EventEmitter<string>()

  constructor() {
    // antes render
    // SOLO CORRE UNA VEZ no usar async
    console.log('constructor', 'imgValue => ', this.img);

  }

  ngOnChanges() {
    // antes render - durante
    // cambios inputs
    console.log('ngOnChanges', 'imgValue => ', this.img);

  }

  ngOnInit(): void {
    // antes render
    // SOLO UNA VEZ
    // si puedes usar async - fetch
    console.log('ngOnInit', 'imgValue => ', this.img);
  }

  ngAfterViewInit() {//directivas
    // despues render
    // handler children
    console.log('ngAfterViewInit', 'imgValue => ', this.img);

  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy');

  }

  imgError() {
    this.img = this.imgDefault
  }

  imgLoaded() {
    console.log("loading..")
    this.loaded.emit("data:{12}")
  }

}
