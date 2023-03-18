import { Component } from '@angular/core';
import { DetalhesService } from '../service/detalhes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(public info: DetalhesService){}
}
