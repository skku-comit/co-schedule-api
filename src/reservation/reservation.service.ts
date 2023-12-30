import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateReservationDto } from './requests/create-reservation.request';

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
        username: createReservationDto.username,
        time: createReservationDto.time,
        description: createReservationDto.description,
      },
    });

    return reservation;
  }

  updateReservation(): string {
    return 'This action updates a reservation';
  }

  deleteReservation(): string {
    return 'This action deletes a reservation';
  }
}
