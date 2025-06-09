import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Booking } from './booking.entity';
import { Event } from './event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];

  @OneToMany(() => Event, (event) => event.organizer)
  organizedEvents: Event[];
}
