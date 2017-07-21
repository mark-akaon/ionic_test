import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'alerts.html',
})
export class AlertsPage {
  constructor(public alertCtrl: AlertController) {

    
  }

  showBasicAlert() {
     let alert = this.alertCtrl.create({ 
      title: 'Basic Alert',
      subTitle: 'This is an ui compoent',
      buttons: [
        'OK'
      ]
    });
    alert.present();
    
  }

  showPromptAlert() {
    let prompt = this.alertCtrl.create({ 
      title: 'Login',
      message: 'Enter your Password',
      inputs: [
        {
          name: 'password',
          placeholder: 'Input your password',
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {

          }
        },
        {
          text: 'Next',
          handler: data => {
            console.log(data['password']);
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirmationAlert() {
    let confirmation = this.alertCtrl.create({ 

    });

    confirmation.present();
  }

  showRadioAlert() {
    let radio = this.alertCtrl.create({ 

    });

    radio.present();
  }

  showCheckboxAlert() {
    let checkbox = this.alertCtrl.create({ 

    });

    checkbox.present();
  }
}