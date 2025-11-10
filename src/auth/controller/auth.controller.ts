import {Body, Controller, HttpCode, HttpStatus, Inject, Post} from '@nestjs/common';
import {AuthService} from "../services/auth.service";
import {SigninDto} from "../dto/signin.dto";
import {AUTH_SERVICE} from "../../common/tokens";
import {Public} from "../guards/public-auth.decorator";

@Controller('auth')
export class AuthController {
  constructor(@Inject(AUTH_SERVICE) private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async signIn(@Body() dto: SigninDto ) {
    return this.authService.signIn(dto.username, dto.password)
  }

}
