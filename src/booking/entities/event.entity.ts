/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Booking } from './booking.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  location: string;

  @Column('timestamp')
  startTime: Date;

  @Column('timestamp')
  endTime: Date;

  @Column()
  capacity: number;

  @ManyToOne(() => User, (user) => user.organizedEvents)
  organizer: User;

  @OneToMany(() => Booking, (booking) => booking.event)
  bookings: Booking[];
}
