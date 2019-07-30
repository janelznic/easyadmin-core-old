import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list-users')
  @UseGuards(AuthGuard('bearer'))
  async getUsers() {
    try {
      return await this.userService.getUsers();
    } catch (e) {
      throw Error(e);
    }
  }
}
