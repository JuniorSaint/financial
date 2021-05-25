import CategoryRepository from "../repositories/category-repository";
     
class CategoryService {
  async get() {
    let result = await CategoryRepository.find({}).sort({category: 1});
    return result;
  }
 
  async getById(_id) {
    let result = await CategoryRepository.findById(_id);
    return result;
  }
 
  async create(news) {
    let result = await CategoryRepository.create(news);
    return result;
  }
 
  async update(_id, news) {
    let result = await CategoryRepository.findByIdAndUpdate(_id, news);
    return result;
  }
 
  async delete(_id) {
    let result = await CategoryRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new CategoryService();