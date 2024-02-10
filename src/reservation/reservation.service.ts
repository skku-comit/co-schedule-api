import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from './requests/reservation.request';
import { Reservation } from '@prisma/client';

@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getReservationList(): Promise<Reservation[]> {
    const reservations = await this.prismaService.reservation.findMany();

    return reservations;
  }

  async getReservation(id: string): Promise<Reservation> {
    const reservation = await this.prismaService.reservation.findUnique({
      where: { id: id },
    });

    return reservation;
  }

  async createReservation(createReservationDto: CreateReservationDto): Promise<string>{
    const reservation = await this.prismaService.reservation.create({
      data: {
        title: createReservationDto.title,
        name: createReservationDto.name,
        time: createReservationDto.time,
        description: createReservationDto.description,
      },
    });

    return reservation.id;
  }

  async updateReservation(
    id: string,
    updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation>{
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
