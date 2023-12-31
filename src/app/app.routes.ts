import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DataComponent } from './pages/data/data.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'data', component: DataComponent },
    { path: '**', redirectTo: ''}
];
