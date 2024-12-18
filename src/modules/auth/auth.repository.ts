import { User } from "../../@types";
import { prisma } from "../../config/database";
import { compareSync, hashSync } from "bcrypt";

const authRepository = {
  async registerUser(userData: User) {
    return await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashSync(userData.password, 10),
      },
    });
  },

  async login(loginUser: { email: string; password: string }) {
    if (!loginUser) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: { email: loginUser.email },
    });

    if (!user) {
      return null;
    }

    let isValid = compareSync(loginUser.password, user.password);
  },
};

export default authRepository;
