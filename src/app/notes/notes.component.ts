import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Note } from '../note';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, TaskEditComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  constructor(private service: SharedService) {}

  @Input() note!: Note;
  @Output() topData = new EventEmitter<{ value: string; id: string }>();

  pushDataToTop(data: { value: string; id: string }) {
    this.topData.emit(data);
  }
}
