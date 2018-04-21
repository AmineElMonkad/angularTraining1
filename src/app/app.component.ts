import { Component } from '@angular/core';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  posts: Array<Post> = [
    new Post('Mon premier post', 'Cum agnitus ubi sis incognitus diutius indiscretus in diutius clientes haerebis et in ad eadem'),
    new Post('Mon deuxième post', 'Hominum ita si rei Quid inimicus fui ego iure omnium causa fui ego rei rei esse inimicitias debeo exempla publicae ex praesertim atque summorum quis petenda ita semper depono senator.'),
    new Post('Encore un post', 'Cum agnitus ubi sis incognitus diutius indiscretus in diutius clientes haerebis et in ad eadem')
  ];

}
