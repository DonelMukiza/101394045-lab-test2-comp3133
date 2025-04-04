import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent {
  selectedHouse: string = '';

  @Output() houseSelected = new EventEmitter<string>();

  applyFilter(): void {
    this.houseSelected.emit(this.selectedHouse);
  }
}
