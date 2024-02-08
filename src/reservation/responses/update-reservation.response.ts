import { ApiProperty } from '@nestjs/swagger';

export class UpdateReservationResponse {
  @ApiProperty({ description: '예약 ID', example: '1' })
  id: string;
  @ApiProperty({ description: '예약 제목', example: '예약 제목' })
  title: string;
  @ApiProperty({ description: '예약자 이름', example: '예약자 이름' })
  name: string;
  @ApiProperty({ description: '예약 시간', example: '2021-08-10T00:00:00' })
  time: Date;
  @ApiProperty({ description: '예약 설명', example: '예약 설명' })
  description: string;
}
