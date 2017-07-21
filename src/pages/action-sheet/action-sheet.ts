import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {

  constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController) {
    
  }

  presentActionSheet() {
    //let actionSheet = this.actionSheetCtrl.create();

    // actionSheet.setTitle('action sheet demo');
    // actionSheet.addButton('Cancel');
    // actionSheet.addButton({
    //       text: 'Delete',
    //       role: 'desctructive',
    //       icon: !this.platform.is('ios') ? 'trash' : null,      
    //       handler: () => {

    //       }
    // });
    
    let actionSheet = this.actionSheetCtrl.create({
      //title: 'action sheet demo',
      //title: '',
      buttons: [
        {
          text: 'Delete',
          role: 'desctructive',
          icon: !this.platform.is('ios') ? 'trash' : null,      
          handler: () => {

          }
        }, 
        {
          text:'Button',
          handler: () => {

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {

          }
        }
      ]
    });

    actionSheet.present();
  }

}
