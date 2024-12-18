import userRepository from "./user.repository";

const userService = {
  async getUserById(id: number) {
    return await userRepository.getUserById(id);
  },
  async getUser(email: string) {
    return await userRepository.getUser(email);
  },

  async getAllUsers() {
    return await userRepository.getAllUsers();
  },

  async deleteUser(id: number) {
    return await userRepository.deleteUser(id);
  },

  async updateUser(id: number, data: Partial<{ name: string }>) {
    return userRepository.updateUser(id, data);
  },
};

export default userService;
