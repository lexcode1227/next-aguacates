import data from "./data";

class Database {
  async getAll() {
    await this.randomDelay();
    return Object.values(data);
  }

  async getById(id) {
    const entry = data[id];
    await this.randomDelay();
    return entry || null;
  }

  randomDelay() {
    const delay = Math.floor(Math.random() * 1000) + 1000;
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
}

export default new Database();
