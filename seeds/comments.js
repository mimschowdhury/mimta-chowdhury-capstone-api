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
    // {
    //     "id": "080ebf0b-ff4b-4d06-a54c-3f411f0b4f8f",
    //     "photo_id": "f31d524c-7ce8-446b-a4db-107cb089e4b4",
    //     "name": "Terry Wong",
    //     "comment": "Very moody, love how the tone contributes to the feeling.",
    //     "timestamp": new Date(1724957864000)
    // },
    // {
    //     "id": "e42e03a0-bf31-4f41-8f59-3a649130b555",
    //     "photo_id": "c432adb0-df2d-4f6b-83d0-bfda8d99fca5",
    //     "name": "Terry Wong",
    //     "comment": "Such a well-timed capture! The movement is perfectly frozen in the frame.",
    //     "timestamp": new Date(1724612264000)
    // },
    // {
    //     "id": "7b57e4c4-dda6-42ad-9e0f-18c9e13c592b",
    //     "photo_id": "c432adb0-df2d-4f6b-83d0-bfda8d99fca5",
    //     "name": "Ash Tanaka",
    //     "comment": "Good work.",
    //     "timestamp": new Date(1725130664000)
    //  },
    // found coffee
    // {
    //     "id": "350aac5f-dd17-4957-806f-1da196f3b40b",
    //     "photo_id": "e966674f-58d5-442e-8f42-5902e5ee6571",
    //     "name": "Nico Pascucci",
    //     "comment": "Excellent use of leading lines. Really draws the viewer's eye in.",
    //     "timestamp": new Date(1724957864000)
    // },
    // {
    //     "id": "888457e0-97b0-4900-b24c-63efc4101f4e",
    //     "photo_id": "e966674f-58d5-442e-8f42-5902e5ee6571",
    //     "name": "Charlene Thomas",
    //     "comment": "The bokeh effect in the foreground really contributes to this composition.",
    //     "timestamp": new Date(1725476264000)
    // },
    //cafe 23
    // {
    //     "id": "566a3622-012d-4aa3-a6ed-1ccf6306ae13",
    //     "photo_id": "2ce85c21-4a1e-4b05-b147-8c4957706d3e",
    //     "name": "Ali Novak-Greene",
    //     "comment": "Amazing shot! The play of light and shadow is beautifully balanced.",
    //     "timestamp": new Date(1724957864000)
    // },
    // {
    //dark espresso
    //     "id": "eb13b23f-37dd-4075-9af5-320fabe10d88",
    //     "photo_id": "d8300fda-61f8-42da-8c21-212f01a48b96",
    //     "name": "Elena Rossi",
    //     "comment": "The symmetry in this shot is incredibly satisfying. Well done!",
    //     "timestamp": new Date(1724957864000)
    // },
    // {
    //     "id": "72f674dc-c8aa-4b88-872a-e2e0b7474df8",
    //     "photo_id": "d8300fda-61f8-42da-8c21-212f01a48b96",
    //     "name": "Nico Pascucci",
    //     "comment": "Great use of line in this composition. Capturing the gradient of the sky and setting sun really adds to the magic of this snap.",
    //     "timestamp": new Date(1725130664000)
    // },
    // {
    //     "id": "07e4816c-4853-4ae5-9bb5-e64a35d41475",
    //     "photo_id": "d8300fda-61f8-42da-8c21-212f01a48b96",
    //     "name": "Terry Wong",
    //     "comment": "Great use of rule of thirds. The subject placement is perfect.",
    //     "timestamp": new Date(1725476264000)
    // },
    // {
    //     "id": "f20f620a-efcf-41bf-ae1c-9e448982c3c7",
    //     "photo_id": "d8300fda-61f8-42da-8c21-212f01a48b96",
    //     "name": "Kai Muller",
    //     "comment": "The lighting here is so natural and flattering. Great capture!",
    //     "timestamp": new Date(1725476264000)
    // },
    // {
    //     "id": "d1b93dcf-ec44-49be-b98b-7bd17456acaf",
    //     "photo_id": "c2e3a895-eaf0-42a8-8f9b-4722300ba847",
    //     "name": "Terry Wong",
    //     "comment": "The clarity and focus in this shot are impeccable. Great job!",
    //     "timestamp": new Date(1725476264000)
    // },
    // {
    //     "id": "4faf5418-587d-4456-a6f6-f99a677dbfe5",
    //     "photo_id": "c2e3a895-eaf0-42a8-8f9b-4722300ba847",
    //     "name": "Mimta",
    //     "comment": "My favourite cafe to study in! Loveeee the interiors and the spacious seating!",
    //     "timestamp": new Date(1741820586633)
    // },
    // {
    //     "id": "16bf5bb5-cbdf-4f61-8895-74b24f16c5a5",
    //     "photo_id": "aae2a3f0-24d0-4410-bbd7-d63cfbe1c671",
    //     "name": "Kai Muller",
    //     "comment": "Such a captivating photo! The depth of field is beautifully executed.",
    //     "timestamp": new Date(1724785064000)
    // },
    // {
    //     "id": "3adb431d-61d3-4a20-bc86-caabca05d68e",
    //     "photo_id": "4731eeb7-64c7-4d56-933f-e3c17be293a8",
    //     "name": "Terry Wong",
    //     "comment": "Fantastic capture! The reflections are perfectly executed and add dimension.",
    //     "timestamp": new Date(1724785064000)
    // },
    // {
    //     "id": "65c71eec-0f39-4a9d-99b7-642a89e511ee",
    //     "photo_id": "4731eeb7-64c7-4d56-933f-e3c17be293a8",
    //     "name": "Ash Tanaka",
    //     "comment": "Well done.",
    //     "timestamp": new Date(1724957864000)
    // },
    // {
    //     "id": "6f25b0a0-fce2-4b5d-8b52-e14bcba6ce73",
    //     "photo_id": "df129bd3-452b-41ca-bc59-bc9b1c606e09",
    //     "name": "Kai Muller",
    //     "comment": "Excellent shot! The composition and lighting create a striking visual",
    //     "timestamp": new Date(1724957864000)
    // },
    // {
    //     "id": "17a5d5f4-be57-4b67-8904-34cf170f2eff",
    //     "photo_id": "6321c961-de3b-44a3-9725-62a0560135db",
    //     "name": "Terry Wong",
    //     "comment": "Impressive capture! The contrast and shadows add so much depth.",
    //     "timestamp": new Date(1724785064000)
    // }
]);
}
