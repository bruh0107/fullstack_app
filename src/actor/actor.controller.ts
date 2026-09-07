import { Controller } from '@nestjs/common';
import { ActorService } from './actor.service.js';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}
}
