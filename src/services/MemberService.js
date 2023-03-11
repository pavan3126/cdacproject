import axios from 'axios'

const MEMBER_BASE_REST_API_URL = 'http://localhost:44364/customer';

class MemberService{

  
    createMember(customer){
        return axios.post(MEMBER_BASE_REST_API_URL, customer)
    }

   
}

export default new MemberService();