import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';
import { CreateDateColumn } from 'typeorm';
import { ManyToOne } from 'typeorm';
@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @ManyToOne(() => Event, (event) => event.bookings)
  event: Event;

  @CreateDateColumn()
  createdAt: Date;
}
