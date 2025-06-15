import { Injectable } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateEventDto,
  CreateEventDto as UpdateEventDto,
} from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = this.eventRepository.create(createEventDto);
    return await this.eventRepository.save(event);
  }

  findAll() {
    const events = this.eventRepository.find();
    return events;
  }

  async findOne(id: string) {
    const event = await this.eventRepository.findOneBy({ id: id.toString() });
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.findOneBy({ id: id.toString() });
    if (!event) {
      throw new Error('Event not found');
    }

    return await this.eventRepository.save(updateEventDto);
  }

  async remove(id: string) {
    const event = await this.eventRepository.findOneBy({ id: id.toString() });
    if (!event) {
      return { message: 'Event not found' };
    }
    return await this.eventRepository.remove(event);
  }
}
