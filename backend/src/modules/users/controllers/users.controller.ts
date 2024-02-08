import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  async getAllUsers() {
    const users = await this.usersService.findMany();
    return users;
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.findUnique(parseInt(id));
    return user;
  }
}
