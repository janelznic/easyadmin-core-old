import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list-users')
  async getUsers() {
    try {
      return await this.userService.getUsers();
    } catch (e) {
      throw Error(e);
    }
  }
}
