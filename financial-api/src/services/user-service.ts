import UserRepository from "../repositories/user-repository";
     
class UserService {
  
  async get() {
    let result = await UserRepository.find({}).sort({name: 1}).select("-password");
    return result;
  }
 
  async getById(_id) {
    let result = await UserRepository.findById(_id);
    return result;
  }

  async getByEmail(email) {
    let result = await UserRepository.findOne(email);
    return result;
  }

  async getByOne() {
    let result = await UserRepository.findOne({});
    return result;
  }
 
  async create(news) {
    let result = await UserRepository.create(news);
    return result;
  }
 
  async update(_id, news) {
    let result = await UserRepository.findByIdAndUpdate(_id, news);
    return result;
  }
 
  async delete(_id) {
    let result = await UserRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new UserService();