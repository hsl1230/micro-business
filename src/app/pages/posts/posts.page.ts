import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async openPost() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Post',
      buttons: [
        {
          text: 'Post a Business',
          icon: 'logo-usd',
          handler: () => {
            this.router.navigateByUrl('/app/tabs/(posts:post-business)');
          }
        },
        {
          text: 'Post a Service',
          icon: 'medkit',
          handler: () => {
            this.router.navigateByUrl('/app/tabs/(posts:post-service)');
          }
        },
        {
          text: 'Post an Event',
          icon: 'beer',
          handler: () => {
            this.router.navigateByUrl('/app/tabs/(posts:post-event)');
          }
        },
        {
          text: 'Post an Activity',
          icon: 'bicycle',
          handler: () => {
            this.router.navigateByUrl('/app/tabs/(posts:post-activity)');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
