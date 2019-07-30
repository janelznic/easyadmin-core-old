import { Injectable } from '@nestjs/common';
import { Session } from './interfaces/session.interface';
import { tokenList } from './session.consts';

@Injectable()
export class SessionService {
  public findUserByToken = async (token: string): Promise<Session | null> => {
    return await tokenList.find((user) => user.token === token);
  }
}
