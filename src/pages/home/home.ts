import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogProvider } from '../..//providers/input-dialog/input-dialog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  title = "Groceries";
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    let toast = this.toastCtrl.create({
      message: 'Removing ' + item.name + '...',
      duration: 1000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log(item.name + ' was removed' + ', ' + index);
    });
  
    toast.present();
    this.dataService.removeItem(index); 
  };

  editItem(item, index) {
    let toast = this.toastCtrl.create({
      message: 'Edit ' + item.name + '. index' + index,
      duration: 1000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log(item.name + ' is editing' + ', ' + index);
    });
  
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  };

  addItem() {
    console.log('adding item');
    this.inputDialogService.showPrompt();
  };
}

