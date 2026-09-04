import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'learn nest.js',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'build api',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findByUd(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Text not found');
    }

    return task;
  }

  create(dto: CreateTaskDto) {
    const newTask = {
      id: this.tasks.length + 1,
      title: dto.title,
      isCompleted: false,
      description: dto.description,
      priority: dto.priority,
      tags: dto.tags,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(dto: UpdateTaskDto, id: number) {
    const task = this.findByUd(id);

    task.title = dto.title;
    task.isCompleted = dto.isCompleted;

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findByUd(id);

    Object.assign(task, dto);

    return task;
  }

  delete(id: number) {
    const task = this.findByUd(id);

    this.tasks = this.tasks.filter((task) => task.id !== id);

    return task;
  }
}
