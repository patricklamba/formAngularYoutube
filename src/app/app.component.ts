import { Component } from '@angular/core';
/*A component is a Typescript class qhere you can find @Component annotation .
* this annotations are metadata where some atribut are define .
* inside of this class you will have variable like "title"
* there is the business logic*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'l application formaAnuglar2019';
  bgColor = 'red' ;
  show = false ;

  changeStatus() {
    this.show = !this.show ;
  }
}
