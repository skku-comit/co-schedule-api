import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reservation')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}
  
  @Get()
  getReservationList(): string {
    return this.reservationService.getReservationList();
  }

  @Post()
  createReservation(): string {
    return this.reservationService.createReservation();
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
