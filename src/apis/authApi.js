import axio from 'axios';

const API = axio.create({baseURL:"http://api-gateway.eba-5xnq4wsh.ap-northeast-1.elasticbeanstalk.com"});


export const authenticatUser = (userDet) => API.post('/login',userDet);
export const createNewUser = (newUser) =>  API.post('/api/v1/auth/users',newUser);