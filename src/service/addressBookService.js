import axios from "axios";
class AddressBookService {
    baseUrl = "http://localhost:8888/addressBook";
    addPerson(data) {
        return axios.post(`${this.baseUrl}/add`, data);
    }
    getAllData() {
        return axios.get(`${this.baseUrl}/get`);
    }
    getPersonById(id) {
        return axios.get(`${this.baseUrl}/get/${id}`);
    }
    updatePerson(id, data) {
        return axios.put(`${this.baseUrl}/update/${id}`, data);
    }
    deletePerson(id) {
        return axios.delete(`${this.baseUrl}/delete/${id}`);
    }

    sortByCity(){
        return axios.get(`${this.baseUrl}/sortByCity`);
    }
    sortByState(){
        return axios.get(`${this.baseUrl}/sortByState`);
    }
    serchByName(name){
        return axios.get(`${this.baseUrl}/searchByName/${name}`);
    }

}
export default new AddressBookService();