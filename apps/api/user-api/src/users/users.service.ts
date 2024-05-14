import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from './prisma.module';
import { LoginArgs } from './dto/login.args';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './entities/auth.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService,private jwtService: JwtService) { }
  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: { ...createUserInput },
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    })

  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: { ...updateUserInput },
    })
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    })
  }

  async login(loginArgs: LoginArgs): Promise<Auth>  {
    const user = await this.prisma.user.findFirst({
      where: {
        ...loginArgs
      },
    })

    if (user) {
      const {password, ...payload} = user
      return {
        access_token: await this.jwtService.signAsync(payload),
      }
    }

    throw new UnauthorizedException();

  }
}
