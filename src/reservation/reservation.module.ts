import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService, PrismaService],
})
export class ReservationModule {}
