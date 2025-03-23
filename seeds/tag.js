export async function seed(knex) {
    await knex("tag").del(); // Clear existing entries
  
    await knex("tag").insert([
      { name: "Ambience" },
      { name: "Best Baked Goods" },
      { name: "Best Coffee" },
      { name: "Brunch" },
      { name: "Downtown Toronto" },
      { name: "Durham" },
      { name: "East York" },
      { name: "Etobicoke" },
      { name: "Markham" },
      { name: "North York" },
      { name: "Scarborough" },
      { name: "Study Spot" },
      { name: "West End Toronto" }
    ]);
  }
