import * as Knex from 'knex';


exports.up = (db: Knex): Promise<any> => {
    return Promise.all([
        db.schema.createTable('listing_items', (table: Knex.CreateTableBuilder) => {

            table.increments('id').primary();
            table.string('hash').notNullable().unique();

            table.string('seller').notNullable();

            table.integer('market_id').unsigned().notNullable();
            table.foreign('market_id').references('id')
                .inTable('markets').onDelete('cascade');

            table.integer('listing_item_template_id').unsigned().nullable();
            table.foreign('listing_item_template_id').references('id')
                .inTable('listing_item_templates').onDelete('cascade');


            table.integer('expiry_time').unsigned();

            table.timestamp('updated_at').defaultTo(db.fn.now());
            table.timestamp('created_at').defaultTo(db.fn.now());
            table.timestamp('posted_at');
            const curTime = new Date();
            const expiredDefault = new Date(curTime.setDate(curTime.getDate() + 1));
            table.timestamp('expired_at').defaultTo(expiredDefault.getTime());
        })
    ]);
};

exports.down = (db: Knex): Promise<any> => {
    return Promise.all([
        db.schema.dropTable('listing_items')
    ]);
};
