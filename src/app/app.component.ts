import { Component } from '@angular/core';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterlistComponent, CharacterfilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: string = '';

  onHouseSelected(house: string) {
    this.filter = house;
  }
}
