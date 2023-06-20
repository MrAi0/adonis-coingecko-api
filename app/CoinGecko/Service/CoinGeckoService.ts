import { constants } from "App/constants/Constants";
import HttpService from "App/libs/HttpService/HttpService";

export default class CoinGeckoService {
    private httpService: HttpService

    constructor() {
        this.httpService = new HttpService();
    }
    async fetchCoinsList() {
        const response = await this.httpService.getData(constants.fetchCoinGeckoURL);
        return response;
    }
}