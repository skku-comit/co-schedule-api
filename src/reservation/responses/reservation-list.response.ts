import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from '@prisma/client';

export class ReservationDto {
  @ApiProperty({ description: '예약 ID', example: '1' })
  id: string;

  @ApiProperty({ description: '예약 제목', example: '유데미 강의' })
  title: string;

  @ApiProperty({ description: '예약자 이름', example: '홍길동' })
  name: string;

  @ApiProperty({ description: '예약 시작 시간', example: '2021-08-01T00:00:00' })
  time: Date;

  @ApiProperty({ description: '예약 설명', example: '유데미 강의' })
  description: string;

  @ApiProperty({ description: '예약 생성일', example: '2021-08-01T00:00:00' })
  createdAt: Date;

  @ApiProperty({ description: '예약 수정일', example: '2021-08-01T00:00:00' })
  updatedAt: Date;
}

export class ReservationListResponse {
  @ApiProperty({ description: '예약 목록', type: ReservationDto, isArray: true })
  reservations: ReservationDto[];
}
