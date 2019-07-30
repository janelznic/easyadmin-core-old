import { Injectable } from '@nestjs/common';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthService {
  constructor(private readonly sessionService: SessionService) {}

  async validateUser(token: string): Promise<any> {
    return await this.sessionService.findUserByToken(token);
  }
}
