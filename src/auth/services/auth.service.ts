import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../../users/services/users.service";
import {JwtService} from "@nestjs/jwt";
import {IAuthService} from "./auth.service.interface";
import {USERS_SERVICE} from "../../common/tokens";

@Injectable()
export class AuthService implements IAuthService{

  constructor(
    @Inject(USERS_SERVICE) private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {
  }

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {username: user.username, sub: user.id};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
