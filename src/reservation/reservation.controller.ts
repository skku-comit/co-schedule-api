import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from './requests/reservation.request';

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

  @Put(':id')
  updateReservation(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationService.updateReservation(id, updateReservationDto);
  }

  @Delete(':id')
  deleteReservation(@Param('id') id: string) {
    return this.reservationService.deleteReservation(id);
  }
}
