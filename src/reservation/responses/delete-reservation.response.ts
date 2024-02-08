import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { CreateReservationResponse } from './create-reservation.response';

export class DeleteReservationResponse extends PickType(CreateReservationResponse, ['id']) {
  @ApiProperty({ description: '삭제된 예약 ID', example: '1' })
  id: string;
}
