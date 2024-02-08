import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationResponse {
  @ApiProperty({ description: '생성된 예약 ID', example: '1' })
  id: string;
}
