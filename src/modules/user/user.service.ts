import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import UserModel from './user.model';

@Injectable()
export class UserService {
  public getUsers = async (): Promise<User[]> => {
    try {
      const users: User[] = UserModel.findAll({
        attributes: { exclude: ['password'] }
      }).then(user => {
        return user;
      });

      return users;
    } catch (error) {
      throw new Error('Error reading users from database');
    }
  }
}
