import Logger from '@ioc:Adonis/Core/Logger'
import axios from "axios";
import HttpException from '../Exceptions/HttpException';

export default class HttpService {
    async getData(url: string) {
        try {
            Logger.info('Fetching data from coin gecko api...')
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            return new HttpException().handle(error);
        }
    }
}