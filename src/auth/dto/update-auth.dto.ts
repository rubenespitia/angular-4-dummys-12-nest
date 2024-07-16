import { PartialType } from '@nestjs/mapped-types';
import { CreateUserhDto } from './create-user.dto';

export class UpdateAuthDto extends PartialType(CreateUserhDto) {}
