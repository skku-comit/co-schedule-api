import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationService } from './reservation/reservation.service';
import { ReservationModule } from './reservation/reservation.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [ReservationModule, ConfigModule.forRoot()],
  controllers: [AppController, ReservationController],
  providers: [AppService, ReservationService, PrismaService],
})
export class AppModule {}
