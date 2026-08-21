import prisma from "../lib/prisma.js";

import type {
  CreateChurchSettingsInput,
  UpdateChurchSettingsInput,
} from "../types/church-settings.types.js";

export class ChurchSettingsService {
  async create(data: CreateChurchSettingsInput) {
    const existing = await prisma.churchSettings.findFirst();

    if (existing) {
      throw new Error(
        "As configurações da igreja já foram cadastradas."
      );
    }

    return prisma.churchSettings.create({
      data: {
        name: data.name,
        address: data.address ?? null,
        city: data.city ?? null,
        state: data.state ?? null,
        phone: data.phone ?? null,
      },
    });
  }

  async find() {
    return prisma.churchSettings.findFirst();
  }

  async update(
    id: string,
    data: UpdateChurchSettingsInput
  ) {
    const existing =
      await prisma.churchSettings.findUnique({
        where: { id },
      });

    if (!existing) {
      throw new Error(
        "Configurações da igreja não encontradas."
      );
    }

    return prisma.churchSettings.update({
      where: { id },
      data: {
        ...(data.name !== undefined && {
          name: data.name,
        }),

        ...(data.address !== undefined && {
          address: data.address ?? null,
        }),

        ...(data.city !== undefined && {
          city: data.city ?? null,
        }),

        ...(data.state !== undefined && {
          state: data.state ?? null,
        }),

        ...(data.phone !== undefined && {
          phone: data.phone ?? null,
        }),
      },
    });
  }

  async delete(id: string) {
    const existing =
      await prisma.churchSettings.findUnique({
        where: { id },
      });

    if (!existing) {
      throw new Error(
        "Configurações da igreja não encontradas."
      );
    }

    return prisma.churchSettings.delete({
      where: { id },
    });
  }
}

export const churchSettingsService =
  new ChurchSettingsService();
