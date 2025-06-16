import {
  Controller,
  Get,
  Post,
  // Body,
  // Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('booking')
export class BookingController {
  constructor(
    private readonly bookingService: BookingService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post()
  create() {
    this.logger.info('Creating new booking', { context: 'BookingController' });
    return this.bookingService.create();
  }

  @Get()
  findAll(@Req() req: Request & { user: any }) {
    console.log(req.user);
    this.logger.info('Getting all bookings', { context: 'BookingController' });
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  // @Patch(':id')
  // update() {
  //   return this.bookingService.update( );
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
