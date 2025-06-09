import {
  IsString,
  IsDateString,
  IsNumber,
  IsOptional,
  Min,
  IsEmail,
} from 'class-validator';

export class CreateBookingDto {
    @IsString()
    @IsEmail()
    customerEmail: string;

    @IsString()
    customerName: string;

    @IsDateString()
    checkInDate: string;

    @IsDateString()
    checkOutDate: string;

    @IsNumber()
    @Min(1)
    numberOfGuests: number;

    @IsString()
    @IsOptional()
    specialRequests?: string;

    @IsNumber()
    @Min(0)
    totalPrice: number;
}
