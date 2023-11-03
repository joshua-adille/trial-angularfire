import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Note } from '../note';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, TaskEditComponent, DeleteButtonComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  constructor(private service: SharedService) {}

  @Input() note!: Note;
  @Output() updateData = new EventEmitter<{ value: string; id: string }>();
  @Output() deleteData = new EventEmitter<string>();

  pushUpdateData(data: { value: string; id: string }) {
    this.updateData.emit(data);
  }

  pushDeleteData(value: string) {
    this.deleteData.emit(value);
  }
}
