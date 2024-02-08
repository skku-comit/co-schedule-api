import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from './requests/reservation.request';

@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getReservationList() {
    const reservations = await this.prismaService.reservation.findMany();

    return reservations;
  }

  async createReservation(createReservationDto: CreateReservationDto) {
    const reservation = await this.prismaService.reservation.create({
      data: {
        title: createReservationDto.title,
        name: createReservationDto.name,
        time: createReservationDto.time,
        description: createReservationDto.description,
      },
    });

    return reservation;
  }

  async updateReservation(id: string, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.prismaService.reservation.update({
      where: { id: id },
      data: {
        title: updateReservationDto.title,
        name: updateReservationDto.name,
        time: updateReservationDto.time,
        description: updateReservationDto.description,
      },
    });

    return reservation;
  }

  async deleteReservation(id) {
    const reservation = await this.prismaService.reservation.delete({
      where: { id: id },
    });

    return reservation;
  }
}
