import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../note';

@Component({
  selector: 'app-done-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './done-checkbox.component.html',
  styleUrls: ['./done-checkbox.component.scss'],
})
export class DoneCheckboxComponent {
  @Input() notes: any = [];
  @Input() note!: Note;
  @Input() i: any;
  @Output() checkboxData = new EventEmitter<{ data: boolean; id: string }>();

  isChecked: boolean[] = new Array(this.notes.length).fill(false);

  pushCheckboxData(data: boolean, id: string) {
    this.checkboxData.emit({ data, id });
  }
}
