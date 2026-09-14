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
    farmingReq: "Requires wooden staking support, regular weeding, and drip fertigation.",
    dailyTimeline: [
      {
        phase: "Days 1 – 15",
        title: "Land Preparation & Seedling Nursery",
        routine: "Deep plough land 2-3 times. Mix 10 tons FYM + 2.5kg Trichoderma viride per acre. Sow seeds in raised nursery beds. Water lightly twice daily (8:00 AM & 5:00 PM)."
      },
      {
        phase: "Days 16 – 30",
        title: "Transplantation & Root Establishment",
        routine: "Transplant 25-day seedlings into main field with 60cm x 45cm spacing. Drench soil with Jeevamrutha (200L/acre). Install 10 Yellow Sticky Traps per acre. Inspect young leaves daily at 7:00 AM."
      },
      {
        phase: "Days 31 – 60",
        title: "Vegetative Growth & Staking Support",
        routine: "Apply 500kg Vermicompost per acre around root zones. Apply paddy straw mulch. Spray Panchagavya (3% solution) every 15 days. Hand weed on Day 35. Irrigate every 3-4 days based on soil moisture."
      },
      {
        phase: "Days 61 – 85",
        title: "Flowering, Fruit Set & Pest Shield",
        routine: "Erect 5ft wooden staking poles with twine wire. Spray Neem Oil 10,000 PPM (5ml/L water) every 10 days to repel fruit borers. Spray Sour Buttermilk solution (50ml/L) against fungal spots. Check fruit firmness daily."
      },
      {
        phase: "Days 86 – 110",
        title: "Harvesting & Crop Cutting",
        routine: "Stop heavy liquid feeds 10 days before harvest. Harvest firm pink-red tomatoes early in the morning (6:30 AM - 9:00 AM) using sharp shears. Store in shaded wooden crates."
      }
    ],
    organicProtocol: {
      soilEnrichment: "Jeevamrutha (200 L/acre bi-weekly) + Vermicompost (500 kg/acre) + Azospirillum bio-fertilizer.",
      pestControl: "Neem Seed Kernel Extract (NSKE 5%) + Agniastra organic spray + Yellow/Blue sticky traps.",
      diseaseControl: "Trichoderma viride bio-fungicide + Fermented Sour Curd/Milk spray (5%).",
      weedControl: "Manual hand hoeing + 3-inch Paddy Straw mulching (zero chemical herbicides).",
      trapCrops: "Plant 1 row of Marigold flowers for every 16 rows of tomatoes to trap fruit borer caterpillars and soil nematodes."
    }
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
    farmingReq: "Requires puddled field preparation, nursery transplantation, and continuous standing water.",
    dailyTimeline: [
      {
        phase: "Days 1 – 20",
        title: "Nursery Preparation & Wet Puddling",
        routine: "Treat seeds with Beejamrutha. Prepare wet nursery bed. Puddle main field 3 times with green manure (Dhaincha/Sunnhemp) incorporated into soil."
      },
      {
        phase: "Days 21 – 45",
        title: "Transplantation & Tiller Growth",
        routine: "Transplant 2-3 seedlings per hill at 20cm x 15cm spacing. Maintain 2-3 cm standing water. Apply Jeevamrutha through irrigation channel every 12 days."
      },
      {
        phase: "Days 46 – 80",
        title: "Active Tillering & Panicle Initiation",
        routine: "Apply 400kg Neem Cake powder per acre to control stem borer larvae. Release Trichogramma egg parasitoid cards (2 cards/acre). Daily water depth check."
      },
      {
        phase: "Days 81 – 115",
        title: "Flowering & Grain Milk Stage",
        routine: "Maintain 5 cm water level. Spray Panchagavya 3% during grain filling stage. Spray Garlic-Chili kashayam if leaf folder pest appears."
      },
      {
        phase: "Days 116 – 140",
        title: "Drainage, Grain Hardening & Cutting",
        routine: "Drain out standing field water 10 days before harvest. When 85% panicles turn golden yellow, cut crop 5 cm above ground level using traditional sickles or combined harvester. Sun-dry paddy for 3 days."
      }
    ],
    organicProtocol: {
      soilEnrichment: "Green Manuring with Dhaincha + Blue Green Algae (BGA) + Vermicompost.",
      pestControl: "Neem Cake (400 kg/acre) + Pheromone traps (5/acre) + Light traps for stem borer moths.",
      diseaseControl: "Pseudomonas fluorescens seed treatment & foliar spray.",
      weedControl: "Cono-Weeder machine operation on Day 15 and Day 30 after transplanting.",
      trapCrops: "Plant Sesbania on field bunds to harbor beneficial predator insects."
    }
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
    farmingReq: "Line sowing with seed drill, crown root irrigation at 21 days.",
    dailyTimeline: [
      {
        phase: "Days 1 – 10",
        title: "Seed Treatment & Sowing",
        routine: "Treat seeds with Azotobacter & PSB culture. Sow in rows 20cm apart at 5cm depth. Apply initial light presowing irrigation."
      },
      {
        phase: "Days 11 – 30",
        title: "Crown Root Initiation (CRI Stage)",
        routine: "Provide 1st critical irrigation at Day 21 (CRI stage). Top dress 200kg Vermicompost per acre. Hand weed around rows."
      },
      {
        phase: "Days 31 – 70",
        title: "Jointing & Booting Stage",
        routine: "Provide 2nd irrigation at Day 45 (Jointing) and 3rd at Day 65 (Booting). Spray Fermented Jeevamrutha. Inspect for rust fungal spots daily."
      },
      {
        phase: "Days 71 – 100",
        title: "Flowering & Grain Filling Stage",
        routine: "Provide 4th irrigation at Day 85 (Milk stage). Spray Sour Curd 5% solution if yellow rust appears on leaves."
      },
      {
        phase: "Days 101 – 130",
        title: "Dough Stage, Ripening & Harvest Cutting",
        routine: "Stop irrigation at Day 105. Allow straw and wheat ears to turn golden straw color. Harvest crop using sickles or reaper machine. Thresh and winnow grains."
      }
    ],
    organicProtocol: {
      soilEnrichment: "Azotobacter & PSB bio-fertilizers + Farmyard Manure.",
      pestControl: "Neem Oil 5000 PPM spray for aphids + Yellow sticky cards.",
      diseaseControl: "Trichoderma harzianum soil application against root rot & rust.",
      weedControl: "Two hand weeding operations at 25 and 45 days after sowing.",
      trapCrops: "Mustard border rows (1 row mustard for every 9 rows wheat)."
    }
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
    farmingReq: "Wide row spacing (3ft x 1.5ft), soil test-based NPK.",
    dailyTimeline: [
      {
        phase: "Days 1 – 20",
        title: "Land Digging & Sowing",
        routine: "Dig deep furrows 3ft apart. Treat seeds with Trichoderma. Sow 2 seeds per hill. Water furrows lightly."
      },
      {
        phase: "Days 21 – 60",
        title: "Thinning & Branching Growth",
        routine: "Thin to 1 plant per hill. Apply 300kg Organic Neem Cake per acre. Hand weed and earthing up soil around plant stem."
      },
      {
        phase: "Days 61 – 110",
        title: "Square Formation & Flowering",
        routine: "Install 8 Pink Bollworm Pheromone traps per acre. Spray Dashparni Kashayam every 12 days to control sucking pests (jassids/thrips)."
      },
      {
        phase: "Days 111 – 150",
        title: "Boll Development & Bursting",
        routine: "Spray Panchagavya 3% to enhance boll size. Irrigate at 10-12 day intervals. Monitor boll bursting daily."
      },
      {
        phase: "Days 151 – 180",
        title: "Cotton Picking & Harvest",
        routine: "Pick clean fully opened white bolls manually in 3-4 pickings at 15-day intervals. Avoid dry leaf trash in picked cotton."
      }
    ],
    organicProtocol: {
      soilEnrichment: "VAM (Vesicular Arbuscular Mycorrhiza) + Vermicompost + Gypsum.",
      pestControl: "Pink Bollworm Pheromone Traps + Agniastra spray + Neem seed kernel extract.",
      diseaseControl: "Pseudomonas fluorescens + Copper sulfate organic lime mixture.",
      weedControl: "Inter-cultivation with bullock hoe / mini tiller at 30 and 60 days.",
      trapCrops: "Castor & Bhendi (Okra) border rows to trap bollworms."
    }
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
    farmingReq: "Friable loose topsoil for easy peg penetration.",
    dailyTimeline: [
      {
        phase: "Days 1 – 15",
        title: "Seed Treatment & Line Sowing",
        routine: "Treat kernels with Rhizobium leguminosarum & PSB bio-fertilizer. Sow seeds 30cm x 10cm apart in loose friable soil."
      },
      {
        phase: "Days 16 – 40",
        title: "Vegetative Growth & Flowering",
        routine: "Apply Gypsum (200 kg/acre) around plants on Day 30 to strengthen pod shell formation. Hand weed gently without disturbing soil roots."
      },
      {
        phase: "Days 41 – 75",
        title: "Peg Penetration & Pod Formation",
        routine: "CRITICAL STAGE: Do NOT disturb topsoil while pegs enter ground. Spray Jeevamrutha (200L/acre). Maintain light moisture."
      },
      {
        phase: "Days 76 – 95",
        title: "Pod Filling & Kernel Maturation",
        routine: "Spray Sour Milk solution against Tikka leaf spot. Avoid waterlogging in field."
      },
      {
        phase: "Days 96 – 115",
        title: "Harvesting & Pod Digging",
        routine: "Harvest when inside of pod shell turns dark brown. Irrigate lightly 2 days before harvest to loosen soil. Pull out plants manually, detach pods, and sun-dry pods for 5-7 days."
      }
    ],
    organicProtocol: {
      soilEnrichment: "Rhizobium Bio-fertilizer + Gypsum (200 kg/acre) + Compost.",
      pestControl: "Neem Oil spray for red hairy caterpillar + Light traps.",
      diseaseControl: "Trichoderma viride seed treatment for collar rot prevention.",
      weedControl: "One hand weeding at 20 days (stop weeding before pegging stage).",
      trapCrops: "Cowpea intercrop (1 row cowpea for every 6 rows groundnut)."
    }
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
