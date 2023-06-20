import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'coins'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('symbol').notNullable();
      table.jsonb('platforms');
      table.timestamps(true, true);
    })
  }

  public async down() {
    this.schema.dropTable('coins');
  }
}
