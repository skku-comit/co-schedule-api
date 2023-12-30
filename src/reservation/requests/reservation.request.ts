import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateReservationDto {

  @ApiProperty({ description: '제목', example: '제목입니다.' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 250)
  title: string;

  @ApiProperty({ description: '유저이름', example: '유저이름입니다.' })
  @IsNotEmpty()
  @IsString()
  @Length(1, 250)
  username: string;

  @ApiProperty({ description: '시간', example: '2021-01-01T00:00:00.000Z' })
  @IsNotEmpty()
  @IsDate()
  time: Date;

  @ApiPropertyOptional({ description: '설명', example: '설명입니다.' })
  @IsOptional()
  @IsString()
  @Length(1, 250)
  description?: string;
}

export class UpdateReservationDto extends CreateReservationDto {}