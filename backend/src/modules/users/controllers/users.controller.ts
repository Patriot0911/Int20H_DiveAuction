import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { UserSerializationDto } from 'src/modules/auth/dtos/user.dto';
import { GetUsersDto } from '../dto/get-users.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Serialize(UserSerializationDto)
  @Get()
  @HttpCode(200)
  async getAllUsers(@Query() { skip, take }: GetUsersDto) {
    const users = await this.usersService.findMany(skip, take);
    return users;
  }

  @Serialize(UserSerializationDto)
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findUnique(id);
    return user;
  }
}
