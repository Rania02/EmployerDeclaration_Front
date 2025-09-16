import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  activiteList: AngularFireList<any>;
  array = [];

  constructor(private firebase: AngularFireDatabase) {
    this.activiteList = this.firebase.list('activites');
    this.activiteList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
   }
   getActivityName($key) {
    if ($key == "0")
      return "";
    else{
      return _.find(this.array, (obj) => { return obj.$key == $key; })['name'];
    }
  }
 
}
