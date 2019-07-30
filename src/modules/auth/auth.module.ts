import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { SessionModule } from '../session/session.module';
import { SessionService } from '../session/session.service';

@Module({
  imports: [SessionModule],
  providers: [AuthService, HttpStrategy, SessionService]
})
export class AuthModule {}
