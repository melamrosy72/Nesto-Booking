import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.logger.info('Creating new user', { context: 'UsersController' });
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    this.logger.info('Getting all users', { context: 'UsersController' });
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.info(`Getting user with id: ${id}`, {
      context: 'UsersController',
    });
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.logger.info(`Updating user with id: ${id}`, {
      context: 'UsersController',
    });
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.info(`Deleting user with id: ${id}`, {
      context: 'UsersController',
    });
    return this.usersService.remove(id);
  }
}
