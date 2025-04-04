import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(id).subscribe(data => {
        this.character = data;
      });
    }
  }
}
