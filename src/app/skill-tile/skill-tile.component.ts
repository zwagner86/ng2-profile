import {Component, Input} from '@angular/core';
import {SkillTile} from "./skill-tile.model";

@Component({
  selector: 'app-skill-tile',
  templateUrl: './skill-tile.component.html',
  styleUrls: ['./skill-tile.component.less']
})
export class SkillTileComponent {
  @Input() tile: SkillTile;

}
