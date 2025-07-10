// Replace this JSON object with your actual keywordsdata.json content
const keywordsData = [
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345770"
    },
    "product_id": "68593f1c1b010d7b8e345770_prod",
    "name": "Dosakaya",
    "keywords": [
      "Dosakaya",
      "Yellow Cucumber",
      "Cucumber (Indian)",
      "Cucumis sativus (related)",
      "Yellow",
      "Green",
      "Mild",
      "Tangy",
      "Hydrating",
      "Vitamin C",
      "Vitamin E",
      "Vitamin K",
      "Antioxidant",
      "Immunity",
      "Skin Health",
      "Bone Health",
      "Cooling",
      "దోసకాయ",
      "పసుపు దోసకాయ",
      "ఇండియన్ దోసకాయ",
      "దోస"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/dosakaya.avif?updatedAt=1751015440045"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345767"
    },
    "product_id": "68593f1c1b010d7b8e345767_prod",
    "name": "Bajji Mirchi",
    "keywords": [
      "Bajji Chili",
      "Mirchi Bajji",
      "Banana Pepper (similar)",
      "Capsicum annuum",
      "Green",
      "Mild Spicy",
      "Frying",
      "Stuffing",
      "Beta-Carotene",
      "Antioxidant",
      "Dietary Fiber",
      "Immunity",
      "Eye Health",
      "Digestion",
      "బజ్జి మిర్చి",
      "మిర్చి",
      "పచ్చి మిర్చి",
      "కారం"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/chilli/bajjimirchi.avif?updatedAt=1752137122053"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34577a"
    },
    "product_id": "68593f1c1b010d7b8e34577a_prod",
    "name": "Alachanda",
    "keywords": [
      "Alachanda",
      "Cowpeas",
      "Black-eyed peas",
      "Lobia",
      "Vigna unguiculata",
      "Green",
      "Legume",
      "Protein",
      "Fiber",
      "Folate",
      "Manganese",
      "Potassium",
      "Diabetes Management",
      "Digestive Health",
      "Immunity",
      "Cancer Prevention",
      "Cholesterol Management",
      "Anti-inflammatory",
      "అలసందలు",
      "బొబ్బర్లు",
      "కౌపీస్"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/alachnadakayalu_T2ZEI4mV7A?updatedAt=1751628110287"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345768"
    },
    "product_id": "68593f1c1b010d7b8e345768_prod",
    "name": "Kakarakaya",
    "keywords": [
      "Bitter Gourd",
      "Karela",
      "Bitter Melon",
      "Kakarakaya",
      "Momordica charantia",
      "Green",
      "Bitter",
      "Medicinal",
      "Blood Sugar",
      "Diabetes",
      "Vitamin C",
      "Antioxidant",
      "Pod",
      "Digestion",
      "Immunity",
      "Anti-inflammatory",
      "కాకరకాయ",
      "చేదు కాకర"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/Bitter%20Melon%20Seeds%20-%20Futo%20Spindle%20(1).avif?updatedAt=1751015290026"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345774"
    },
    "product_id": "68593f1c1b010d7b8e345774_prod",
    "name": "Chamadumpalu",
    "keywords": [
      "Chamadumpalu",
      "Taro Root",
      "Arbi",
      "Colocasia esculenta",
      "Starchy",
      "Root",
      "Fiber",
      "Resistant Starch",
      "Manganese",
      "Vitamin B6",
      "Potassium",
      "Heart Health",
      "Blood Sugar Control",
      "Cancer Prevention",
      "Weight Loss",
      "Polyphenols",
      "Quercetin",
      "చామదుంపలు",
      "అరబి"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/chamadumpalu.avif?updatedAt=1751011331122"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345777"
    },
    "product_id": "68593f1c1b010d7b8e345777_prod",
    "name": "Kera Dosakaya",
    "keywords": [
      "Cucumber",
      "Kheera",
      "Kakari",
      "Cucumis sativus",
      "Green",
      "Water-rich",
      "Hydrating",
      "Low Calorie",
      "Vitamin K",
      "Fiber",
      "Digestion",
      "Bone Health",
      "Blood Sugar Management",
      "Antioxidant",
      "Cooling",
      "Refreshing",
      "కీరా దోసకాయ",
      "కీర దోస"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/fruity%20vegetbales/keradosakaya.avif?updatedAt=1752137846687"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34576e"
    },
    "product_id": "68593f1c1b010d7b8e34576e_prod",
    "name": "Bangaladumpa",
    "keywords": [
      "Potato",
      "Aloo",
      "Bangaladumpa",
      "Solanum tuberosum",
      "Starchy",
      "Carbohydrate",
      "Potassium",
      "Tuber",
      "Root",
      "Versatile",
      "Underground",
      "Energy",
      "Vitamin C",
      "Vitamin B6",
      "Fiber",
      "Immunity",
      "Nerve Health",
      "Blood Pressure",
      "బంగాళాదుంప",
      "ఆలూ",
      "ఆలుగడ్డ"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/dumpalu/potato.avif?updatedAt=1752136840477"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345769"
    },
    "product_id": "68593f1c1b010d7b8e345769_prod",
    "name": "Beerakaya(natu)",
    "keywords": [
      "Ridge Gourd",
      "Luffa",
      "Turai",
      "Beerakaya",
      "Luffa acutangula",
      "Green",
      "Ridged",
      "Fiber",
      "Low Calorie",
      "Water-rich",
      "Mild Flavor",
      "Squash",
      "Digestion",
      "Immunity",
      "Vision",
      "బీరకాయ",
      "నాటు బీరకాయ"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/fruity%20vegetbales/birakaya(natu).avif?updatedAt=1752136972339"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345772"
    },
    "product_id": "68593f1c1b010d7b8e345772_prod",
    "name": "Aratikaya",
    "keywords": [
      "Raw Banana",
      "Green Banana",
      "Plantain (unripe)",
      "Aratikaya",
      "Musa paradisiaca",
      "Green",
      "Starchy",
      "Resistant Starch",
      "Potassium",
      "Unripe",
      "Cooked Vegetable",
      "Savory",
      "Gut Health",
      "Digestion",
      "Blood Sugar Control",
      "Fiber",
      "Vitamin B6",
      "Vitamin C",
      "Provitamin A",
      "అరటికాయ",
      "పచ్చి అరటికాయ"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/aratikaya.avif?updatedAt=1751011330709"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34577c"
    },
    "product_id": "68593f1c1b010d7b8e34577c_prod",
    "name": "Chilakadumpalu",
    "keywords": [
      "Sweet Potato",
      "Shakarkandi",
      "Chilakadumpalu",
      "Ipomoea batatas",
      "Orange",
      "Purple",
      "Sweet",
      "Beta-carotene",
      "Vitamin A",
      "Root",
      "Tuber",
      "Underground",
      "Fiber",
      "Low GI",
      "Gut Health",
      "Blood Sugar",
      "Anti-inflammatory",
      "Vision",
      "Immunity",
      "Brain Function",
      "Weight Loss",
      "Heart Health",
      "Skin Health",
      "Hair Health",
      "చిలకడదుంపలు",
      "మోతీ ఆలూ"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/dumpalu/sweetpotatos.avif?updatedAt=1752136840462"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34576f"
    },
    "product_id": "68593f1c1b010d7b8e34576f_prod",
    "name": "Ullipaya",
    "keywords": [
      "Onion",
      "Pyaz",
      "Ullipaya",
      "Allium cepa",
      "White",
      "Red",
      "Yellow",
      "Pungent",
      "Aromatic",
      "Antioxidant",
      "Allium",
      "Bulb",
      "Root (culinary)",
      "Flavoring",
      "Quercetin",
      "Heart Health",
      "Anti-inflammatory",
      "Immunity",
      "Blood Sugar",
      "ఉల్లిపాయ",
      "ఉల్లి"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/Onion.avif?updatedAt=1751015353191"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345773"
    },
    "product_id": "68593f1c1b010d7b8e345773_prod",
    "name": "Chikkudukaya",
    "keywords": [
      "Broad Beans",
      "Fava Beans",
      "Dolichos bean",
      "Lablab bean",
      "Chikkudukaya",
      "Vicia faba / Lablab purpureus",
      "Green",
      "Protein",
      "Fiber",
      "Legume",
      "Pod",
      "Earthy",
      "Folate",
      "Manganese",
      "Copper",
      "Iron",
      "Brain Development",
      "Immunity",
      "Heart Health",
      "Blood Pressure",
      "చిక్కుడుకాయ",
      "అనపకాయ"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/broad%20beans.avif?updatedAt=1751015289922"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345765"
    },
    "product_id": "68593f1c1b010d7b8e345765_prod",
    "name": "Bendakaya",
    "keywords": [
      "Okra",
      "Lady's Finger",
      "Bhindi",
      "Bendakaya",
      "Abelmoschus esculentus",
      "Green",
      "Mucilage",
      "Slimy",
      "Fiber",
      "Vitamin C",
      "Folate",
      "Pod",
      "Bhindi Fry",
      "Digestion",
      "Blood Sugar",
      "Immunity",
      "Anti-inflammatory",
      "బెండకాయ",
      "లేడీస్ ఫింగర్"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/fruity%20vegetbales/okra.avif?updatedAt=1752136972255"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34576b"
    },
    "product_id": "68593f1c1b010d7b8e34576b_prod",
    "name": "Carrot",
    "keywords": [
      "Carrot",
      "Gajar",
      "Carrot (Telugu)",
      "Daucus carota subsp. sativus",
      "Orange",
      "Red",
      "Beta-carotene",
      "Vitamin A",
      "Root",
      "Sweet",
      "Crisp",
      "Underground",
      "Vision",
      "Skin Health",
      "Immunity",
      "Bones",
      "క్యారెట్",
      "గాజర్"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/dumpalu/carrots.avif?updatedAt=1752152081486"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34576c"
    },
    "product_id": "68593f1c1b010d7b8e34576c_prod",
    "name": "Cabbage",
    "keywords": [
      "Cabbage",
      "Pattagobhi",
      "Cabbage (Telugu)",
      "Brassica oleracea var. capitata",
      "Green",
      "Purple",
      "Leafy",
      "Cruciferous",
      "Vitamin C",
      "Vitamin K",
      "Fiber",
      "Antioxidant",
      "Head",
      "Detoxification",
      "Anti-inflammatory",
      "Cancer Prevention",
      "Digestion",
      "Immunity",
      " క్యాబేజీ",
      "పటా గోబీ"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/cabagge.avif?updatedAt=1751015289854"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34576d"
    },
    "product_id": "68593f1c1b010d7b8e34576d_prod",
    "name": "Dondakayalu",
    "keywords": [
      "Ivy Gourd",
      "Tindora",
      "Kovakkai",
      "Dondakaya",
      "Coccinia grandis",
      "Green",
      "Small",
      "Fiber",
      "Iron",
      "Anti-diabetic",
      "Crispy",
      "Blood Sugar",
      "Immunity",
      "Digestion",
      "Weight Loss",
      "Heart Health",
      "Anti-inflammatory",
      "Antioxidant",
      "దొండకాయలు",
      "టిండోరా"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/compressed%20avif%20images/dondakayalu.avif?updatedAt=1751627941846"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e34577b"
    },
    "product_id": "68593f1c1b010d7b8e34577b_prod",
    "name": "Capsicum",
    "keywords": [
      "Capsicum",
      "Bell Pepper",
      "Shimla Mirch",
      "Sweet Pepper",
      "Capsicum annuum",
      "Red",
      "Green",
      "Yellow",
      "Orange",
      "Vitamin C",
      "Vitamin A",
      "Antioxidant",
      "Mild",
      "Flavorful",
      "Immunity",
      "Digestion",
      "Weight Loss",
      "Skin Health",
      "Anti-inflammatory",
      "Chronic Disease Prevention",
      "క్యాప్సికమ్",
      "బెల్ పెప్పర్",
      "సిమ్లా మిర్చి"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/chilli/capsicum1.avif?updatedAt=1752137122195"
  },
  {
    "_id": {
      "$oid": "68593f1c1b010d7b8e345763"
    },
    "product_id": "68593f1c1b010d7b8e345763_prod",
    "name": "Vankaya",
    "keywords": [
      "Brinjal",
      "Eggplant",
      "Aubergine",
      "Vankaya",
      "Solanum melongena",
      "Purple",
      "Nightshade",
      "Fiber",
      "Antioxidant",
      "Nasunin",
      "Bitter",
      "Spongy",
      "Heart Health",
      "Blood Pressure",
      "వంకాయ",
      "వంకాయ కూర"
    ],
    "image": "https://ik.imagekit.io/odbeydnbj/fruity%20vegetbales/vankaya.avif?updatedAt=1752138225016"
  }
];

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Make sure the path matches exactly what you expect
    // If your worker is deployed at example.com/myworker, and you want to access
    // the data at example.com/myworker/data/keywordsdata.json,
    // then url.pathname would be /myworker/data/keywordsdata.json
    // If you intend to access it directly at the root, e.g., example.com/data/keywordsdata.json,
    // then the current check `url.pathname === "/data/keywordsdata.json"` is correct.
    if (url.pathname === "/data/keywordsdata.json") {
      return new Response(JSON.stringify(keywordsData), {
        headers: {
          "Content-Type": "application/json",
          // Add CORS headers if you're fetching this from a different origin (e.g., a web application)
          "Access-Control-Allow-Origin": "*", // Be more specific in production
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // You can also add a default response for the root path or other paths
    if (url.pathname === "/") {
        return new Response("Welcome to the keywords data API! Try accessing /data/keywordsdata.json", { status: 200 });
    }

    return new Response("Not Found", { status: 404 });
  },
};
