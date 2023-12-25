import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationService {
  getReservationList(): string {
    return 'This action returns all reservations';
  }

  createReservation(): string {
    return 'This action creates a reservation';
  }

  updateReservation(): string {
    return 'This action updates a reservation';
  }

  deleteReservation(): string {
    return 'This action deletes a reservation';
  }
}
