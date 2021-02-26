import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  taskList: Tareas[] = [];
  taskName = '';
  constructor() {}

  ngOnInit(): void {}

  addTask() {
    const task: Tareas = {
      nombre: this.taskName,
      estado: false,
    };
    this.taskList.push(task);
    this.taskName = '';
  }
  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }
  updateTask(index: number, task: Tareas): void {
    this.taskList[index].estado = !task.estado;
  }
}
