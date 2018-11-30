import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'dashboard', outlet: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
      { path: 'posts', outlet: 'posts', loadChildren: '../posts/posts.module#PostsPageModule' },
      { path: 'schedules', outlet: 'schedules', loadChildren: '../schedules/schedules.module#SchedulesPageModule' },
      { path: 'favourites', outlet: 'favourites', loadChildren: '../favourites/favourites.module#FavouritesPageModule' },
      { path: 'messages', outlet: 'messages', loadChildren: '../messages/messages.module#MessagesPageModule' },
      { path: 'post-event', outlet: 'posts', loadChildren: '../post-event/post-event.module#PostEventPageModule' },
      { path: 'post-activity', outlet: 'posts', loadChildren: '../post-activity/post-activity.module#PostActivityPageModule' },
      { path: 'post-business', outlet: 'posts', loadChildren: '../post-business/post-business.module#PostBusinessPageModule' },
      { path: 'post-service', outlet: 'posts', loadChildren: '../post-service/post-service.module#PostServicePageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
