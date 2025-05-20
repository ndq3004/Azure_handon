import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'about', loadComponent: () => import('./header/about/about.component').then(m => m.AboutComponent) },
    { path: 'settings', loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent) },
    { path: 'settings/:id', loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent) },
    { path: 'messages', loadComponent: () => import('./messages/messages.component').then(m => m.MessagesComponent) },
];
