import { Injectable } from '@angular/core';
import { Card } from '../interface/card';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CrudcardService {

  cardList: AngularFireList<any>;
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getCards() {
      return this.cardList = this.angularFireDatabase.list('cards')
  }

  insertCard(card: Card) {
      this.cardList.push({
          nombre: card.nombre,
          descripcion: card.descripcion,
          ataque: card.ataque,
          defensa: card.defensa,
          imagen: card.imagen
      });
  }

  updateCard(card: Card) {
    this.cardList.update(card.$id ,
      {
         nombre: card.nombre,
         descripcion: card.descripcion,
         ataque: card.ataque,
         defensa: card.defensa,
         imagen: card.imagen
      }
    );
  }


  deleteCard($id: string) {
    this.cardList.remove( $id );
  }
}
