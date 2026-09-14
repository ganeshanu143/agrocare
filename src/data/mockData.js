export const sampleDiseases = [
  {
    id: "dis_1",
    name: "Leaf Blight (Alternaria Solani)",
    confidence: "94%",
    image: "/leaf_blight.jpg",
    symptoms: [
      "Dark brown to black concentric ring spots on leaves",
      "Yellowing around affected spots on lower leaves first",
      "Leaf curling, premature drying, and dropping off"
    ],
    treatment: [
      "Prune and safely destroy severely infected lower leaves.",
      "Improve field ventilation and space out crop canopy.",
      "Avoid overhead sprinkler watering; prefer drip irrigation to keep leaves dry."
    ],
    medicine: {
      name: "Copper Oxychloride 50% WP or Mancozeb 75% WP",
      dosage: "2.5 grams per Liter of clean water",
      schedule: "Spray evenly during dry morning hours. Repeat after 10-14 days if needed."
    },
    prevention: [
      "Use certified disease-resistant hybrid seeds.",
      "Practice 3-year crop rotation with non-solanaceous crops (e.g. cereals or pulses).",
      "Maintain adequate potassium levels in soil."
    ],
    nextSteps: [
      "Inspect neighboring plants within 5 meters for early yellow spots.",
      "Ensure soil drainage is free of standing rainwater.",
      "Consult local Krishi Vigyan Kendra (KVK) officer before large-scale pesticide spraying."
    ]
  },
  {
    id: "dis_2",
    name: "Powdery Mildew (Erysiphe Cichoracearum)",
    confidence: "89%",
    image: "/fresh_produce.jpg",
    symptoms: [
      "White powdery coating on upper leaf surfaces and stems",
      "Stunted leaf growth and subtle curling",
      "Leaves turn yellow and dry up prematurely"
    ],
    treatment: [
      "Spray Neem Oil solution (5ml/Liter) with organic soap surfactant.",
      "Remove heavily infected lower foliage.",
      "Maintain sun exposure across the plant row."
    ],
    medicine: {
      name: "Wettable Sulfur 80% WP or Azoxystrobin 23% SC",
      dosage: "2 grams per Liter of clean water",
      schedule: "Apply at first sign of white spots. Re-apply in 12 days."
    },
    prevention: [
      "Avoid planting crops too densely.",
      "Ensure maximum sunlight penetration.",
      "Apply organic bio-fungicides like Trichoderma viride."
    ],
    nextSteps: [
      "Apply organic neem spray within 24 hours.",
      "Monitor air humidity in the field."
    ]
  },
  {
    id: "dis_3",
    name: "Healthy Plant (No Disease Detected)",
    confidence: "98%",
    image: "/hero_banner.jpg",
    symptoms: [
      "Bright green uniform foliage",
      "No fungal spots or discoloration",
      "Vigorous stem and leaf development"
    ],
    treatment: [
      "Continue regular irrigation and balanced organic fertilization.",
      "Keep field free of weed hosts."
    ],
    medicine: {
      name: "Bio-stimulant / Panchagavya Organic Spray",
      dosage: "30ml per Liter of water",
      schedule: "Monthly prophylactic spray to boost natural plant immunity."
    },
    prevention: [
      "Maintain regular crop monitoring.",
      "Keep soil organic carbon healthy."
    ],
    nextSteps: [
      "Schedule next routine inspection in 2 weeks."
    ]
  }
];

export const sampleHistory = [
  {
    id: "scan_101",
    plantName: "Tomato (Solanum lycopersicum)",
    date: "12 Sep 2026",
    disease: "Leaf Blight",
    status: "Treatment Applied",
    confidence: "94%"
  },
  {
    id: "scan_102",
    plantName: "Chili Pepper",
    date: "28 Aug 2026",
    disease: "Powdery Mildew",
    status: "Resolved",
    confidence: "89%"
  },
  {
    id: "scan_103",
    plantName: "Paddy Rice",
    date: "15 Aug 2026",
    disease: "Healthy Leaf",
    status: "Healthy",
    confidence: "98%"
  }
];

export const masterCrops = [
  {
    id: "crop_tomato",
    name: "Hybrid Tomato",
    category: "Vegetables",
    suitability: "High (95% Match)",
    growingPeriod: "90 - 110 Days",
    waterReq: "Medium (Drip Recommended)",
    soilSuitability: "Loamy / Red Soil (pH 6.0 - 7.0)",
    tempSuitability: "20°C - 32°C",
    nutrientReq: "High Nitrogen & Potassium",
    difficulty: "Easy to Moderate",
    marketPotential: "High Local Demand & Daily Cashflow",
    mainRisks: "Susceptible to Leaf Blight during heavy monsoon rain.",
    farmingReq: "Requires wooden staking support, regular weeding, and drip fertigation."
  },
  {
    id: "crop_paddy",
    name: "Paddy / Rice (Samba Mahsuri)",
    category: "Cereals",
    suitability: "High (92% Match)",
    growingPeriod: "120 - 140 Days",
    waterReq: "High (Canal / Borewell Standing Water)",
    soilSuitability: "Clay / Black Heavy Soil (pH 5.5 - 7.5)",
    tempSuitability: "22°C - 35°C",
    nutrientReq: "Balanced N-P-K (120:60:60 kg/ha)",
    difficulty: "Moderate",
    marketPotential: "Government MSP Support & High Bulk Demand",
    mainRisks: "Water shortage during panicle initiation; Stem borer pest.",
    farmingReq: "Requires puddled field preparation, nursery transplantation, and continuous standing water."
  },
  {
    id: "crop_wheat",
    name: "Durum Wheat",
    category: "Cereals",
    suitability: "Medium-High (88% Match)",
    growingPeriod: "110 - 130 Days",
    waterReq: "Moderate (3-5 Irrigations)",
    soilSuitability: "Loamy / Black Soil (pH 6.0 - 7.5)",
    tempSuitability: "15°C - 26°C (Rabi Season)",
    nutrientReq: "Medium Nitrogen & Phosphorus",
    difficulty: "Easy",
    marketPotential: "Stable Mandi Prices & Flour Mills",
    mainRisks: "Terminal heat stress near harvesting.",
    farmingReq: "Line sowing with seed drill, crown root irrigation at 21 days."
  },
  {
    id: "crop_cotton",
    name: "Bt Cotton",
    category: "Cash crops",
    suitability: "Medium (82% Match)",
    growingPeriod: "160 - 180 Days",
    waterReq: "Medium - High",
    soilSuitability: "Deep Black Cotton Soil",
    tempSuitability: "25°C - 38°C",
    nutrientReq: "High Phosphorus & Zinc",
    difficulty: "Moderate to High",
    marketPotential: "Textile Mill Export Market",
    mainRisks: "Pink Bollworm attack & erratic monsoon rain.",
    farmingReq: "Wide row spacing (3ft x 1.5ft), soil test-based NPK."
  },
  {
    id: "crop_groundnut",
    name: "Groundnut / Peanut",
    category: "Oilseeds",
    suitability: "High (90% Match)",
    growingPeriod: "105 - 115 Days",
    waterReq: "Low to Medium",
    soilSuitability: "Sandy Loam / Light Red Soil",
    tempSuitability: "22°C - 30°C",
    nutrientReq: "Gypsum (Calcium & Sulfur) + Rhizobium biofertilizer",
    difficulty: "Easy",
    marketPotential: "Oil Mills & Export Grade Kernels",
    mainRisks: "Tikka leaf spot & pod rotting in waterlogged soil.",
    farmingReq: "Friable loose topsoil for easy peg penetration."
  }
];

export const sampleProducts = [
  {
    id: "prod_1",
    title: "Organic Red Tomatoes (A-Grade)",
    category: "Vegetables",
    quantity: "500 Kg",
    price: "₹25 / Kg",
    location: "Guntur, Andhra Pradesh",
    sellerName: "Ramesh Farmer",
    sellerRating: "4.9 ★",
    datePosted: "Today",
    image: "/fresh_produce.jpg",
    condition: "Freshly Harvested",
    description: "Naturally grown farm-fresh tomatoes. Excellent color, crisp texture, ideal for retail markets and hotels."
  },
  {
    id: "prod_2",
    title: "Durum Wheat Grain (Sharbati)",
    category: "Grains",
    quantity: "20 Quintals",
    price: "₹2,450 / Quintal",
    location: "Kurnool, Andhra Pradesh",
    sellerName: "Srinivas Rao",
    sellerRating: "4.8 ★",
    datePosted: "Yesterday",
    image: "/hero_banner.jpg",
    condition: "Sun Dried & Cleaned",
    description: "100% pure Sharbati wheat grains. Moisture content below 10%. Free of weeds."
  },
  {
    id: "prod_3",
    title: "Bio-Organic Vermicompost Fertilizer",
    category: "Fertilizers",
    quantity: "100 Bags (50kg each)",
    price: "₹350 / Bag",
    location: "Vijayawada, AP",
    sellerName: "GreenAgro Organics",
    sellerRating: "5.0 ★",
    datePosted: "2 days ago",
    image: "/leaf_blight.jpg",
    condition: "New Sealed Bags",
    description: "Rich earthworm castings with high NPK and organic carbon. Enhances soil moisture retention."
  },
  {
    id: "prod_4",
    title: "Hybrid Chili Seeds (Teja 4)",
    category: "Seeds",
    quantity: "50 Packets (100g)",
    price: "₹420 / Packet",
    location: "Warangal, Telangana",
    sellerName: "Venkatesh Farmers Co-op",
    sellerRating: "4.7 ★",
    datePosted: "3 days ago",
    image: "/fresh_produce.jpg",
    condition: "Certified Seeds",
    description: "High pungency red chili seeds with 90% germination rate and leaf curl virus resistance."
  }
];

export const sampleWeatherData = {
  currentTemp: "29°C",
  tempRange: "Min: 22°C | Max: 33°C",
  condition: "Partly Cloudy with Soft Breeze",
  rainfallProb: "20%",
  humidity: "68%",
  windSpeed: "14 km/h SW",
  source: "AgroWeather Live Station (Updated 10 mins ago)",
  advisories: [
    { type: "irrigation", text: "Good conditions for irrigation — morning watering recommended." },
    { type: "spray", text: "Favorable humidity for bio-spray application after 4:00 PM." },
    { type: "temp", text: "Moderate daytime temperature — no crop thermal stress observed." }
  ],
  forecast: [
    { day: "Today", temp: "29°C", icon: "Sun", cond: "Sunny" },
    { day: "Tue", temp: "31°C", icon: "Sun", cond: "Clear" },
    { day: "Wed", temp: "28°C", icon: "CloudRain", cond: "Light Rain" },
    { day: "Thu", temp: "27°C", icon: "CloudRain", cond: "Showers" },
    { day: "Fri", temp: "30°C", icon: "Sun", cond: "Partly Cloudy" }
  ]
};

export const sampleSoilData = {
  pH: { value: 6.8, status: "Normal", advice: "Ideal neutral pH range for most vegetables & cereals." },
  nitrogen: { value: "Medium (280 kg/ha)", status: "Normal", advice: "Maintain with compost or leguminous cover crops." },
  phosphorus: { value: "High (45 kg/ha)", status: "High", advice: "Sufficient phosphorus present. Reduce phosphatic fertilizer inputs." },
  potassium: { value: "Low (110 kg/ha)", status: "Low", advice: "Apply Muriate of Potash (MOP) or Wood Ash to boost fruit firmness." },
  moisture: { value: "32%", status: "Normal", advice: "Optimal topsoil moisture for root respiration." },
  organicMatter: { value: "1.4%", status: "Normal", advice: "Good organic carbon level. Continue mulching." }
};
