import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit, OnChanges {
  @Input() house: string = '';
  characters: Character[] = [];
  filteredCharacters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters = data;
      this.filteredCharacters = data;
    });
  }

  ngOnChanges(): void {
    this.filterByHouse(this.house);
  }

  filterByHouse(house: string): void {
    if (!house) {
      this.filteredCharacters = this.characters;
    } else {
      this.filteredCharacters = this.characters.filter(char => 
        char.house?.toLowerCase().includes(house.toLowerCase())
      );
    }
  }

  goToDetails(id: string): void {
    this.router.navigate(['/details', name]);
  }
}
