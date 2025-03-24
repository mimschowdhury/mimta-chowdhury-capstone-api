export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comments').del();
  
  // Inserts seed entries
  await knex('comments').insert([
    {
        "id": "f3aa5dd5-4c75-4a74-a410-c59d56d04697",
        "photo_id": "cf27cf96-0222-11f0-8248-841f0fee7eab",
        "name": "Felix Brewer",
        "comment": "What a great angle! It really gives a new perspective on this location.",
        "timestamp": new Date(1724612264000)
    },
    {
        "id": "32ddc4d5-6d52-4da0-9aa9-feca647989f1",
        "photo_id": "cf27cf96-0222-11f0-8248-841f0fee7eab",
        "name": "mimta",
        "comment": "hi candice",
        "timestamp": new Date(1740542874995)
    },
    {
        "id": "5c1ef2e3-96d2-490e-9826-ced2ac414a9c",
        "photo_id": "cf27cf96-0222-11f0-8248-841f0fee7eab",
        "name": "new",
        "comment": "comment",
        "timestamp": new Date(1740543703018)
    },
    //cafe belem
    {
        "id": "c87786a9-4157-4025-b809-65c7dcff2017",
        "photo_id": "cf27d284-0222-11f0-8248-841f0fee7eab",
        "name": "Mimta",
        "comment": "The pastel de nata here is absolutely divine! Perfectly flaky and creamy.",
        "timestamp": new Date(1740695377676)
    },
    {
        "id": "d37b5527-fa5e-42c2-9ca4-31a67542541d",
        "photo_id": "cf27d284-0222-11f0-8248-841f0fee7eab",
        "name": "Maya",
        "comment": "The atmosphere is cozy, and the staff is super friendly. A great place to unwind!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "38222f3f-0ba7-4f2c-a864-9addf14c5982",
        "photo_id": "cf27d284-0222-11f0-8248-841f0fee7eab",
        "name": "Laila",
        "comment": "A hidden gem! The ambiance makes you feel like you're in Lisbon.",
        "timestamp": new Date(1740774534695)
    },
    //balzacs coffee
    {
        "id": "aac99546-2b08-4527-afaf-e000442868ee",
        "photo_id": "cf27d32e-0222-11f0-8248-841f0fee7eab",
        "name": "Alex",
        "comment": "Balzac’s has such a warm and inviting atmosphere. Perfect spot for a coffee break!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "08160c97-5536-4053-be2f-039cb7373552",
        "photo_id": "cf27d32e-0222-11f0-8248-841f0fee7eab",
        "name": "Zoya",
        "comment": "Tried the maple latte—so Canadian and so delicious!",
        "timestamp": new Date(1724957864000)
    },
    {
        "id": "efbf1aa1-0244-4570-a677-72d7691b008c",
        "photo_id": "cf27d32e-0222-11f0-8248-841f0fee7eab",
        "name": "Em",
        "comment": "Balzac’s is hands down one of the best cafes in the city! The atmosphere is cozy, with a mix of rustic charm and European-inspired aesthetics. Their coffee is always brewed to perfection, and you can really taste the quality. I love how spacious the seating is, making it a great spot to work or relax. Their almond croissant is a must-try—flaky, buttery, and pairs perfectly with a cappuccino. Service can be a bit slow during peak hours, but it's always worth the wait!",
        "timestamp": new Date(1725130664000)
    },
    //page one coffee and bar
    {
        "id": "2e4718f5-0603-4377-b30b-b6d9e290aa74",
        "photo_id": "cf280696-0222-11f0-8248-841f0fee7eab",
        "name": "Terry Wong",
        "comment": "Great angle! It really emphasizes the subject's presence in the frame.",
        "timestamp": new Date(1724957864000)
    },
    {
        "id": "f508fb8f-dba0-417b-845d-f0801795a14a",
        "photo_id": "cf280696-0222-11f0-8248-841f0fee7eab",
        "name": "Jordan Brown",
        "comment": "The photographer did a great job with this one.",
        "timestamp": new Date(1725130664000)
    },
    {
        "id": "5b321591-89f1-4545-aa13-147e9f62f89b",
        "photo_id": "cf280696-0222-11f0-8248-841f0fee7eab",
        "name": "Annie Lopez",
        "comment": "The framing in this shot is spot on. Great work!",
        "timestamp": new Date(1725476264000)
    },
    //stae cafe
    {
        "id": "ffe8efba-435f-4304-afb7-67229606accc",
        "photo_id": "cf280736-0222-11f0-8248-841f0fee7eab",
        "name": "Casey Schmidt",
        "comment": "Best spot for brunch!",
        "timestamp": new Date(1724612264000)
    },
    {
        "id": "faeccae5-7ea7-4c95-8b19-3bcece1a333f",
        "photo_id": "cf280736-0222-11f0-8248-841f0fee7eab",
        "name": "Mimta",
        "comment": "I'm in love with their steak sandwich! Their breakfast items here are sooo delicious, and I love how cozy, yet modern the cafe feels - definitely my favourite spot to catch up with friends!",
        "timestamp": new Date(1741897005602)
    },
    //circles and squares bakery cafe
    {
        "id": "922f13d0-2488-4feb-ab80-101a7db0f9c8",
        "photo_id": "cf280826-0222-11f0-8248-841f0fee7eab",
        "name": "Amara Okoye",
        "comment": "I hope to capture photos like you one day! You always manage to capture the city with such great visual depth.",
        "timestamp": new Date(1724612264000)
    },
    {
        "id": "0a6cab8b-de86-43cf-bd55-0fd9ce2d3edb",
        "photo_id": "cf280826-0222-11f0-8248-841f0fee7eab",
        "name": "Elena Rossi",
        "comment": "I love the details captured here, especially the architecture.",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "280be87a-837a-4d92-8800-6fe51f596ef6",
        "photo_id": "cf280826-0222-11f0-8248-841f0fee7eab",
        "name": "Casey Schmidt",
        "comment": "The mood and atmosphere in this shot are beautiful.",
        "timestamp": new Date(1724957864000)
    },
    //edils coffee house
    {
        "id": "d8508408-ae73-4a28-8050-6d344d497e24",
        "photo_id": "cf280880-0222-11f0-8248-841f0fee7eab",
        "name": "Greg Hooper",
        "comment": "The use of negative space here is very effective and impactful.",
        "timestamp": new Date(1724612264000)
    },
    {
        "id": "d81998cb-5b0c-4626-aaee-068e60a3011f",
        "photo_id": "cf280880-0222-11f0-8248-841f0fee7eab",
        "name": "Elena Rossi",
        "comment": "Great coffee house.",
        "timestamp": new Date(1725130664000)
    },
    //none for libary
    //dineen
    {
        "id": "c6c9fc57-d2a8-4e02-b6e4-f39c7befff0c",
        "photo_id": "cf280934-0222-11f0-8248-841f0fee7eab",
        "name": "Jordan Brown",
        "comment": "Amazing shot! The play of light and shadow is beautifully balanced.",
        "timestamp": new Date(1724785064000)
    },
    //forget me not coffee
    {
        "id": "a449a5bc-4f85-44c1-a84b-39e9d3359302",
        "photo_id": "cf28098e-0222-11f0-8248-841f0fee7eab",
        "name": "Charlene Thomas",
        "comment": "The small details really make this composition.",
        "timestamp": new Date(1724957864000)
    },
    //pilot coffee roasters
    {
        "id": "b4b9cabf-4d3f-4f0e-8aa1-4e68c1bf67ad",
        "photo_id": "cf2809de-0222-11f0-8248-841f0fee7eab",
        "name": "Terry Wong",
        "comment": "Love the candid feel of this photo. It tells a compelling story.",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "4731eeb7-64c7-4d56-933f-e3c17be293a8",
        "photo_id": "cf2809de-0222-11f0-8248-841f0fee7eab",
        "name": "Ash Tanaka",
        "comment": "Beautiful.",
        "timestamp": new Date(1725130664000)
    },
    {
        "id": "1e414374-6171-4c29-902a-e5c9e7a44f41",
        "photo_id": "cf2809de-0222-11f0-8248-841f0fee7eab",
        "name": "mimta",
        "comment": "comment!",
        "timestamp": new Date(1740542942095)
    },
    //fika cafe
    {
        "id": "cbd4f2cb-cf7d-4caa-92e7-035e38753ffa",
        "photo_id": "cf280a24-0222-11f0-8248-841f0fee7eab",
        "name": "Ingrid Smith",
        "comment": "Love the composition! The use of natural light here is stunning.",
        "timestamp": new Date(1724612264000)
    },
    //world peace cafe
    {
        "id": "a1b2c3d4-5678-9101-1121-314151617181",
        "photo_id": "b3197a30-344c-4f37-8c3d-a859c7611d14",
        "name": "Sophie",
        "comment": "This place truly lives up to its name—great vibes, delicious pastries, and the kindest staff!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "22334455-6677-8899-1011-121314151617",
        "photo_id": "b3197a30-344c-4f37-8c3d-a859c7611d14",
        "name": "Nathan",
        "comment": "The cardamom latte here is next-level. Never knew I needed it in my life until now!",
        "timestamp": new Date(1724957864000)
    },
    //cafe n one
    {
        "id": "33445566-7788-9900-1112-131415161718",
        "photo_id": "df129bd3-452b-41ca-bc59-bc9b1c606e09",
        "name": "Maya",
        "comment": "Love the aesthetic of this place! Super cozy and the matcha drinks are phenomenal.",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "44556677-8899-0011-1213-141516171819",
        "photo_id": "df129bd3-452b-41ca-bc59-bc9b1c606e09",
        "name": "Jordan",
        "comment": "If you’re into oat milk lattes, this is *the* spot to go. So smooth and creamy!",
        "timestamp": new Date(1724957864000)
    },
    // bready cafe
    {
        "id": "55667788-9900-1122-1314-151617181920",
        "photo_id": "a3d7f9c2-8b6e-4f1a-92d7-3c5e7a4b8d9f",
        "name": "Olivia",
        "comment": "The name says it all—if you love fresh, homemade bread, this is heaven!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "66778899-0011-2233-1415-161718192021",
        "photo_id": "a3d7f9c2-8b6e-4f1a-92d7-3c5e7a4b8d9f",
        "name": "Daniel",
        "comment": "The croissants here are unreal! Buttery, flaky, and absolutely delicious.",
        "timestamp": new Date(1724957864000)
    },
    //bevy
    {
        "id": "77889900-1122-3344-1516-171819202122",
        "photo_id": "e13f8a7b-2d3c-4b6a-92f9-8c3d5e7f6b4d",
        "name": "Emma",
        "comment": "Super trendy spot with great coffee and chill vibes. Love the playlist here!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "88990011-2233-4455-1617-181920212223",
        "photo_id": "e13f8a7b-2d3c-4b6a-92f9-8c3d5e7f6b4d",
        "name": "Liam",
        "comment": "Their signature Bevy Latte is so smooth and flavorful—definitely a must-try!",
        "timestamp": new Date(1724957864000)
    },
    //coffee lunar
    {
        "id": "99001122-3344-5566-1718-192021222324",
        "photo_id": "7f4b9c12-3d6a-4e5b-8f2e-92c7d1a6b8e3",
        "name": "Ethan",
        "comment": "This place has the most aesthetic coffee art. The vibes are immaculate!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "00112233-4455-6677-1819-202122232425",
        "photo_id": "7f4b9c12-3d6a-4e5b-8f2e-92c7d1a6b8e3",
        "name": "Sophia",
        "comment": "Their lavender latte is so delicate and fragrant. Perfect for a cozy afternoon.",
        "timestamp": new Date(1724957864000)
    },
    // le bleu coffee
    {
        "id": "11223344-5566-7788-1920-212223242526",
        "photo_id": "d9b3f8c2-7a5d-4e6f-91a2-3c7d8e4f5b1a",
        "name": "Grace",
        "comment": "Feels like a little slice of Paris in Toronto. Love the chic decor and smooth espresso!",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "22334455-6677-8899-2021-222324252627",
        "photo_id": "d9b3f8c2-7a5d-4e6f-91a2-3c7d8e4f5b1a",
        "name": "Alex",
        "comment": "The pain au chocolat here is absolutely perfect. Crispy, buttery, and filled with just the right amount of chocolate!",
        "timestamp": new Date(1724957864000)
    },
    //stae cafe
    {
        "id": "44556677-8899-0011-2223-242526272829",
        "photo_id": "cf280736-0222-11f0-8248-841f0fee7eab",
        "name": "Lucas",
        "comment": "Super minimalistic and peaceful space—great for focusing on work with a delicious coffee in hand.",
        "timestamp": new Date(1724957864000)
    },
    //casa boho
    {
        "id": "77889900-1122-3344-2526-272829303132",
        "photo_id": "9d5f8161-093a-47bb-8977-b24db66bc1d0",
        "name": "Ella",
        "comment": "Such a refreshing spot! Their smoothies are packed with fresh flavors.",
        "timestamp": new Date(1724785064000)
    },
    {
        "id": "88990011-2233-4455-2627-282930313233",
        "photo_id": "9d5f8161-093a-47bb-8977-b24db66bc1d0",
        "name": "Henry",
        "comment": "The tropical smoothie bowl is an absolute must-try. Perfect start to the day!",
        "timestamp": new Date(1724957864000)
    },
    //10 dean
    {
        "id": "c2f89d17-8d3e-4a8a-9d5c-6a7f49e5b1d2",
        "photo_id": "4731eeb7-64c7-4d56-933f-e3c17be293a8",
        "name": "Samantha",
        "comment": "Such a hidden gem! The lattes are smooth, and the pastries are so fresh. Definitely my new go-to cafe in the area!",
        "timestamp": new Date(1725205064000)
    },
    {
        "id": "8d5e3b7a-2c6f-491d-b9e7-4f2c8a5d1e6b",
        "photo_id": "4731eeb7-64c7-4d56-933f-e3c17be293a8",
        "name": "Jordan",
        "comment": "Loved the cozy vibes and the friendly baristas. The oat milk cappuccino was perfect—creamy and well-balanced!",
        "timestamp": new Date(1725387864000)
    },
    {
        "id": "3a7f49e5-b1d2-4c6f-8d5e-9a2b3c7f1e4d",
        "photo_id": "4731eeb7-64c7-4d56-933f-e3c17be293a8",
        "name": "Ethan",
        "comment": "Tried their signature espresso tonic—so refreshing! The ambiance is great for getting work done too.",
        "timestamp": new Date(1725560664000)
    },
    //dispatch
    {
        "id": "a7f5d4c3-8e2b-4a9c-7d6e-1f3b2c5a9e4d",
        "photo_id": "e3a1c2b4-5f6d-4a8e-9c7b-2d1e4f5a6b7c",
        "name": "Lucas",
        "comment": "Loved the ethical sourcing focus here! Their oat milk latte was smooth and perfectly balanced. Will definitely be back for a coffee tasting event!",
        "timestamp": new Date(1725205064000)
    },
    {
        "id": "9c7b2d1e-4f5a-6b7c-8e3a-1c2b4f5d6e7f",
        "photo_id": "e3a1c2b4-5f6d-4a8e-9c7b-2d1e4f5a6b7c",
        "name": "Maya",
        "comment": "Their Hibiscus Cinnamon Iced Tea was a game-changer! Refreshing, aromatic, and just the right amount of spice. A must-visit in Downtown Toronto!",
        "timestamp": new Date(1725387864000)
    },
    //bloom
    {
        "id": "3e6d4a9c-7b2d-1f5a-8e3a-4c5b9d7f2e1b",
        "photo_id": "05c22402-0ac2-4618-892b-7846a5d25233",
        "name": "Sophie",
        "comment": "The cream puffs here are heavenly—light, airy, and not too sweet. Pairing them with a matcha latte was pure perfection!",
        "timestamp": new Date(1725205064000)
    },
    {
        "id": "1f3b2c5a-9e4d-7d6e-8e3a-4a9c7b2d1f5a",
        "photo_id": "05c22402-0ac2-4618-892b-7846a5d25233",
        "name": "Ethan",
        "comment": "I finally found a place that does Kinako Daifuku right! Authentic, delicate, and packed with flavor. Will be coming back for the parfait next time!",
        "timestamp": new Date(1725387864000)
    },
    //hiya scone
    {
        "id": "f1a8c7d2-3b4e-49f6-82d5-7c9b5e2a8d4f",
        "photo_id": "c5f8e7d2-9b4a-4c1e-82f6-7d3a9b5e8c1f",
        "name": "Emma",
        "comment": "The Matcha White Chocolate Scone was divine! Perfect balance of earthy matcha and sweet white chocolate. Such a cozy spot!",
        "timestamp": new Date(1725209064000)
    },
    {
        "id": "7d2a9b5e-4c1f-8e7d-3b5a-82f6c5f8e7d2",
        "photo_id": "c5f8e7d2-9b4a-4c1e-82f6-7d3a9b5e8c1f",
        "name": "Ryan",
        "comment": "Absolutely obsessed with the Hojicha Latte! Smooth, creamy, and packed with rich roasted flavor. This place is a must-visit for scone lovers!",
        "timestamp": new Date(1725392864000)
    },
    //studio de corner
    {
        "id": "3e7b2d9f-4a6c-41e8-95d7-8f1a5c2e7b4f",
        "photo_id": "a3e7d9f2-4b6c-43e1-85d7-91f8c5e2a7b4",
        "name": "Sophia",
        "comment": "The Charcoal Latte was so unique—rich, smooth, and slightly smoky. Perfect spot to unwind with a book!",
        "timestamp": new Date(1725209064000)
    },
    {
        "id": "8c5e2a7b-4f3b-9d2a-6c1e-85d7a3e7d9f2",
        "photo_id": "a3e7d9f2-4b6c-43e1-85d7-91f8c5e2a7b4",
        "name": "Daniel",
        "comment": "Loved the Japanese Souffle Pancakes! So fluffy and light, paired perfectly with a matcha latte. The cafe’s ambiance is super relaxing too.",
        "timestamp": new Date(1725392864000)
    }
]);
}
