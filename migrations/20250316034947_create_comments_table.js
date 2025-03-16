/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("comments", (table) => {
      table.uuid("id").primary().defaultTo(knex.raw('(UUID())'));
      table.uuid("photo_id").notNullable(); 
      table.string("name").notNullable();
      table.text("comment").notNullable();
      table.timestamp("timestamp").defaultTo(knex.fn.now());
  
      table
        .foreign("photo_id")
        .references("id")
        .inTable("cafe")
        .onDelete("CASCADE");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("comments");
}
