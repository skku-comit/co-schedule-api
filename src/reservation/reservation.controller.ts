import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateReservationDto } from './requests/create-reservation.request';

@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  getReservationList() {
    return this.reservationService.getReservationList();
  }

  @Post()
  createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.createReservation(createReservationDto);
  }

  @Put()
  updateReservation(): string {
    return this.reservationService.updateReservation();
  }

  @Delete()
  deleteReservation(): string {
    return this.reservationService.deleteReservation();
  }
}
