import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddMobileComponentComponent } from './add-mobile-component/add-mobile-component.component';
import { ViewMobileComponentComponent } from './view-mobile-component/view-mobile-component.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponentComponent
    },
    {
        path:"add-mobile",
        component:AddMobileComponentComponent
    },
    {
        path:"view-mobile",
        component:ViewMobileComponentComponent
    }
];
