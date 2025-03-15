/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
      .createTable("cafe", (table) => {
        table.increments("id").primary();
        table.string("photo").notNullable();
        table.text("photoDescription").notNullable();
        table.string("cafeFavourites").notNullable();
        table.string("photographer").notNullable();
        table.string("likes").notNullable();
        table.float("googleRating").notNullable();
        table.string("placeId").notNullable();
        table.string("tags").notNullable();
        table.float("lat").notNullable();
        table.float("lng").notNullable();
      })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("cafe");
  }