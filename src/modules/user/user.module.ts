import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [AuthModule, PassportModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
