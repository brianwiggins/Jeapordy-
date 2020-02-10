import store from "../store.js";
import Clue from "../Models/Clue.js";

// @ts-ignore
const _api = axios.create({
  baseURL:"//jservice.io/api",
  timeout: 5000
})
class CluesService {
  getApiClues(){
    console.log("API clues is called")
  }
}

const service = new CluesService();
export default service;
