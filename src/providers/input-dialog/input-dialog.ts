import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the InputDialogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogProvider Provider');
  }

  showPrompt(item?, index?) {
    // var select = document.createElement('ion-item');
    // select.innerHTML = `
    //   <ion-label>Gender</ion-label>
    //   <ion-select [(ngModel)]="gender">
    //     <ion-option value="f">Female</ion-option>
    //     <ion-option value="m">Male</ion-option>
    //   </ion-select>
    // `;
    //aaa

    const prompt = this.alertCtrl.create({
      title: item? 'Edit Item': 'Add Item',
      message: item? "Please edit item" : "Please add item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item? item.name: null
        },
        // {
        //   type: 'radio',
        //   name: "1",
        //   label: '1',
        //   value: '1',
        //   checked: index == 1
        // },
        // {
        //   type: 'radio',
        //   name: "2",
        //   label: '2',
        //   value: '2',
        //   checked: index == 2
        // }
        {
          name: 'quantity',
          placeholder: 'Quantity',
          // handler: index => {
          //   console.log('quantity', index)

          // }
          value: item? item.quantity: null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked', data);
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
            
          }
        }
      ]
    });
    prompt.present();
  };

}
