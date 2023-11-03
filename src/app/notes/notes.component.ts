import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  constructor(private service: SharedService) {}

  @Input() note!: Note;
}
