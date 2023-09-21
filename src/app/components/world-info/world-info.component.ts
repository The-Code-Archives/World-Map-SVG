import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { WorldComponent } from '../world/world.component';

@Component({
  selector: 'app-world-info',
  templateUrl: './world-info.component.html',
  styleUrls: ['./world-info.component.css']
})
export class WorldInfoComponent {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() income!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;
}
