import {Injectable} from '@nestjs/common';
import {User} from './interfaces/user.interface';
import {userList} from './user.consts';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await userList;
  }

  async findUserByToken(token: string): Promise<User | null> {
    return await userList.find((user) => user.token === token);
  }
}
