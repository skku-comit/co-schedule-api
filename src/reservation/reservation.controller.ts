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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from './requests/reservation.request';
import { ReservationListResponse } from './responses/reservation-list.response';
import { CreateReservationResponse } from './responses/create-reservation.response';
import { UpdateReservationResponse } from './responses/update-reservation.response';
import { DeleteReservationResponse } from './responses/delete-reservation.response';

@ApiTags('유데미 예약 API')
@Controller('/reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @ApiOperation({ summary: '예약 목록 조회' })
  @Get('/')
  async getReservationList(): Promise<ReservationListResponse> {
    const reservations = await this.reservationService.getReservationList();

    return { reservations };
  }

  @ApiOperation({ summary: '예약 생성' })
  @Post('/')
  async createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<CreateReservationResponse> {
    const reservationId =
      await this.reservationService.createReservation(createReservationDto);

    return { id: reservationId };
  }

  @ApiOperation({ summary: '예약 수정' })
  @Put('/:id')
  async updateReservation(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ): Promise<UpdateReservationResponse>{
    const reservation = await this.reservationService.updateReservation(id, updateReservationDto);

    return reservation;
  }

  @ApiOperation({ summary: '예약 삭제' })
  @Delete('/:id')
  deleteReservation(@Param('id') id: string): Promise<DeleteReservationResponse>{
    return this.reservationService.deleteReservation(id);
  }
}