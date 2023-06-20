import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any) {
    if (error.detail) {
      Logger.error(`Error while fetching and storing coins data with error: ${error.detail}`);
      return;
    }

    Logger.error(`Error while fetching and storing coins data with error: ${error}`);
  }
}
