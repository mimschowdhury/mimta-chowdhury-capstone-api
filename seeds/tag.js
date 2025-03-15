export async function seed(knex) {
    await knex("tag").del(); // Clear existing entries
  
    await knex("tag").insert([
      { name: "Ambience" },
      { name: "Best Baked Goods" },
      { name: "Best Coffee" },
      { name: "Downtown Toronto" },
      { name: "Durham" },
      { name: "East York" },
      { name: "Markham" },
      { name: "North York" },
      { name: "Scarborough" },
      { name: "Study Spot" }
    ]);
  }
