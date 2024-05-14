import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.module'

@Injectable()
export class PensionsService {
  constructor(private prisma: PrismaService) { }

  forUser(userId: string) {
    return this.prisma.pension.findFirst({
      where: {
        userId: userId,
      },
    })
  }
}


