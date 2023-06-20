import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class HttpException extends HttpExceptionHandler {
    constructor() {
        super(Logger)
    }

    public async handle(error: any) {
        Logger.error(`Error while fetching and storing coins data with status code: ${error.response.status} and message: ${error.response.statusText}`);
    }
}