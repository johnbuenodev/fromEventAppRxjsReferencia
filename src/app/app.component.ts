import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'fromEventAppRxjs';
  Y : any;
  X : any;
  constructor () {}

 
  ngOnInit(): void {
    
    //Acessando elemento no HTML com document.getElementById
    ///utilizar com ViewChild
    const elementoMapeado : any = document.getElementById('elementoEscolhido');

    //Pegando um evento do elemento com fromEvent
    //IMPORTANTE DECLARAR O TIPO DE EVENTO CAPTURADO PELO EVENTO E O TIPO DE EVENTO <MouseEvent>
    //tipos onmouseenter  onmouseleave onmousemove
    const mouseMoveClickElemento = fromEvent<MouseEvent>(elementoMapeado,'mousemove');

    //MouseEvent
    mouseMoveClickElemento.subscribe( (res:MouseEvent) => {
      console.log(`Coordenada no Eixo X: ${res.clientX}, Coordenada no Eixo Y: ${res.clientY}`);
      this.X = res.clientX;
      this.Y = res.clientY;
    });


  }

}
  
