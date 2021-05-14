import entryRepository from "../repositories/entry-repository";
import EntryRepository from "../repositories/entry-repository";
     
class EntryService {


  async getDate(initDate, finalDate) {

    let startDate = initDate;
    let endDate = finalDate;

    let result = await EntryRepository.find({'dateLaunch': {$gte: startDate, $lte: endDate}}, 'dateLaunch type amount');
    return result;
  }


  async getByEntry() {


    let result = await EntryRepository.find({}, 'dateLaunch typeEntry amount');
    return result;
  }

  async get() {
    let result = await EntryRepository.find({}).sort({dateLaunch: -1});
    return result;
  }
 
  async getById(_id) {
    let result = await EntryRepository.findById(_id);
    return result;
  }
  
 
  async create(news) {
    let result = await EntryRepository.create(news);
    return result;
  }
 
  async update(_id, news) {
    let result = await EntryRepository.findByIdAndUpdate(_id, news);
    return result;
  }
 
  async delete(_id) {
    let result = await EntryRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new EntryService();