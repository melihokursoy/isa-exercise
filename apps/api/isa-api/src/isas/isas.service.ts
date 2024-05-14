import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.module';

import { CreateIsaInput } from './dto/create-isa.input';

@Injectable()
export class IsasService {
  constructor(private prisma: PrismaService) { }

  createIsa(createIsaInput: CreateIsaInput, userId: string) {
    return this.prisma.isa.upsert(
      {
        where: { userId: userId },
        create: { ...createIsaInput, userId: userId, },
        update: { ...createIsaInput, userId: userId, },
      })
  }

  getAllIsaOptions() {
    return this.prisma.isaOptions.findMany();
  }

  getIsaOptionById(id: string) {
    return this.prisma.isaOptions.findUnique({
      where: {
        id: id,
      },
    });

  }

  getMyIsa(userId: string) {
    return this.prisma.isa.findFirst({
      where: {
        userId: userId,
      },
    })
  }

  deleteMyIsa(userId: string) {
    return this.prisma.isa.delete({
      where: {
        userId: userId,
      },
    })
  }
}
