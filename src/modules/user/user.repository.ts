import { prisma } from "../../config/database";

const userRepository = {
  async getUserById(id: number) {
    return await prisma.user.findUnique({ where: { id: id } });
  },
  async getUser(email: string) {
    return await prisma.user.findUnique({ where: { email: email } });
  },

  async getAllUsers() {
    return await prisma.user.findMany();
  },

  async deleteUser(id: number) {
    return await prisma.user.delete({ where: { id: id } });
  },

  async updateUser(id: number, data: Partial<{ name: string }>) {
    return await prisma.user.update({
      where: { id: id },
      data: {
        name: data.name,
      },
    });
  },
};

export default userRepository;
