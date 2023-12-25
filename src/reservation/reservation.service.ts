import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getReservationList() {
    const reservations = await this.prismaService.reservation.findMany();

    return reservations;
  }

  async createReservation() {
    const reservation = await this.prismaService.reservation.create({
      data: {
        title: 'title',
        username: 'username',
        date: new Date(),
        time: new Date(),
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
