import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../messages/messages.component';
@Component({
  selector: 'app-settings',
  imports: [CommonModule, MessagesComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  id: string | null = null;
  selectedComponent:any = null;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.selectedComponent = this.id === 'messages' ? MessagesComponent : null;
  }
}
