import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class FetchCoins extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'fetch:coins'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Fetches coins data from CoinGecko API and stores it in the database'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest` 
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call 
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const CoinGeckoService = (await import('App/CoinGecko/Service/CoinGeckoService')).default;
    const Coin = (await import('App/CoinGecko/Models/Coin')).default;
    const ExceptionHandler = (await import('App/libs/Exceptions/Handler')).default;
    const Logger = (await import('@ioc:Adonis/Core/Logger')).default;

    // Fetch coins data
    const coinGeckoService = new CoinGeckoService();
    const coinsData = await coinGeckoService.fetchCoinsList();

    try {
      if (coinsData && coinsData.length > 0) {
        Logger.info(`Inserting coins data into database...`);

        // Insert coins data into the database
        await Coin.createMany(coinsData);
        Logger.info('Process complete!!');
      }
    } catch (error) {
      return new ExceptionHandler().handle(error);
    }
  }
}
