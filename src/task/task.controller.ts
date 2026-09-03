import { Controller } from '@nestjs/common';
import { TaskService } from './task.service.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
}
