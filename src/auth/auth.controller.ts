import { Controller, Post, Body, Get, Param, UseGuards, Patch, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from 'dto/user.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async findAll() {
    return this.authService.findAll();
  }


  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('profile/:id')
  async getProfile(@Param('id') id: number) {
    return this.authService.findUserById(id);
  }

  @Patch('profile/update')
  @UseGuards(AuthGuard)
  async updateProfile(@Body() updateUserDto: UpdateUserDto , @Req() request: any) {
    return this.authService.updateUserProfile(updateUserDto , request.user );
  }


  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string) {
    return this.authService.forgotPassword(email);
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: { token: string; password: string }) {
    return this.authService.resetPassword(dto.token, dto.password);
  }
}
