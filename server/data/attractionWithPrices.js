"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attractionWithPrices = void 0;
exports.attractionWithPrices = [
    // Paris, France
    {
        name: "Eiffel Tower",
        description: "Iconic wrought-iron tower offering panoramic city views.",
        lat: 48.8584,
        lon: 2.2945,
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        wikiTitle: "Eiffel_Tower",
        cityName: "Paris",
        price: 28, // Approx. €25 in 2023
    },
    {
        name: "Louvre Museum",
        description: "World-renowned art museum housing the Mona Lisa and vast collections.",
        lat: 48.8606,
        lon: 2.3376,
        address: "75001 Paris, France",
        wikiTitle: "Louvre",
        cityName: "Paris",
        price: 18, // Approx. €17 in 2023
    },
    {
        name: "Notre-Dame Cathedral",
        description: "Historic Gothic cathedral known for its architecture and history.",
        lat: 48.853,
        lon: 2.3499,
        address: "6 Parvis Notre-Dame, 75004 Paris, France",
        wikiTitle: "Notre-Dame_de_Paris",
        cityName: "Paris",
        price: 0, // Free entry to main cathedral (towers may cost extra)
    },
    {
        name: "Arc de Triomphe",
        description: "Monumental arch honoring Napoleon's victories and French history.",
        lat: 48.8738,
        lon: 2.295,
        address: "Place Charles de Gaulle, 75008 Paris, France",
        wikiTitle: "Arc_de_Triomphe",
        cityName: "Paris",
        price: 14, // Approx. €13 in 2023 for rooftop access
    },
    {
        name: "Sacré-Cœur Basilica",
        description: "Roman-Byzantine basilica with stunning views over Paris.",
        lat: 48.8867,
        lon: 2.3431,
        address: "35 Rue du Chevalier de la Barre, 75018 Paris, France",
        wikiTitle: "Sacré-Cœur,_Paris",
        cityName: "Paris",
        price: 0, // Free entry to basilica (dome may cost extra)
    },
    // Nice, France
    {
        name: "Promenade des Anglais",
        description: "Famous seafront promenade with scenic views of the Mediterranean.",
        lat: 43.6951,
        lon: 7.2651,
        address: "Promenade des Anglais, 06000 Nice, France",
        wikiTitle: "Promenade_des_Anglais",
        cityName: "Nice",
        price: 0, // Public promenade
    },
    {
        name: "Old Town (Vieille Ville)",
        description: "Charming historic district with narrow streets and vibrant markets.",
        lat: 43.6961,
        lon: 7.2746,
        address: "Vieux Nice, 06300 Nice, France",
        wikiTitle: "Nice",
        cityName: "Nice",
        price: 0, // Public area
    },
    {
        name: "Castle Hill (Colline du Château)",
        description: "Park with panoramic views, ruins, and a waterfall.",
        lat: 43.6947,
        lon: 7.2807,
        address: "Colline du Château, 06300 Nice, France",
        wikiTitle: "Castle_Hill,_Nice",
        cityName: "Nice",
        price: 0, // Free park
    },
    {
        name: "Musée Matisse",
        description: "Museum showcasing the works of Henri Matisse in a 17th-century villa.",
        lat: 43.7193,
        lon: 7.2761,
        address: "164 Avenue des Arènes de Cimiez, 06000 Nice, France",
        wikiTitle: "Musée_Matisse_(Nice)",
        cityName: "Nice",
        price: 10, // Approx. €10 in 2023
    },
    {
        name: "Nice Cathedral",
        description: "Baroque cathedral dedicated to Saint Reparata in the heart of Nice.",
        lat: 43.6973,
        lon: 7.2709,
        address: "Place Rossetti, 06300 Nice, France",
        wikiTitle: "Nice_Cathedral",
        cityName: "Nice",
        price: 0, // Free entry
    },
    // Lyon, France
    {
        name: "Basilica of Notre-Dame de Fourvière",
        description: "Iconic hilltop basilica with ornate interiors and city views.",
        lat: 45.7621,
        lon: 4.8226,
        address: "8 Place de Fourvière, 69005 Lyon, France",
        wikiTitle: "Basilica_of_Notre-Dame_de_Fourvière",
        cityName: "Lyon",
        price: 0, // Free entry to basilica
    },
    {
        name: "Vieux Lyon",
        description: "Historic Renaissance district with traboules and cobblestone streets.",
        lat: 45.7597,
        lon: 4.8278,
        address: "69005 Lyon, France",
        wikiTitle: "Vieux_Lyon",
        cityName: "Lyon",
        price: 0, // Public area
    },
    {
        name: "Lyon Cathedral",
        description: "Gothic and Romanesque cathedral with an astronomical clock.",
        lat: 45.7606,
        lon: 4.832,
        address: "Place Saint-Jean, 69005 Lyon, France",
        wikiTitle: "Lyon_Cathedral",
        cityName: "Lyon",
        price: 0, // Free entry
    },
    {
        name: "Musée des Beaux-Arts de Lyon",
        description: "Art museum in a former abbey with extensive European collections.",
        lat: 45.7667,
        lon: 4.8338,
        address: "20 Place des Terreaux, 69001 Lyon, France",
        wikiTitle: "Musée_des_Beaux-Arts_de_Lyon",
        cityName: "Lyon",
        price: 8, // Approx. €8 in 2023
    },
    {
        name: "Parc de la Tête d'Or",
        description: "Large urban park with a lake, zoo, and botanical gardens.",
        lat: 45.774,
        lon: 4.8532,
        address: "69006 Lyon, France",
        wikiTitle: "Parc_de_la_Tête_d'Or",
        cityName: "Lyon",
        price: 0, // Free park
    },
    // Rome, Italy
    {
        name: "Colosseum",
        description: "Ancient amphitheater and iconic symbol of Rome's history.",
        lat: 41.8902,
        lon: 12.4922,
        address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
        wikiTitle: "Colosseum",
        cityName: "Rome",
        price: 18, // Approx. €16 in 2023
    },
    {
        name: "Pantheon",
        description: "Well-preserved ancient temple with a massive dome.",
        lat: 41.8986,
        lon: 12.4769,
        address: "Piazza della Rotonda, 00186 Roma RM, Italy",
        wikiTitle: "Pantheon,_Rome",
        cityName: "Rome",
        price: 5, // Approx. €5 in 2023
    },
    {
        name: "Roman Forum",
        description: "Ruins of the ancient center of Roman public life.",
        lat: 41.8925,
        lon: 12.4853,
        address: "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
        wikiTitle: "Roman_Forum",
        cityName: "Rome",
        price: 18, // Included with Colosseum ticket
    },
    {
        name: "Trevi Fountain",
        description: "Baroque fountain where visitors toss coins for luck.",
        lat: 41.9009,
        lon: 12.4833,
        address: "Piazza di Trevi, 00187 Roma RM, Italy",
        wikiTitle: "Trevi_Fountain",
        cityName: "Rome",
        price: 0, // Public fountain
    },
    {
        name: "Vatican Museums",
        description: "Art and historical collections including the Sistine Chapel.",
        lat: 41.9064,
        lon: 12.4534,
        address: "Viale Vaticano, 00165 Roma RM, Italy",
        wikiTitle: "Vatican_Museums",
        cityName: "Rome",
        price: 20, // Approx. €17 in 2023
    },
    // Venice, Italy
    {
        name: "St. Mark's Square",
        description: "Central square surrounded by historic buildings and cafes.",
        lat: 45.434,
        lon: 12.3388,
        address: "Piazza San Marco, 30124 Venezia VE, Italy",
        wikiTitle: "St._Mark's_Square",
        cityName: "Venice",
        price: 0, // Public square
    },
    {
        name: "Doge's Palace",
        description: "Gothic palace and former residence of the Doge of Venice.",
        lat: 45.4339,
        lon: 12.3402,
        address: "Piazza San Marco, 1, 30124 Venezia VE, Italy",
        wikiTitle: "Doge's_Palace",
        cityName: "Venice",
        price: 28, // Approx. €25 in 2023
    },
    {
        name: "Grand Canal",
        description: "Main waterway lined with historic palaces and bridges.",
        lat: 45.4408,
        lon: 12.3155,
        address: "Grand Canal, 30100 Venezia VE, Italy",
        wikiTitle: "Grand_Canal_(Venice)",
        cityName: "Venice",
        price: 0, // Public waterway
    },
    {
        name: "Rialto Bridge",
        description: "Iconic stone bridge over the Grand Canal with shops.",
        lat: 45.438,
        lon: 12.3359,
        address: "Ponte di Rialto, 30125 Venezia VE, Italy",
        wikiTitle: "Rialto_Bridge",
        cityName: "Venice",
        price: 0, // Public bridge
    },
    {
        name: "Basilica di Santa Maria Gloriosa dei Frari",
        description: "Gothic church with Renaissance art and Titian's masterpieces.",
        lat: 45.4372,
        lon: 12.326,
        address: "Campo dei Frari, 30125 Venezia VE, Italy",
        wikiTitle: "Santa_Maria_Gloriosa_dei_Frari",
        cityName: "Venice",
        price: 5, // Approx. €5 in 2023
    },
    // Florence, Italy
    {
        name: "Florence Cathedral",
        description: "Gothic cathedral with Brunelleschi's iconic dome.",
        lat: 43.7731,
        lon: 11.2558,
        address: "Piazza del Duomo, 50122 Firenze FI, Italy",
        wikiTitle: "Florence_Cathedral",
        cityName: "Florence",
        price: 20, // Approx. €18 in 2023 for dome and museum combo
    },
    {
        name: "Uffizi Gallery",
        description: "Renowned museum with Renaissance art masterpieces.",
        lat: 43.7687,
        lon: 11.2556,
        address: "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
        wikiTitle: "Uffizi",
        cityName: "Florence",
        price: 22, // Approx. €20 in 2023
    },
    {
        name: "Ponte Vecchio",
        description: "Medieval stone bridge with shops over the Arno River.",
        lat: 43.768,
        lon: 11.2531,
        address: "Ponte Vecchio, 50125 Firenze FI, Italy",
        wikiTitle: "Ponte_Vecchio",
        cityName: "Florence",
        price: 0, // Public bridge
    },
    {
        name: "Piazza della Signoria",
        description: "Historic square with statues and the Palazzo Vecchio.",
        lat: 43.7696,
        lon: 11.2558,
        address: "Piazza della Signoria, 50122 Firenze FI, Italy",
        wikiTitle: "Piazza_della_Signoria",
        cityName: "Florence",
        price: 0, // Public square
    },
    {
        name: "Pitti Palace",
        description: "Renaissance palace with art galleries and Boboli Gardens.",
        lat: 43.7652,
        lon: 11.25,
        address: "Piazza de' Pitti, 1, 50125 Firenze FI, Italy",
        wikiTitle: "Pitti_Palace",
        cityName: "Florence",
        price: 18, // Approx. €16 in 2023
    },
    // New York City, USA
    {
        name: "Statue of Liberty",
        description: "Iconic symbol of freedom and democracy.",
        lat: 40.6892,
        lon: -74.0445,
        address: "Liberty Island, New York, NY 10004, USA",
        wikiTitle: "Statue_of_Liberty",
        cityName: "New York City",
        price: 24, // Approx. $24 for ferry and pedestal access in 2023
    },
    {
        name: "Central Park",
        description: "Expansive urban park with lakes, trails, and landmarks.",
        lat: 40.7829,
        lon: -73.9654,
        address: "Central Park, New York, NY 10022, USA",
        wikiTitle: "Central_Park",
        cityName: "New York City",
        price: 0, // Free park
    },
    {
        name: "Empire State Building",
        description: "Art Deco skyscraper with observation decks.",
        lat: 40.7484,
        lon: -73.9857,
        address: "350 5th Ave, New York, NY 10118, USA",
        wikiTitle: "Empire_State_Building",
        cityName: "New York City",
        price: 44, // Approx. $44 for main deck in 2023
    },
    {
        name: "Metropolitan Museum of Art",
        description: "World-class museum with extensive art collections.",
        lat: 40.7794,
        lon: -73.9632,
        address: "1000 5th Ave, New York, NY 10028, USA",
        wikiTitle: "Metropolitan_Museum_of_Art",
        cityName: "New York City",
        price: 30, // Approx. $30 in 2023
    },
    {
        name: "Times Square",
        description: "Vibrant commercial area with iconic billboards and theaters.",
        lat: 40.758,
        lon: -73.9855,
        address: "Times Square, New York, NY 10036, USA",
        wikiTitle: "Times_Square",
        cityName: "New York City",
        price: 0, // Public area
    },
    // Los Angeles, USA
    {
        name: "Hollywood Sign",
        description: "Iconic hillside sign representing the film industry.",
        lat: 34.1341,
        lon: -118.3215,
        address: "Mount Lee Dr, Los Angeles, CA 90068, USA",
        wikiTitle: "Hollywood_Sign",
        cityName: "Los Angeles",
        price: 0, // Viewable from public areas
    },
    {
        name: "Griffith Observatory",
        description: "Observatory with planetarium and city views.",
        lat: 34.1184,
        lon: -118.3004,
        address: "2800 E Observatory Rd, Los Angeles, CA 90027, USA",
        wikiTitle: "Griffith_Observatory",
        cityName: "Los Angeles",
        price: 0, // Free entry (planetarium shows extra)
    },
    {
        name: "Santa Monica Pier",
        description: "Historic pier with amusement rides and ocean views.",
        lat: 34.01,
        lon: -118.4962,
        address: "200 Santa Monica Pier, Santa Monica, CA 90401, USA",
        wikiTitle: "Santa_Monica_Pier",
        cityName: "Los Angeles",
        price: 0, // Free entry (rides extra)
    },
    {
        name: "The Getty Center",
        description: "Art museum with European paintings and gardens.",
        lat: 34.0777,
        lon: -118.4751,
        address: "1200 Getty Center Dr, Los Angeles, CA 90049, USA",
        wikiTitle: "Getty_Center",
        cityName: "Los Angeles",
        price: 0, // Free entry (parking fee applies)
    },
    {
        name: "Universal Studios Hollywood",
        description: "Theme park and studio tour with movie-themed attractions.",
        lat: 34.1381,
        lon: -118.3534,
        address: "100 Universal City Plaza, Universal City, CA 91608, USA",
        wikiTitle: "Universal_Studios_Hollywood",
        cityName: "Los Angeles",
        price: 109, // Approx. $109 for 1-day ticket in 2023
    },
    // San Francisco, USA
    {
        name: "Golden Gate Bridge",
        description: "Iconic Art Deco suspension bridge with scenic views.",
        lat: 37.8199,
        lon: -122.4783,
        address: "Golden Gate Bridge, San Francisco, CA 94129, USA",
        wikiTitle: "Golden_Gate_Bridge",
        cityName: "San Francisco",
        price: 0, // Free to walk or view
    },
    {
        name: "Alcatraz Island",
        description: "Former prison turned national park with historical tours.",
        lat: 37.8267,
        lon: -122.4229,
        address: "Alcatraz Island, San Francisco, CA 94133, USA",
        wikiTitle: "Alcatraz_Island",
        cityName: "San Francisco",
        price: 45, // Approx. $45 for ferry and tour in 2023
    },
    {
        name: "Fisherman's Wharf",
        description: "Waterfront area with seafood restaurants and sea lions.",
        lat: 37.808,
        lon: -122.4177,
        address: "Fisherman’s Wharf, San Francisco, CA 94133, USA",
        wikiTitle: "Fisherman's_Wharf,_San_Francisco",
        cityName: "San Francisco",
        price: 0, // Public area
    },
    {
        name: "Chinatown",
        description: "Vibrant cultural enclave with shops and restaurants.",
        lat: 37.7941,
        lon: -122.4078,
        address: "Grant Ave, San Francisco, CA 94108, USA",
        wikiTitle: "Chinatown,_San_Francisco",
        cityName: "San Francisco",
        price: 0, // Public area
    },
    {
        name: "Lombard Street",
        description: "Famous crooked street with hairpin turns and floral decor.",
        lat: 37.8021,
        lon: -122.4187,
        address: "Lombard St, San Francisco, CA 94133, USA",
        wikiTitle: "Lombard_Street_(San_Francisco)",
        cityName: "San Francisco",
        price: 0, // Public street
    },
    // Tokyo, Japan
    {
        name: "Tokyo Skytree",
        description: "Tallest tower in the world with observation decks.",
        lat: 35.7101,
        lon: 139.8107,
        address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
        wikiTitle: "Tokyo_Skytree",
        cityName: "Tokyo",
        price: 20, // Approx. ¥3000 for main deck in 2023
    },
    {
        name: "Shibuya Crossing",
        description: "Famous pedestrian crossing with vibrant urban energy.",
        lat: 35.6595,
        lon: 139.7005,
        address: "Shibuya, Tokyo 150-0002, Japan",
        wikiTitle: "Shibuya_Crossing",
        cityName: "Tokyo",
        price: 0, // Public area
    },
    {
        name: "Senso-ji Temple",
        description: "Ancient Buddhist temple in Asakusa with a lively market.",
        lat: 35.7148,
        lon: 139.7967,
        address: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
        wikiTitle: "Sensō-ji",
        cityName: "Tokyo",
        price: 0, // Free entry
    },
    {
        name: "Meiji Shrine",
        description: "Shinto shrine in a serene forested area.",
        lat: 35.6754,
        lon: 139.6993,
        address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
        wikiTitle: "Meiji_Shrine",
        cityName: "Tokyo",
        price: 0, // Free entry
    },
    {
        name: "Akihabara",
        description: "Vibrant district known for electronics and anime culture.",
        lat: 35.6984,
        lon: 139.7731,
        address: "Akihabara, Taito City, Tokyo 110-0006, Japan",
        wikiTitle: "Akihabara",
        cityName: "Tokyo",
        price: 0, // Public area
    },
    // Kyoto, Japan
    {
        name: "Fushimi Inari Taisha",
        description: "Shinto shrine with thousands of red torii gates.",
        lat: 34.9671,
        lon: 135.7798,
        address: "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, 612-0882, Japan",
        wikiTitle: "Fushimi_Inari-taisha",
        cityName: "Kyoto",
        price: 0, // Free entry
    },
    {
        name: "Kinkaku-ji",
        description: "Zen temple with a golden pavilion reflecting on a pond.",
        lat: 35.0394,
        lon: 135.7292,
        address: "1 Kinkakujicho, Kita Ward, Kyoto, 603-8361, Japan",
        wikiTitle: "Kinkaku-ji",
        cityName: "Kyoto",
        price: 4, // Approx. ¥500 in 2023
    },
    {
        name: "Arashiyama Bamboo Grove",
        description: "Scenic bamboo forest with picturesque walking paths.",
        lat: 35.0173,
        lon: 135.6721,
        address: "Sagaogurayama Tabuchiyamacho, Ukyo Ward, Kyoto, 616-8394, Japan",
        wikiTitle: "Arashiyama",
        cityName: "Kyoto",
        price: 0, // Free entry
    },
    {
        name: "Kiyomizu-dera",
        description: "Buddhist temple with a wooden stage and city views.",
        lat: 34.9949,
        lon: 135.785,
        address: "294 Kiyomizu, Higashiyama Ward, Kyoto, 605-0862, Japan",
        wikiTitle: "Kiyomizu-dera",
        cityName: "Kyoto",
        price: 4, // Approx. ¥400 in 2023
    },
    {
        name: "Gion District",
        description: "Historic geisha district with traditional tea houses.",
        lat: 35.0036,
        lon: 135.775,
        address: "Gion, Higashiyama Ward, Kyoto, 605-0073, Japan",
        wikiTitle: "Gion",
        cityName: "Kyoto",
        price: 0, // Public area
    },
    // Osaka, Japan
    {
        name: "Osaka Castle",
        description: "Historic castle with a museum and scenic park.",
        lat: 34.6873,
        lon: 135.5259,
        address: "1-1 Osakajo, Chuo Ward, Osaka, 540-0002, Japan",
        wikiTitle: "Osaka_Castle",
        cityName: "Osaka",
        price: 6, // Approx. ¥600 in 2023
    },
    {
        name: "Dotonbori",
        description: "Vibrant tourist district with food stalls and neon lights.",
        lat: 34.6687,
        lon: 135.5022,
        address: "Dotonbori, Chuo Ward, Osaka, 542-0071, Japan",
        wikiTitle: "Dōtonbori",
        cityName: "Osaka",
        price: 0, // Public area
    },
    {
        name: "Universal Studios Japan",
        description: "Theme park with movie-themed rides and attractions.",
        lat: 34.6654,
        lon: 135.4323,
        address: "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031, Japan",
        wikiTitle: "Universal_Studios_Japan",
        cityName: "Osaka",
        price: 80, // Approx. ¥8600 in 2023 for 1-day ticket
    },
    {
        name: "Sumiyoshi Taisha",
        description: "Ancient Shinto shrine with a distinctive arched bridge.",
        lat: 34.6126,
        lon: 135.4931,
        address: "2 Chome-9-89 Sumiyoshi, Sumiyoshi Ward, Osaka, 558-0045, Japan",
        wikiTitle: "Sumiyoshi_Taisha",
        cityName: "Osaka",
        price: 0, // Free entry
    },
    {
        name: "Shinsaibashi",
        description: "Popular shopping street with boutiques and restaurants.",
        lat: 34.6751,
        lon: 135.5013,
        address: "Shinsaibashisuji, Chuo Ward, Osaka, 542-0085, Japan",
        wikiTitle: "Shinsaibashi",
        cityName: "Osaka",
        price: 0, // Public area
    },
    // Bangkok, Thailand
    {
        name: "Grand Palace",
        description: "Royal complex with ornate temples and the Emerald Buddha.",
        lat: 13.75,
        lon: 100.4927,
        address: "Na Phra Lan Rd, Phra Nakhon, Bangkok 10200, Thailand",
        wikiTitle: "Grand_Palace",
        cityName: "Bangkok",
        price: 15, // Approx. 500 THB in 2023
    },
    {
        name: "Wat Arun",
        description: "Riverside temple known as the Temple of Dawn.",
        lat: 13.7437,
        lon: 100.4889,
        address: "158 Thanon Wang Doem, Bangkok Yai, Bangkok 10600, Thailand",
        wikiTitle: "Wat_Arun",
        cityName: "Bangkok",
        price: 3, // Approx. 100 THB in 2023
    },
    {
        name: "Wat Pho",
        description: "Temple with a giant reclining Buddha statue.",
        lat: 13.7461,
        lon: 100.4935,
        address: "2 Sanam Chai Rd, Phra Nakhon, Bangkok 10200, Thailand",
        wikiTitle: "Wat_Pho",
        cityName: "Bangkok",
        price: 6, // Approx. 200 THB in 2023
    },
    {
        name: "Chatuchak Weekend Market",
        description: "Massive outdoor market with thousands of stalls.",
        lat: 13.8002,
        lon: 100.5517,
        address: "587/10 Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900, Thailand",
        wikiTitle: "Chatuchak_Weekend_Market",
        cityName: "Bangkok",
        price: 0, // Free entry
    },
    {
        name: "Jim Thompson House",
        description: "Museum showcasing Thai art and the silk industry.",
        lat: 13.7492,
        lon: 100.5281,
        address: "6 Soi Kasem San 2, Rama 1 Rd, Pathum Wan, Bangkok 10330, Thailand",
        wikiTitle: "Jim_Thompson_House",
        cityName: "Bangkok",
        price: 6, // Approx. 200 THB in 2023
    },
    // Chiang Mai, Thailand
    {
        name: "Wat Phra That Doi Suthep",
        description: "Hilltop temple with panoramic views of Chiang Mai.",
        lat: 18.805,
        lon: 98.9215,
        address: "Mueang Chiang Mai District, Chiang Mai 50200, Thailand",
        wikiTitle: "Wat_Phra_That_Doi_Suthep",
        cityName: "Chiang Mai",
        price: 1, // Approx. 30 THB in 2023
    },
    {
        name: "Chiang Mai Night Bazaar",
        description: "Vibrant night market with crafts and street food.",
        lat: 18.7866,
        lon: 99.0004,
        address: "Chang Moi Rd, Chiang Mai 50100, Thailand",
        wikiTitle: "Chiang_Mai",
        cityName: "Chiang Mai",
        price: 0, // Free entry
    },
    {
        name: "Wat Chedi Luang",
        description: "Ancient temple with a partially ruined chedi.",
        lat: 18.7873,
        lon: 98.986,
        address: "103 Phra Pok Klao Rd, Chiang Mai 50200, Thailand",
        wikiTitle: "Wat_Chedi_Luang",
        cityName: "Chiang Mai",
        price: 1, // Approx. 40 THB in 2023
    },
    {
        name: "Elephant Nature Park",
        description: "Sanctuary for rescued elephants with educational tours.",
        lat: 19.2155,
        lon: 98.857,
        address: "1 Ratmakka Rd, Chiang Mai 50100, Thailand",
        wikiTitle: "Elephant_Nature_Park",
        cityName: "Chiang Mai",
        price: 75, // Approx. 2500 THB for day visit in 2023
    },
    {
        name: "Doi Inthanon National Park",
        description: "National park with Thailand's highest peak and waterfalls.",
        lat: 18.5532,
        lon: 98.4878,
        address: "Chom Thong District, Chiang Mai 50160, Thailand",
        wikiTitle: "Doi_Inthanon",
        cityName: "Chiang Mai",
        price: 9, // Approx. 300 THB in 2023
    },
    // Phuket, Thailand
    {
        name: "Patong Beach",
        description: "Popular beach with vibrant nightlife and water activities.",
        lat: 7.8961,
        lon: 98.2966,
        address: "Patong Beach, Kathu, Phuket 83150, Thailand",
        wikiTitle: "Patong",
        cityName: "Phuket",
        price: 0, // Public beach
    },
    {
        name: "Big Buddha",
        description: "Large Buddha statue with panoramic island views.",
        lat: 7.8276,
        lon: 98.3129,
        address: "Soi Yot Sane 1, Karon, Phuket 83100, Thailand",
        wikiTitle: "Big_Buddha_(Phuket)",
        cityName: "Phuket",
        price: 0, // Free entry
    },
    {
        name: "Phuket Old Town",
        description: "Historic area with Sino-Portuguese architecture and markets.",
        lat: 7.8838,
        lon: 98.389,
        address: "Thalang Rd, Phuket 83000, Thailand",
        wikiTitle: "Phuket_City",
        cityName: "Phuket",
        price: 0, // Public area
    },
    {
        name: "Wat Chalong",
        description: "Important Buddhist temple with ornate architecture.",
        lat: 7.8467,
        lon: 98.337,
        address: "70/6 Chao Fah Tawan Tok Rd, Chalong, Phuket 83130, Thailand",
        wikiTitle: "Wat_Chalong",
        cityName: "Phuket",
        price: 0, // Free entry
    },
    {
        name: "Phi Phi Islands",
        description: "Stunning islands with beaches and snorkeling opportunities.",
        lat: 7.7407,
        lon: 98.7784,
        address: "Phi Phi Islands, Phuket 81000, Thailand",
        wikiTitle: "Phi_Phi_Islands",
        cityName: "Phuket",
        price: 12, // Approx. 400 THB for national park fee in 2023
    },
    // Athens, Greece
    {
        name: "Acropolis",
        description: "Ancient citadel with the Parthenon and other ruins.",
        lat: 37.9715,
        lon: 23.7257,
        address: "Athens 105 58, Greece",
        wikiTitle: "Acropolis_of_Athens",
        cityName: "Athens",
        price: 22, // Approx. €20 in 2023
    },
    {
        name: "Parthenon",
        description: "Iconic Doric temple dedicated to Athena on the Acropolis.",
        lat: 37.9715,
        lon: 23.7266,
        address: "Acropolis, Athens 105 58, Greece",
        wikiTitle: "Parthenon",
        cityName: "Athens",
        price: 22, // Included with Acropolis ticket
    },
    {
        name: "National Archaeological Museum",
        description: "Museum with extensive collection of ancient Greek artifacts.",
        lat: 37.9891,
        lon: 23.7326,
        address: "44 Patision, Athens 106 82, Greece",
        wikiTitle: "National_Archaeological_Museum,_Athens",
        cityName: "Athens",
        price: 13, // Approx. €12 in 2023
    },
    {
        name: "Plaka",
        description: "Historic neighborhood with charming streets and tavernas.",
        lat: 37.972,
        lon: 23.73,
        address: "Plaka, Athens 105 56, Greece",
        wikiTitle: "Plaka",
        cityName: "Athens",
        price: 0, // Public area
    },
    {
        name: "Temple of Olympian Zeus",
        description: "Massive ancient temple dedicated to Zeus.",
        lat: 37.9693,
        lon: 23.7331,
        address: "Athens 105 57, Greece",
        wikiTitle: "Temple_of_Olympian_Zeus,_Athens",
        cityName: "Athens",
        price: 7, // Approx. €6 in 2023
    },
    // Santorini, Greece
    {
        name: "Oia",
        description: "Picturesque village with whitewashed buildings and sunsets.",
        lat: 36.461,
        lon: 25.3754,
        address: "Oia, Santorini 847 02, Greece",
        wikiTitle: "Oia,_Greece",
        cityName: "Santorini",
        price: 0, // Public area
    },
    {
        name: "Fira",
        description: "Vibrant capital with stunning caldera views.",
        lat: 36.4166,
        lon: 25.4324,
        address: "Fira, Santorini 847 00, Greece",
        wikiTitle: "Fira",
        cityName: "Santorini",
        price: 0, // Public area
    },
    {
        name: "Red Beach",
        description: "Unique beach with red volcanic sand.",
        lat: 36.3479,
        lon: 25.4539,
        address: "Akrotiri, Santorini 847 00, Greece",
        wikiTitle: "Akrotiri_(Santorini)",
        cityName: "Santorini",
        price: 0, // Public beach
    },
    {
        name: "Akrotiri Archaeological Site",
        description: "Ancient Minoan city preserved by volcanic ash.",
        lat: 36.3512,
        lon: 25.4034,
        address: "Akrotiri, Santorini 847 00, Greece",
        wikiTitle: "Akrotiri_(Santorini)",
        cityName: "Santorini",
        price: 13, // Approx. €12 in 2023
    },
    {
        name: "Kamari Beach",
        description: "Black sand beach with restaurants and water sports.",
        lat: 36.3768,
        lon: 25.4803,
        address: "Kamari, Santorini 847 00, Greece",
        wikiTitle: "Kamari",
        cityName: "Santorini",
        price: 0, // Public beach
    },
    // Thessaloniki, Greece
    {
        name: "White Tower",
        description: "Iconic seaside tower and museum of Thessaloniki's history.",
        lat: 40.6264,
        lon: 22.9484,
        address: "Leof. Nikis, Thessaloniki 546 21, Greece",
        wikiTitle: "White_Tower_of_Thessaloniki",
        cityName: "Thessaloniki",
        price: 4, // Approx. €4 in 2023
    },
    {
        name: "Archaeological Museum of Thessaloniki",
        description: "Museum with artifacts from ancient Macedonia.",
        lat: 40.625,
        lon: 22.9524,
        address: "6 Manoli Andronikou, Thessaloniki 546 21, Greece",
        wikiTitle: "Archaeological_Museum_of_Thessaloniki",
        cityName: "Thessaloniki",
        price: 9, // Approx. €8 in 2023
    },
    {
        name: "Rotunda",
        description: "4th-century Roman monument and early Christian church.",
        lat: 40.6333,
        lon: 22.9528,
        address: "Pl. Agiou Georgiou Rotonta, Thessaloniki 546 35, Greece",
        wikiTitle: "Arch_of_Galerius_and_Rotunda",
        cityName: "Thessaloniki",
        price: 4, // Approx. €4 in 2023
    },
    {
        name: "Aristotelous Square",
        description: "Central square with elegant architecture and cafes.",
        lat: 40.6327,
        lon: 22.9408,
        address: "Aristotelous Square, Thessaloniki 546 24, Greece",
        wikiTitle: "Aristotelous_Square",
        cityName: "Thessaloniki",
        price: 0, // Public square
    },
    {
        name: "Church of Agios Dimitrios",
        description: "Byzantine church dedicated to the patron saint of Thessaloniki.",
        lat: 40.6389,
        lon: 22.9475,
        address: "Ag. Dimitriou, Thessaloniki 546 33, Greece",
        wikiTitle: "Hagios_Demetrios",
        cityName: "Thessaloniki",
        price: 0, // Free entry
    },
    // Barcelona, Spain
    {
        name: "Sagrada Família",
        description: "Gaudi's unfinished modernist basilica.",
        lat: 41.4036,
        lon: 2.1744,
        address: "C/ de Mallorca, 401, 08013 Barcelona, Spain",
        wikiTitle: "Sagrada_Família",
        cityName: "Barcelona",
        price: 28, // Approx. €26 in 2023
    },
    {
        name: "Park Güell",
        description: "Colorful park with Gaudi's whimsical architecture.",
        lat: 41.4145,
        lon: 2.1527,
        address: "08024 Barcelona, Spain",
        wikiTitle: "Park_Güell",
        cityName: "Barcelona",
        price: 11, // Approx. €10 in 2023
    },
    {
        name: "La Rambla",
        description: "Vibrant pedestrian street with markets and performers.",
        lat: 41.3818,
        lon: 2.1734,
        address: "La Rambla, 08002 Barcelona, Spain",
        wikiTitle: "La_Rambla,_Barcelona",
        cityName: "Barcelona",
        price: 0, // Public street
    },
    {
        name: "Casa Batlló",
        description: "Gaudi's modernist masterpiece with colorful facades.",
        lat: 41.3916,
        lon: 2.1649,
        address: "Passeig de Gràcia, 43, 08007 Barcelona, Spain",
        wikiTitle: "Casa_Batlló",
        cityName: "Barcelona",
        price: 38, // Approx. €35 in 2023
    },
    {
        name: "Gothic Quarter",
        description: "Historic district with medieval streets and landmarks.",
        lat: 41.3833,
        lon: 2.1768,
        address: "Barri Gòtic, 08002 Barcelona, Spain",
        wikiTitle: "Gothic_Quarter,_Barcelona",
        cityName: "Barcelona",
        price: 0, // Public area
    },
    // Madrid, Spain
    {
        name: "Prado Museum",
        description: "World-class art museum with Spanish masterpieces.",
        lat: 40.4138,
        lon: -3.6922,
        address: "Paseo del Prado, s/n, 28014 Madrid, Spain",
        wikiTitle: "Prado_Museum",
        cityName: "Madrid",
        price: 16, // Approx. €15 in 2023
    },
    {
        name: "Royal Palace",
        description: "Official residence of the Spanish royal family.",
        lat: 40.4179,
        lon: -3.7143,
        address: "Calle de Bailén, s/n, 28071 Madrid, Spain",
        wikiTitle: "Royal_Palace_of_Madrid",
        cityName: "Madrid",
        price: 13, // Approx. €12 in 2023
    },
    {
        name: "Plaza Mayor",
        description: "Historic square with cafes and vibrant atmosphere.",
        lat: 40.4154,
        lon: -3.7074,
        address: "Plaza Mayor, 28012 Madrid, Spain",
        wikiTitle: "Plaza_Mayor,_Madrid",
        cityName: "Madrid",
        price: 0, // Public square
    },
    {
        name: "Retiro Park",
        description: "Large park with a lake and Crystal Palace.",
        lat: 40.4153,
        lon: -3.6845,
        address: "Plaza de la Independencia, 7, 28001 Madrid, Spain",
        wikiTitle: "Buen_Retiro_Park",
        cityName: "Madrid",
        price: 0, // Free park
    },
    {
        name: "Puerta del Sol",
        description: "Central square and hub of Madrid's activity.",
        lat: 40.4169,
        lon: -3.7038,
        address: "Puerta del Sol, 28013 Madrid, Spain",
        wikiTitle: "Puerta_del_Sol",
        cityName: "Madrid",
        price: 0, // Public square
    },
    // Seville, Spain
    {
        name: "Seville Cathedral",
        description: "Gothic cathedral and tomb of Christopher Columbus.",
        lat: 37.3858,
        lon: -5.993,
        address: "Av. de la Constitución, s/n, 41004 Sevilla, Spain",
        wikiTitle: "Seville_Cathedral",
        cityName: "Seville",
        price: 10, // Approx. €9 in 2023
    },
    {
        name: "Alcázar of Seville",
        description: "Royal palace with stunning Mudejar architecture.",
        lat: 37.3839,
        lon: -5.9915,
        address: "Patio de Banderas, s/n, 41004 Sevilla, Spain",
        wikiTitle: "Alcázar_of_Seville",
        cityName: "Seville",
        price: 14, // Approx. €13 in 2023
    },
    {
        name: "Plaza de España",
        description: "Grand square with canals and tiled bridges.",
        lat: 37.3772,
        lon: -5.9869,
        address: "Av. de Isabel la Católica, 41004 Sevilla, Spain",
        wikiTitle: "Plaza_de_España,_Seville",
        cityName: "Seville",
        price: 0, // Public square
    },
    {
        name: "Metropol Parasol",
        description: "Modern wooden structure with panoramic views.",
        lat: 37.3933,
        lon: -5.9919,
        address: "Pl. de la Encarnación, s/n, 41003 Sevilla, Spain",
        wikiTitle: "Metropol_Parasol",
        cityName: "Seville",
        price: 5, // Approx. €5 in 2023 for viewpoint
    },
    {
        name: "Triana Bridge",
        description: "Historic bridge over the Guadalquivir River.",
        lat: 37.386,
        lon: -6.0014,
        address: "Puente de Isabel II, 41010 Sevilla, Spain",
        wikiTitle: "Triana,_Seville",
        cityName: "Seville",
        price: 0, // Public bridge
    },
    // Cancun, Mexico
    {
        name: "Chichen Itza",
        description: "Ancient Mayan city with the iconic El Castillo pyramid.",
        lat: 20.6843,
        lon: -88.5678,
        address: "Chichen Itza, Yucatan, Mexico",
        wikiTitle: "Chichen_Itza",
        cityName: "Cancun",
        price: 30, // Approx. 600 MXN in 2023
    },
    {
        name: "Playa Delfines",
        description: "Scenic beach with turquoise waters and no crowds.",
        lat: 21.0595,
        lon: -86.7799,
        address: "Blvd. Kukulcan, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
        wikiTitle: "Cancún",
        cityName: "Cancun",
        price: 0, // Public beach
    },
    {
        name: "Cancun Underwater Museum",
        description: "Submerged sculptures promoting coral growth.",
        lat: 21.0368,
        lon: -86.78,
        address: "Zona Hotelera, 77500 Cancún, Q.R., Mexico",
        wikiTitle: "Cancún_Underwater_Museum",
        cityName: "Cancun",
        price: 50, // Approx. $50 for snorkel/dive tour in 2023
    },
    {
        name: "Zona Arqueológica El Rey",
        description: "Mayan ruins within Cancun’s hotel zone.",
        lat: 21.0606,
        lon: -86.7791,
        address: "Blvd. Kukulcan Km 18, Zona Hotelera, 77500 Cancún, Q.R., Mexico",
        wikiTitle: "El_Rey_(Maya_site)",
        cityName: "Cancun",
        price: 3, // Approx. 60 MXN in 2023
    },
    {
        name: "Xcaret Park",
        description: "Eco-archaeological park with cultural and natural attractions.",
        lat: 20.5809,
        lon: -87.1189,
        address: "Carretera Chetúmal-Puerto Juárez Km 282, 77710 Playa del Carmen, Q.R., Mexico",
        wikiTitle: "Xcaret",
        cityName: "Cancun",
        price: 100, // Approx. $100 for basic admission in 2023
    },
    // Mexico City, Mexico
    {
        name: "Zócalo",
        description: "Main square with historic buildings and the cathedral.",
        lat: 19.4326,
        lon: -99.1332,
        address: "Plaza de la Constitución, Centro, 06000 Ciudad de México, Mexico",
        wikiTitle: "Zócalo",
        cityName: "Mexico City",
        price: 0, // Public square
    },
    {
        name: "Teotihuacan",
        description: "Ancient city with the Pyramids of the Sun and Moon.",
        lat: 19.6927,
        lon: -98.8437,
        address: "Teotihuacan, State of Mexico, Mexico",
        wikiTitle: "Teotihuacan",
        cityName: "Mexico City",
        price: 4, // Approx. 80 MXN in 2023
    },
    {
        name: "National Museum of Anthropology",
        description: "Museum showcasing Mexico’s pre-Columbian heritage.",
        lat: 19.426,
        lon: -99.1863,
        address: "Av. Paseo de la Reforma s/n, Polanco, 11560 Ciudad de México, Mexico",
        wikiTitle: "National_Museum_of_Anthropology_(Mexico)",
        cityName: "Mexico City",
        price: 4, // Approx. 80 MXN in 2023
    },
    {
        name: "Frida Kahlo Museum",
        description: "House and museum dedicated to the artist Frida Kahlo.",
        lat: 19.3551,
        lon: -99.1629,
        address: "Calle Londres 247, Del Carmen, Coyoacán, 04100 Ciudad de México, Mexico",
        wikiTitle: "Frida_Kahlo_Museum",
        cityName: "Mexico City",
        price: 14, // Approx. 280 MXN in 2023
    },
    {
        name: "Chapultepec Castle",
        description: "Historic castle with panoramic views and museums.",
        lat: 19.4205,
        lon: -99.1817,
        address: "Bosque de Chapultepec I Secc, 11100 Ciudad de México, Mexico",
        wikiTitle: "Chapultepec_Castle",
        cityName: "Mexico City",
        price: 4, // Approx. 80 MXN in 2023
    },
    // Guadalajara, Mexico
    {
        name: "Guadalajara Cathedral",
        description: "Iconic cathedral with twin neo-Gothic towers.",
        lat: 20.6768,
        lon: -103.3469,
        address: "Av. Fray Antonio Alcalde 10, Zona Centro, 44100 Guadalajara, Jal., Mexico",
        wikiTitle: "Guadalajara_Cathedral",
        cityName: "Guadalajara",
        price: 0, // Free entry
    },
    {
        name: "Hospicio Cabañas",
        description: "UNESCO-listed cultural center with Orozco murals.",
        lat: 20.6773,
        lon: -103.339,
        address: "Calle Cabañas 8, San Juan de Dios, 44360 Guadalajara, Jal., Mexico",
        wikiTitle: "Hospicio_Cabañas",
        cityName: "Guadalajara",
        price: 4, // Approx. 80 MXN in 2023
    },
    {
        name: "Tlaquepaque",
        description: "Artisan village with galleries and traditional crafts.",
        lat: 20.6392,
        lon: -103.293,
        address: "San Pedro Tlaquepaque, Jal., Mexico",
        wikiTitle: "Tlaquepaque",
        cityName: "Guadalajara",
        price: 0, // Public area
    },
    {
        name: "Teatro Degollado",
        description: "Neoclassical theater with performances and ornate interiors.",
        lat: 20.676,
        lon: -103.344,
        address: "Calle Degollado s/n, Zona Centro, 44100 Guadalajara, Jal., Mexico",
        wikiTitle: "Teatro_Degollado",
        cityName: "Guadalajara",
        price: 0, // Free to view (tours or shows may cost extra)
    },
    {
        name: "Mercado Libertad",
        description: "Large market with food, crafts, and local goods.",
        lat: 20.675,
        lon: -103.3398,
        address: "Calle Javier Mina 52, San Juan de Dios, 44360 Guadalajara, Jal., Mexico",
        wikiTitle: "Mercado_Libertad",
        cityName: "Guadalajara",
        price: 0, // Free entry
    },
    // Sydney, Australia
    {
        name: "Sydney Opera House",
        description: "Iconic performing arts center with distinctive sails.",
        lat: -33.8568,
        lon: 151.2153,
        address: "Bennelong Point, Sydney NSW 2000, Australia",
        wikiTitle: "Sydney_Opera_House",
        cityName: "Sydney",
        price: 30, // Approx. AUD 43 for tour in 2023
    },
    {
        name: "Sydney Harbour Bridge",
        description: "Iconic bridge with climbable arches and scenic views.",
        lat: -33.8523,
        lon: 151.2108,
        address: "Sydney Harbour Bridge, Sydney NSW 2000, Australia",
        wikiTitle: "Sydney_Harbour_Bridge",
        cityName: "Sydney",
        price: 0, // Free to walk (bridge climb ~$250)
    },
    {
        name: "Bondi Beach",
        description: "Famous beach with surfing and vibrant atmosphere.",
        lat: -33.8915,
        lon: 151.2767,
        address: "Bondi Beach, NSW 2026, Australia",
        wikiTitle: "Bondi_Beach",
        cityName: "Sydney",
        price: 0, // Public beach
    },
    {
        name: "Royal Botanic Garden",
        description: "Lush gardens with native plants and harbor views.",
        lat: -33.8642,
        lon: 151.2166,
        address: "Mrs Macquaries Rd, Sydney NSW 2000, Australia",
        wikiTitle: "Royal_Botanic_Garden,_Sydney",
        cityName: "Sydney",
        price: 0, // Free entry
    },
    {
        name: "The Rocks",
        description: "Historic area with cobblestone streets and markets.",
        lat: -33.8599,
        lon: 151.209,
        address: "The Rocks NSW 2000, Australia",
        wikiTitle: "The_Rocks,_Sydney",
        cityName: "Sydney",
        price: 0, // Public area
    },
    // Melbourne, Australia
    {
        name: "Federation Square",
        description: "Cultural hub with museums, galleries, and events.",
        lat: -37.8183,
        lon: 144.9691,
        address: "Swanston St & Flinders St, Melbourne VIC 3000, Australia",
        wikiTitle: "Federation_Square",
        cityName: "Melbourne",
        price: 0, // Public square
    },
    {
        name: "Royal Exhibition Building",
        description: "UNESCO-listed building with historic architecture.",
        lat: -37.8044,
        lon: 144.9715,
        address: "9 Nicholson St, Carlton VIC 3053, Australia",
        wikiTitle: "Royal_Exhibition_Building",
        cityName: "Melbourne",
        price: 7, // Approx. AUD 10 for tour in 2023
    },
    {
        name: "Queen Victoria Market",
        description: "Historic market with food, crafts, and local goods.",
        lat: -37.8076,
        lon: 144.9571,
        address: "Queen St, Melbourne VIC 3000, Australia",
        wikiTitle: "Queen_Victoria_Market",
        cityName: "Melbourne",
        price: 0, // Free entry
    },
    {
        name: "Shrine of Remembrance",
        description: "War memorial with panoramic city views.",
        lat: -37.8305,
        lon: 144.9734,
        address: "Birdwood Ave, Melbourne VIC 3001, Australia",
        wikiTitle: "Shrine_of_Remembrance",
        cityName: "Melbourne",
        price: 0, // Free entry
    },
    {
        name: "Yarra River",
        description: "Scenic river with walking paths and boat tours.",
        lat: -37.8206,
        lon: 144.9646,
        address: "Yarra River, Melbourne VIC, Australia",
        wikiTitle: "Yarra_River",
        cityName: "Melbourne",
        price: 0, // Public area
    },
    // Brisbane, Australia
    {
        name: "South Bank Parklands",
        description: "Riverside park with gardens, restaurants, and a beach.",
        lat: -27.4785,
        lon: 153.0235,
        address: "South Bank, Brisbane QLD 4101, Australia",
        wikiTitle: "South_Bank_Parklands",
        cityName: "Brisbane",
        price: 0, // Free park
    },
    {
        name: "Lone Pine Koala Sanctuary",
        description: "Wildlife sanctuary with koalas and kangaroos.",
        lat: -27.5333,
        lon: 152.9686,
        address: "708 Jesmond Rd, Fig Tree Pocket QLD 4069, Australia",
        wikiTitle: "Lone_Pine_Koala_Sanctuary",
        cityName: "Brisbane",
        price: 34, // Approx. AUD 49 in 2023
    },
    {
        name: "Story Bridge",
        description: "Historic steel bridge with climbing tours and views.",
        lat: -27.4631,
        lon: 153.0352,
        address: "Story Bridge, Brisbane QLD 4169, Australia",
        wikiTitle: "Story_Bridge",
        cityName: "Brisbane",
        price: 0, // Free to walk (climb ~$100)
    },
    {
        name: "Queensland Museum",
        description: "Museum with exhibits on natural history and culture.",
        lat: -27.4727,
        lon: 153.0168,
        address: "Grey St & Melbourne St, South Brisbane QLD 4101, Australia",
        wikiTitle: "Queensland_Museum",
        cityName: "Brisbane",
        price: 0, // Free entry (some special exhibits may cost extra)
    },
    {
        name: "City Botanic Gardens",
        description: "Historic gardens with tropical plants and river views.",
        lat: -27.4753,
        lon: 153.03,
        address: "147 Alice St, Brisbane City QLD 4000, Australia",
        wikiTitle: "City_Botanic_Gardens",
        cityName: "Brisbane",
        price: 0, // Free entry
    },
    // Rio de Janeiro, Brazil
    {
        name: "Christ the Redeemer",
        description: "Iconic statue atop Corcovado Mountain.",
        lat: -22.9519,
        lon: -43.2105,
        address: "Parque Nacional da Tijuca, Rio de Janeiro, Brazil",
        wikiTitle: "Christ_the_Redeemer_(statue)",
        cityName: "Rio de Janeiro",
        price: 15, // Approx. BRL 75 in 2023 (includes train)
    },
    {
        name: "Sugarloaf Mountain",
        description: "Granite peak with cable cars and panoramic views.",
        lat: -22.9485,
        lon: -43.1543,
        address: "Urca, Rio de Janeiro, RJ, Brazil",
        wikiTitle: "Sugarloaf_Mountain",
        cityName: "Rio de Janeiro",
        price: 30, // Approx. BRL 150 in 2023 (cable car)
    },
    {
        name: "Copacabana Beach",
        description: "Famous beach with vibrant atmosphere and boardwalk.",
        lat: -22.9711,
        lon: -43.1822,
        address: "Copacabana, Rio de Janeiro, RJ, Brazil",
        wikiTitle: "Copacabana,_Rio_de_Janeiro",
        cityName: "Rio de Janeiro",
        price: 0, // Public beach
    },
    {
        name: "Maracanã Stadium",
        description: "Historic soccer stadium hosting major matches.",
        lat: -22.9122,
        lon: -43.2302,
        address: "Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro, RJ, Brazil",
        wikiTitle: "Maracanã_Stadium",
        cityName: "Rio de Janeiro",
        price: 12, // Approx. BRL 60 for tour in 2023
    },
    {
        name: "Tijuca National Park",
        description: "Lush rainforest with trails and waterfalls.",
        lat: -22.9498,
        lon: -43.2823,
        address: "Estr. da Cascatinha, 850, Rio de Janeiro, RJ, Brazil",
        wikiTitle: "Tijuca_National_Park",
        cityName: "Rio de Janeiro",
        price: 0, // Free entry (guided tours may cost extra)
    },
    // Kuala Lumpur, Malaysia
    {
        name: "Petronas Twin Towers",
        description: "Iconic skyscrapers with a skybridge and observation deck.",
        lat: 3.1579,
        lon: 101.7116,
        address: "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
        wikiTitle: "Petronas_Towers",
        cityName: "Kuala Lumpur",
        price: 20, // Approx. MYR 80 for skybridge and observation deck in 2023
    },
    {
        name: "Batu Caves",
        description: "Hindu temple complex in limestone caves with a giant statue.",
        lat: 3.2376,
        lon: 101.6841,
        address: "Gombak, 68100 Selangor, Malaysia",
        wikiTitle: "Batu_Caves",
        cityName: "Kuala Lumpur",
        price: 0, // Free entry (donations optional)
    },
    {
        name: "KLCC Park",
        description: "Urban park with jogging trails and a lake near the Petronas Towers.",
        lat: 3.1558,
        lon: 101.7153,
        address: "Jalan Ampang, Kuala Lumpur City Centre, 50450 Kuala Lumpur, Malaysia",
        wikiTitle: "KLCC_Park",
        cityName: "Kuala Lumpur",
        price: 0, // Free park
    },
    {
        name: "Sultan Abdul Samad Building",
        description: "Moorish-style colonial building housing government offices.",
        lat: 3.1489,
        lon: 101.6923,
        address: "Jalan Raja, City Centre, 50050 Kuala Lumpur, Malaysia",
        wikiTitle: "Sultan_Abdul_Samad_Building",
        cityName: "Kuala Lumpur",
        price: 0, // View externally (no public entry)
    },
    // Penang, Malaysia
    {
        name: "George Town",
        description: "UNESCO-listed historic district with colonial and street art.",
        lat: 5.4164,
        lon: 100.3407,
        address: "George Town, 10300 Penang, Malaysia",
        wikiTitle: "George_Town,_Penang",
        cityName: "Penang",
        price: 0, // Public area
    },
    {
        name: "Kek Lok Si Temple",
        description: "Largest Buddhist temple in Malaysia with a seven-story pagoda.",
        lat: 5.3992,
        lon: 100.2743,
        address: "11500 Air Itam, Penang, Malaysia",
        wikiTitle: "Kek_Lok_Si",
        cityName: "Penang",
        price: 0, // Free entry (donations optional)
    },
    {
        name: "Penang Hill",
        description: "Hilltop destination with funicular rides and views.",
        lat: 5.4239,
        lon: 100.2687,
        address: "Jalan Bukit Bendera, 11300 Penang, Malaysia",
        wikiTitle: "Penang_Hill",
        cityName: "Penang",
        price: 7, // Approx. MYR 30 for funicular in 2023
    },
    {
        name: "Cheong Fatt Tze Mansion",
        description: "Historic blue mansion with Chinese architecture.",
        lat: 5.422,
        lon: 100.3352,
        address: "14 Leith St, George Town, 10200 Penang, Malaysia",
        wikiTitle: "Cheong_Fatt_Tze_Mansion",
        cityName: "Penang",
        price: 5, // Approx. MYR 20 for tour in 2023
    },
    {
        name: "Clan Jetties",
        description: "Waterfront wooden villages with cultural heritage.",
        lat: 5.4127,
        lon: 100.3398,
        address: "Pengkalan Weld, George Town, 10300 Penang, Malaysia",
        wikiTitle: "Clan_Jetties",
        cityName: "Penang",
        price: 0, // Free entry
    },
    // Langkawi, Malaysia
    {
        name: "Langkawi Sky Bridge",
        description: "Curved pedestrian bridge with jungle and sea views.",
        lat: 6.3854,
        lon: 99.6705,
        address: "Jalan Telaga Tujuh, 07000 Langkawi, Kedah, Malaysia",
        wikiTitle: "Langkawi_Sky_Bridge",
        cityName: "Langkawi",
        price: 15, // Approx. MYR 65 for cable car and bridge in 2023
    },
    {
        name: "Eagle Square",
        description: "Iconic eagle statue and plaza in Kuah.",
        lat: 6.3114,
        lon: 99.8498,
        address: "Persiaran Putra, Kuah, 07000 Langkawi, Kedah, Malaysia",
        wikiTitle: "Eagle_Square",
        cityName: "Langkawi",
        price: 0, // Public square
    },
    {
        name: "Telaga Tujuh Waterfalls",
        description: "Seven-tiered waterfall with natural pools.",
        lat: 6.3857,
        lon: 99.6732,
        address: "Jalan Telaga Tujuh, 07000 Langkawi, Kedah, Malaysia",
        wikiTitle: "Telaga_Tujuh",
        cityName: "Langkawi",
        price: 0, // Free entry
    },
    {
        name: "Pantai Cenang",
        description: "Popular beach with water sports and nightlife.",
        lat: 6.293,
        lon: 99.7272,
        address: "Pantai Cenang, 07000 Langkawi, Kedah, Malaysia",
        wikiTitle: "Pantai_Cenang",
        cityName: "Langkawi",
        price: 0, // Public beach
    },
    {
        name: "Langkawi Underwater World",
        description: "Aquarium showcasing marine life with a tunnel exhibit.",
        lat: 6.2899,
        lon: 99.7298,
        address: "Jalan Pantai Chenang, 07000 Langkawi, Kedah, Malaysia",
        wikiTitle: "Underwater_World_Langkawi",
        cityName: "Langkawi",
        price: 10, // Approx. MYR 40 in 2023
    },
    // Cairo, Egypt
    {
        name: "Giza Pyramids",
        description: "Iconic ancient pyramids including the Great Pyramid.",
        lat: 29.9792,
        lon: 31.1342,
        address: "Al Haram, Nazlet El-Semman, Giza, Cairo, Egypt",
        wikiTitle: "Giza_Pyramid_Complex",
        cityName: "Cairo",
        price: 10, // Approx. EGP 200 in 2023
    },
    {
        name: "Great Sphinx",
        description: "Monumental limestone statue of a reclining sphinx.",
        lat: 29.9753,
        lon: 31.1376,
        address: "Al Haram, Giza, Cairo, Egypt",
        wikiTitle: "Great_Sphinx_of_Giza",
        cityName: "Cairo",
        price: 10, // Included with Giza Pyramids ticket
    },
    {
        name: "Egyptian Museum",
        description: "Museum housing ancient Egyptian artifacts and mummies.",
        lat: 30.0478,
        lon: 31.2336,
        address: "Tahrir Square, Cairo, Egypt",
        wikiTitle: "Egyptian_Museum",
        cityName: "Cairo",
        price: 10, // Approx. EGP 200 in 2023
    },
    {
        name: "Khan el-Khalili",
        description: "Historic bazaar with shops and cafes in medieval Cairo.",
        lat: 30.0475,
        lon: 31.2622,
        address: "El-Gamaleya, El Qa, Cairo, Egypt",
        wikiTitle: "Khan_el-Khalili",
        cityName: "Cairo",
        price: 0, // Free entry
    },
    {
        name: "Citadel of Saladin",
        description: "Historic fortification with mosques and panoramic views.",
        lat: 30.0297,
        lon: 31.2612,
        address: "Salah Salem St, Al Abageyah, Cairo, Egypt",
        wikiTitle: "Cairo_Citadel",
        cityName: "Cairo",
        price: 7, // Approx. EGP 140 in 2023
    },
    // Luxor, Egypt
    {
        name: "Karnak Temple",
        description: "Vast temple complex with hypostyle hall and obelisks.",
        lat: 25.7188,
        lon: 32.6581,
        address: "Karnak, Luxor, Egypt",
        wikiTitle: "Karnak",
        cityName: "Luxor",
        price: 8, // Approx. EGP 160 in 2023
    },
    {
        name: "Valley of the Kings",
        description: "Ancient burial site with pharaohs’ tombs.",
        lat: 25.7402,
        lon: 32.6017,
        address: "New Valley, Luxor, Egypt",
        wikiTitle: "Valley_of_the_Kings",
        cityName: "Luxor",
        price: 12, // Approx. EGP 240 in 2023
    },
    {
        name: "Luxor Temple",
        description: "Ancient temple with statues and avenue of sphinxes.",
        lat: 25.6997,
        lon: 32.6391,
        address: "Corniche El Nil, Luxor, Egypt",
        wikiTitle: "Luxor_Temple",
        cityName: "Luxor",
        price: 7, // Approx. EGP 140 in 2023
    },
    // São Paulo, Brazil
    {
        name: "São Paulo Museum of Art (MASP)",
        description: "Iconic museum with a vast collection of Western and Brazilian art.",
        lat: -23.5614,
        lon: -46.6559,
        address: "Av. Paulista, 1578, São Paulo, SP, Brazil",
        wikiTitle: "São_Paulo_Museum_of_Art",
        cityName: "São Paulo",
        price: 10, // Approx. BRL 50 in 2023[](https://www.cntraveler.com/story/cheapest-places-to-travel-in-the-world)
    },
    {
        name: "Ibirapuera Park",
        description: "Large urban park with museums, planetarium, and green spaces.",
        lat: -23.5874,
        lon: -46.6576,
        address: "Av. Pedro Álvares Cabral, São Paulo, SP, Brazil",
        wikiTitle: "Ibirapuera_Park",
        cityName: "São Paulo",
        price: 0, // Free entry
    },
    {
        name: "Pinacoteca do Estado",
        description: "Art museum showcasing Brazilian works in a historic building.",
        lat: -23.5343,
        lon: -46.6339,
        address: "Praça da Luz, 2, São Paulo, SP, Brazil",
        wikiTitle: "Pinacoteca_do_Estado_de_São_Paulo",
        cityName: "São Paulo",
        price: 6, // Approx. BRL 30 in 2023
    },
    {
        name: "Mercado Municipal",
        description: "Vibrant market known for exotic fruits and gourmet food stalls.",
        lat: -23.5419,
        lon: -46.6297,
        address: "R. Cantareira, 306, São Paulo, SP, Brazil",
        wikiTitle: "Mercado_Municipal_de_São_Paulo",
        cityName: "São Paulo",
        price: 0, // Free to enter (food purchases extra)
    },
    // Cape Town, South Africa
    {
        name: "Table Mountain",
        description: "Iconic flat-topped mountain with cableway and panoramic views.",
        lat: -33.9628,
        lon: 18.4038,
        address: "Table Mountain National Park, Cape Town, South Africa",
        wikiTitle: "Table_Mountain",
        cityName: "Cape Town",
        price: 22, // Approx. ZAR 420 for cableway in 2023[](https://www.cntraveler.com/story/cheapest-places-to-travel-in-the-world)
    },
    {
        name: "Robben Island",
        description: "Historic island prison where Nelson Mandela was held.",
        lat: -33.8067,
        lon: 18.3663,
        address: "Robben Island, Cape Town, South Africa",
        wikiTitle: "Robben_Island",
        cityName: "Cape Town",
        price: 32, // Approx. ZAR 600 for ferry and tour in 2023
    },
    {
        name: "Bo-Kaap",
        description: "Colorful neighborhood with Cape Malay culture and history.",
        lat: -33.921,
        lon: 18.4152,
        address: "Bo-Kaap, Cape Town, 8001, South Africa",
        wikiTitle: "Bo-Kaap",
        cityName: "Cape Town",
        price: 0, // Free to visit (guided tours may cost extra)[](https://www.forbes.com/sites/laurabegleybloom/2019/09/04/bucket-list-travel-the-top-50-places-in-the-world/)
    },
    {
        name: "Kirstenbosch Botanical Garden",
        description: "World-renowned garden with diverse South African flora.",
        lat: -33.9875,
        lon: 18.4327,
        address: "Rhodes Dr, Newlands, Cape Town, 7700, South Africa",
        wikiTitle: "Kirstenbosch_National_Botanical_Garden",
        cityName: "Cape Town",
        price: 11, // Approx. ZAR 210 in 2023
    },
    // Johannesburg, South Africa
    {
        name: "Apartheid Museum",
        description: "Museum chronicling South Africa’s apartheid history.",
        lat: -26.237,
        lon: 28.0093,
        address: "Northern Parkway & Gold Reef Rd, Johannesburg, 2001, South Africa",
        wikiTitle: "Apartheid_Museum",
        cityName: "Johannesburg",
        price: 8, // Approx. ZAR 150 in 2023
    },
    {
        name: "Constitution Hill",
        description: "Historic site with a prison and South Africa’s Constitutional Court.",
        lat: -26.1904,
        lon: 28.0423,
        address: "11 Kotze St, Johannesburg, 2001, South Africa",
        wikiTitle: "Constitution_Hill,_Johannesburg",
        cityName: "Johannesburg",
        price: 5, // Approx. ZAR 95 in 2023
    },
    {
        name: "Soweto",
        description: "Historic township with sites like the Hector Pieterson Museum.",
        lat: -26.2485,
        lon: 27.854,
        address: "Soweto, Johannesburg, South Africa",
        wikiTitle: "Soweto",
        cityName: "Johannesburg",
        price: 4, // Approx. ZAR 75 for museum entry in 2023
    },
    // Durban, South Africa
    {
        name: "uShaka Marine World",
        description: "Aquarium and theme park with marine exhibits and water slides.",
        lat: -29.8673,
        lon: 31.046,
        address: "1 King Shaka Ave, Durban, 4001, South Africa",
        wikiTitle: "uShaka_Marine_World",
        cityName: "Durban",
        price: 12, // Approx. ZAR 225 in 2023
    },
    {
        name: "Golden Mile",
        description: "Popular beachfront promenade with surfing and dining.",
        lat: -29.86,
        lon: 31.035,
        address: "Golden Mile, Durban, South Africa",
        wikiTitle: "Durban",
        cityName: "Durban",
        price: 0, // Public beach
    },
    {
        name: "Moses Mabhida Stadium",
        description: "Modern stadium with a sky car and bungee swing.",
        lat: -29.829,
        lon: 31.0304,
        address: "44 Isaiah Ntshangase Rd, Durban, 4001, South Africa",
        wikiTitle: "Moses_Mabhida_Stadium",
        cityName: "Durban",
        price: 4, // Approx. ZAR 75 for sky car in 2023
    },
    // Berlin, Germany
    {
        name: "Brandenburg Gate",
        description: "Iconic neoclassical monument symbolizing German unity.",
        lat: 52.5163,
        lon: 13.3777,
        address: "Pariser Platz, 10117 Berlin, Germany",
        wikiTitle: "Brandenburg_Gate",
        cityName: "Berlin",
        price: 0, // Public monument[](https://www.cnn.com/travel/euromonitor-world-top-city-destinations-2023/index.html)
    },
    {
        name: "Reichstag Building",
        description: "Historic parliament building with a glass dome offering city views.",
        lat: 52.5186,
        lon: 13.3762,
        address: "Platz der Republik 1, 11011 Berlin, Germany",
        wikiTitle: "Reichstag_building",
        cityName: "Berlin",
        price: 0, // Free entry with registration
    },
    {
        name: "Museum Island",
        description: "UNESCO-listed complex of five world-class museums.",
        lat: 52.5219,
        lon: 13.4011,
        address: "10178 Berlin, Germany",
        wikiTitle: "Museum_Island",
        cityName: "Berlin",
        price: 20, // Approx. €18 for combo ticket in 2023
    },
    // Munich, Germany
    {
        name: "Marienplatz",
        description: "Central square with the Glockenspiel and historic buildings.",
        lat: 48.1374,
        lon: 11.5755,
        address: "Marienplatz, 80331 München, Germany",
        wikiTitle: "Marienplatz",
        cityName: "Munich",
        price: 0, // Public square
    },
    {
        name: "Nymphenburg Palace",
        description: "Baroque palace with expansive gardens and royal history.",
        lat: 48.1583,
        lon: 11.5037,
        address: "Schloss Nymphenburg, 80638 München, Germany",
        wikiTitle: "Nymphenburg_Palace",
        cityName: "Munich",
        price: 13, // Approx. €12 in 2023
    },
    {
        name: "BMW Museum",
        description: "Museum showcasing BMW’s automotive history and innovation.",
        lat: 48.177,
        lon: 11.559,
        address: "Am Olympiapark 2, 80809 München, Germany",
        wikiTitle: "BMW_Museum",
        cityName: "Munich",
        price: 11, // Approx. €10 in 2023
    },
    // Hamburg, Germany
    {
        name: "Elbphilharmonie",
        description: "Modern concert hall on the Elbe River with glass architecture.",
        lat: 53.5413,
        lon: 9.9841,
        address: "Platz der Deutschen Einheit 1, 20457 Hamburg, Germany",
        wikiTitle: "Elbphilharmonie",
        cityName: "Hamburg",
        price: 9, // Approx. €8 for plaza access in 2023
    },
    {
        name: "Speicherstadt",
        description: "UNESCO-listed warehouse district with canals and museums.",
        lat: 53.5488,
        lon: 9.999,
        address: "Speicherstadt, 20457 Hamburg, Germany",
        wikiTitle: "Speicherstadt",
        cityName: "Hamburg",
        price: 0, // Free to explore (museums may charge)
    },
    {
        name: "Miniatur Wunderland",
        description: "World’s largest model railway exhibition.",
        lat: 53.5439,
        lon: 9.9892,
        address: "Kehrwieder 2-4, 20457 Hamburg, Germany",
        wikiTitle: "Miniatur_Wunderland",
        cityName: "Hamburg",
        price: 22, // Approx. €20 in 2023
    },
    // Amsterdam, Netherlands
    {
        name: "Rijksmuseum",
        description: "National museum with Dutch art and history, including Rembrandt’s works.",
        lat: 52.36,
        lon: 4.8852,
        address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
        wikiTitle: "Rijksmuseum",
        cityName: "Amsterdam",
        price: 22, // Approx. €20 in 2023[](https://www.cnn.com/travel/euromonitor-world-top-city-destinations-2023/index.html)
    },
    {
        name: "Anne Frank House",
        description: "Museum in the house where Anne Frank hid during WWII.",
        lat: 52.3752,
        lon: 4.8839,
        address: "Westermarkt 20, 1016 DK Amsterdam, Netherlands",
        wikiTitle: "Anne_Frank_House",
        cityName: "Amsterdam",
        price: 16, // Approx. €14 in 2023
    },
    {
        name: "Vondelpark",
        description: "Large urban park with ponds, paths, and open-air performances.",
        lat: 52.3581,
        lon: 4.8686,
        address: "Vondelpark, 1071 AA Amsterdam, Netherlands",
        wikiTitle: "Vondelpark",
        cityName: "Amsterdam",
        price: 0, // Free park
    },
    // Rotterdam, Netherlands
    {
        name: "Erasmus Bridge",
        description: "Iconic cable-stayed bridge known as the Swan.",
        lat: 51.909,
        lon: 4.4844,
        address: "Erasmusbrug, 3011 BN Rotterdam, Netherlands",
        wikiTitle: "Erasmus_Bridge",
        cityName: "Rotterdam",
        price: 0, // Public bridge
    },
    {
        name: "Museum Boijmans Van Beuningen",
        description: "Art museum with works by Rembrandt, Van Gogh, and Dalí.",
        lat: 51.9141,
        lon: 4.4739,
        address: "Museumpark 18-20, 3015 CX Rotterdam, Netherlands",
        wikiTitle: "Museum_Boijmans_Van_Beuningen",
        cityName: "Rotterdam",
        price: 22, // Approx. €20 in 2023
    },
    {
        name: "Markthal",
        description: "Modern market hall with food stalls and colorful ceiling art.",
        lat: 51.92,
        lon: 4.4866,
        address: "Ds. Jan Scharpstraat 298, 3011 GZ Rotterdam, Netherlands",
        wikiTitle: "Markthal",
        cityName: "Rotterdam",
        price: 0, // Free to enter (food purchases extra)
    },
    // Utrecht, Netherlands
    {
        name: "Dom Tower",
        description: "Gothic tower offering panoramic city views.",
        lat: 52.0907,
        lon: 5.1213,
        address: "Domplein 21, 3512 JC Utrecht, Netherlands",
        wikiTitle: "Dom_Tower_of_Utrecht",
        cityName: "Utrecht",
        price: 11, // Approx. €10 in 2023
    },
    {
        name: "Museum Catharijneconvent",
        description: "Museum of religious art and history in a former monastery.",
        lat: 52.0886,
        lon: 5.1236,
        address: "Lange Nieuwstraat 38, 3512 PH Utrecht, Netherlands",
        wikiTitle: "Museum_Catharijneconvent",
        cityName: "Utrecht",
        price: 16, // Approx. €14 in 2023
    },
    {
        name: "Oudegracht",
        description: "Historic canal with unique double-level wharves.",
        lat: 52.092,
        lon: 5.122,
        address: "Oudegracht, 3511 AL Utrecht, Netherlands",
        wikiTitle: "Oudegracht",
        cityName: "Utrecht",
        price: 0, // Public canal
    },
    // Lisbon, Portugal
    {
        name: "Belém Tower",
        description: "Historic fortress and UNESCO site on the Tagus River.",
        lat: 38.6916,
        lon: -9.2158,
        address: "Av. Brasília, 1400-038 Lisboa, Portugal",
        wikiTitle: "Belém_Tower",
        cityName: "Lisbon",
        price: 7, // Approx. €6 in 2023[](https://www.kiplinger.com/personal-finance/spending/cheapest-countries-to-travel-to)
    },
    {
        name: "Jerónimos Monastery",
        description: "Ornate Manueline monastery and UNESCO site.",
        lat: 38.6979,
        lon: -9.2064,
        address: "Praça do Império, 1400-206 Lisboa, Portugal",
        wikiTitle: "Jerónimos_Monastery",
        cityName: "Lisbon",
        price: 11, // Approx. €10 in 2023
    },
    {
        name: "LX Factory",
        description: "Creative hub with art galleries, shops, and restaurants.",
        lat: 38.7015,
        lon: -9.1783,
        address: "R. Rodrigues de Faria 103, 1300-501 Lisboa, Portugal",
        wikiTitle: "LX_Factory",
        cityName: "Lisbon",
        price: 0, // Public area
    },
    // Porto, Portugal
    {
        name: "Clérigos Tower",
        description: "Baroque tower with panoramic views of Porto.",
        lat: 41.1457,
        lon: -8.6143,
        address: "R. de São Filipe de Nery, 4050-546 Porto, Portugal",
        wikiTitle: "Clérigos_Tower",
        cityName: "Porto",
        price: 6, // Approx. €5 in 2023
    },
    {
        name: "Ribeira District",
        description: "Historic riverside area with colorful buildings and cafes.",
        lat: 41.1406,
        lon: -8.611,
        address: "Ribeira, 4050-513 Porto, Portugal",
        wikiTitle: "Ribeira,_Porto",
        cityName: "Porto",
        price: 0, // Public area
    },
    {
        name: "Livraria Lello",
        description: "Ornate bookstore considered one of the world’s most beautiful.",
        lat: 41.1471,
        lon: -8.6148,
        address: "R. das Carmelitas 144, 4050-161 Porto, Portugal",
        wikiTitle: "Livraria_Lello",
        cityName: "Porto",
        price: 9, // Approx. €8 in 2023
    },
    // Funchal, Portugal
    {
        name: "Funchal Cable Car",
        description: "Cable car ride with views over Funchal and the Atlantic.",
        lat: 32.6482,
        lon: -16.9055,
        address: "Av. do Mar, 9000-900 Funchal, Portugal",
        wikiTitle: "Funchal_Cable_Car",
        cityName: "Funchal",
        price: 18, // Approx. €16 in 2023
    },
    {
        name: "Monte Palace Tropical Garden",
        description: "Lush garden with exotic plants and a museum.",
        lat: 32.6753,
        lon: -16.9042,
        address: "Caminho do Monte 174, 9050-288 Funchal, Portugal",
        wikiTitle: "Monte_Palace_Tropical_Garden",
        cityName: "Funchal",
        price: 14, // Approx. €12.50 in 2023
    },
    {
        name: "Mercado dos Lavradores",
        description: "Vibrant market with local produce and flowers.",
        lat: 32.6487,
        lon: -16.9084,
        address: "R. Dr. Fernão de Ornelas, 9050-021 Funchal, Portugal",
        wikiTitle: "Funchal",
        cityName: "Funchal",
        price: 0, // Free to enter
    },
    // Toronto, Canada
    {
        name: "CN Tower",
        description: "Iconic tower with observation decks and a revolving restaurant.",
        lat: 43.6426,
        lon: -79.3871,
        address: "290 Bremner Blvd, Toronto, ON M5V 3M9, Canada",
        wikiTitle: "CN_Tower",
        cityName: "Toronto",
        price: 30, // Approx. CAD 40 in 2023
    },
    {
        name: "Royal Ontario Museum",
        description: "Museum with extensive collections of art, culture, and natural history.",
        lat: 43.6677,
        lon: -79.3948,
        address: "100 Queen’s Park, Toronto, ON M5S 2C6, Canada",
        wikiTitle: "Royal_Ontario_Museum",
        cityName: "Toronto",
        price: 20, // Approx. CAD 26 in 2023
    },
    {
        name: "Distillery District",
        description: "Historic pedestrian area with galleries, shops, and restaurants.",
        lat: 43.6503,
        lon: -79.3593,
        address: "55 Mill St, Toronto, ON M5A 3C4, Canada",
        wikiTitle: "Distillery_District",
        cityName: "Toronto",
        price: 0, // Public area
    },
    // Vancouver, Canada
    {
        name: "Stanley Park",
        description: "Large urban park with trails, beaches, and an aquarium.",
        lat: 49.3043,
        lon: -123.1443,
        address: "Stanley Park, Vancouver, BC V6G 1Z4, Canada",
        wikiTitle: "Stanley_Park",
        cityName: "Vancouver",
        price: 0, // Free park (aquarium extra)
    },
    {
        name: "Capilano Suspension Bridge",
        description: "Suspension bridge over a river with forest trails.",
        lat: 49.3428,
        lon: -123.1146,
        address: "3735 Capilano Rd, North Vancouver, BC V7R 4J1, Canada",
        wikiTitle: "Capilano_Suspension_Bridge",
        cityName: "Vancouver",
        price: 45, // Approx. CAD 60 in 2023
    },
    {
        name: "Granville Island",
        description: "Vibrant market and arts hub with shops and theaters.",
        lat: 49.2725,
        lon: -123.1349,
        address: "1669 Johnston St, Vancouver, BC V6H 3R9, Canada",
        wikiTitle: "Granville_Island",
        cityName: "Vancouver",
        price: 0, // Public area
    },
    // Montreal, Canada
    {
        name: "Old Montreal",
        description: "Historic district with cobblestone streets and colonial architecture.",
        lat: 45.5078,
        lon: -73.5545,
        address: "Vieux-Montréal, Montreal, QC, Canada",
        wikiTitle: "Old_Montreal",
        cityName: "Montreal",
        price: 0, // Public area
    },
    {
        name: "Montreal Museum of Fine Arts",
        description: "Museum with Canadian and international art collections.",
        lat: 45.4987,
        lon: -73.5793,
        address: "1380 Sherbrooke St W, Montreal, QC H3G 1J5, Canada",
        wikiTitle: "Montreal_Museum_of_Fine_Arts",
        cityName: "Montreal",
        price: 18, // Approx. CAD 24 in 2023
    },
    {
        name: "Mount Royal",
        description: "Urban park with trails and city views designed by Frederick Law Olmsted.",
        lat: 45.5017,
        lon: -73.5873,
        address: "1260 Remembrance Rd, Montreal, QC H3H 1A2, Canada",
        wikiTitle: "Mount_Royal",
        cityName: "Montreal",
        price: 0, // Free park
    },
    // New Delhi, India
    {
        name: "India Gate",
        description: "War memorial arch in the heart of New Delhi.",
        lat: 28.6129,
        lon: 77.2295,
        address: "Rajpath, New Delhi, Delhi 110001, India",
        wikiTitle: "India_Gate",
        cityName: "New Delhi",
        price: 0, // Public monument
    },
    {
        name: "Qutub Minar",
        description: "UNESCO-listed 12th-century minaret and historic complex.",
        lat: 28.5245,
        lon: 77.1853,
        address: "Mehrauli, New Delhi, Delhi 110030, India",
        wikiTitle: "Qutub_Minar",
        cityName: "New Delhi",
        price: 7, // Approx. INR 600 in 2023
    },
    {
        name: "Humayun’s Tomb",
        description: "Mughal emperor’s tomb and UNESCO site with stunning gardens.",
        lat: 28.5933,
        lon: 77.2507,
        address: "Mathura Rd, New Delhi, Delhi 110013, India",
        wikiTitle: "Humayun’s_Tomb",
        cityName: "New Delhi",
        price: 7, // Approx. INR 600 in 2023
    },
    // Mumbai, India
    {
        name: "Gateway of India",
        description: "Iconic arch monument by the Arabian Sea.",
        lat: 18.9217,
        lon: 72.8347,
        address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
        wikiTitle: "Gateway_of_India",
        cityName: "Mumbai",
        price: 0, // Public monument
    },
    {
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        description: "Museum with Indian art, history, and archaeology exhibits.",
        lat: 18.9267,
        lon: 72.8325,
        address: "159-161, Mahatma Gandhi Road, Mumbai, Maharashtra 400023, India",
        wikiTitle: "Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya",
        cityName: "Mumbai",
        price: 6, // Approx. INR 500 in 2023
    },
    {
        name: "Marine Drive",
        description: "Scenic promenade along the Arabian Sea, known as the Queen’s Necklace.",
        lat: 18.944,
        lon: 72.8237,
        address: "Marine Drive, Mumbai, Maharashtra 400020, India",
        wikiTitle: "Marine_Drive,_Mumbai",
        cityName: "Mumbai",
        price: 0, // Public promenade
    },
    // Jaipur, India
    {
        name: "Amber Fort",
        description: "Majestic hilltop fort with intricate architecture.",
        lat: 26.9855,
        lon: 75.8513,
        address: "Devisinghpura, Amer, Jaipur, Rajasthan 302001, India",
        wikiTitle: "Amber_Fort",
        cityName: "Jaipur",
        price: 6, // Approx. INR 500 in 2023
    },
    {
        name: "City Palace",
        description: "Royal palace complex with museums and courtyards.",
        lat: 26.9255,
        lon: 75.8236,
        address: "Jaleb Chowk, Jaipur, Rajasthan 302002, India",
        wikiTitle: "City_Palace,_Jaipur",
        cityName: "Jaipur",
        price: 8, // Approx. INR 700 in 2023
    },
    {
        name: "Hawa Mahal",
        description: "Iconic pink palace with honeycomb-like windows.",
        lat: 26.9239,
        lon: 75.8267,
        address: "Hawa Mahal Rd, Jaipur, Rajasthan 302002, India",
        wikiTitle: "Hawa_Mahal",
        cityName: "Jaipur",
        price: 2, // Approx. INR 200 in 2023
    },
    // Zurich, Switzerland
    {
        name: "Grossmünster",
        description: "Romanesque church with twin towers and city views.",
        lat: 47.3701,
        lon: 8.5438,
        address: "Zwinglipl. 7, 8001 Zürich, Switzerland",
        wikiTitle: "Grossmünster",
        cityName: "Zurich",
        price: 5, // Approx. CHF 5 for tower climb in 2023
    },
    {
        name: "Lake Zurich",
        description: "Scenic lake with promenade and boat tours.",
        lat: 47.3645,
        lon: 8.5447,
        address: "Lake Zurich, 8001 Zürich, Switzerland",
        wikiTitle: "Lake_Zurich",
        cityName: "Zurich",
        price: 0, // Public area (boat tours extra)
    },
    {
        name: "Kunsthaus Zürich",
        description: "Art museum with works by Munch, Picasso, and Swiss artists.",
        lat: 47.3706,
        lon: 8.5481,
        address: "Heimpl. 1, 8001 Zürich, Switzerland",
        wikiTitle: "Kunsthaus_Zürich",
        cityName: "Zurich",
        price: 25, // Approx. CHF 23 in 2023
    },
    // Geneva, Switzerland
    {
        name: "Jet d’Eau",
        description: "Iconic water fountain on Lake Geneva.",
        lat: 46.2072,
        lon: 6.156,
        address: "Quai Gustave-Ador, 1207 Genève, Switzerland",
        wikiTitle: "Jet_d’Eau",
        cityName: "Geneva",
        price: 0, // Public monument
    },
    {
        name: "Palais des Nations",
        description: "UN headquarters with guided tours of global diplomacy.",
        lat: 46.2267,
        lon: 6.1406,
        address: "Av. de la Paix 14, 1211 Genève, Switzerland",
        wikiTitle: "Palais_des_Nations",
        cityName: "Geneva",
        price: 17, // Approx. CHF 15 in 2023
    },
    {
        name: "CERN",
        description: "Science center with exhibits on particle physics.",
        lat: 46.233,
        lon: 6.0557,
        address: "Route de Meyrin, 1217 Meyrin, Switzerland",
        wikiTitle: "CERN",
        cityName: "Geneva",
        price: 0, // Free tours with registration
    },
    // Lucerne, Switzerland
    {
        name: "Chapel Bridge",
        description: "Historic wooden bridge with painted panels.",
        lat: 47.0516,
        lon: 8.3077,
        address: "Kapellbrücke, 6002 Luzern, Switzerland",
        wikiTitle: "Chapel_Bridge",
        cityName: "Lucerne",
        price: 0, // Public bridge
    },
    {
        name: "Lion Monument",
        description: "Moving sculpture commemorating Swiss Guards.",
        lat: 47.0581,
        lon: 8.3124,
        address: "Denkmalstrasse 4, 6006 Luzern, Switzerland",
        wikiTitle: "Lion_Monument",
        cityName: "Lucerne",
        price: 0, // Public monument
    },
    {
        name: "Swiss Museum of Transport",
        description: "Interactive museum on transportation history.",
        lat: 47.0526,
        lon: 8.3363,
        address: "Lidostrasse 5, 6006 Luzern, Switzerland",
        wikiTitle: "Swiss_Museum_of_Transport",
        cityName: "Lucerne",
        price: 35, // Approx. CHF 32 in 2023
    },
    // Beijing, China
    {
        name: "Forbidden City",
        description: "Imperial palace complex and UNESCO site.",
        lat: 39.9151,
        lon: 116.3972,
        address: "4 Jingshan Front St, Beijing, China",
        wikiTitle: "Forbidden_City",
        cityName: "Beijing",
        price: 9, // Approx. CNY 60 in 2023[](https://www.cnn.com/travel/euromonitor-world-top-city-destinations-2023/index.html)
    },
    {
        name: "Tiananmen Square",
        description: "Historic public square with monuments and museums.",
        lat: 39.9055,
        lon: 116.3979,
        address: "Dongcheng, Beijing, China",
        wikiTitle: "Tiananmen_Square",
        cityName: "Beijing",
        price: 0, // Public square
    },
    {
        name: "Temple of Heaven",
        description: "Ancient complex for imperial sacrifices, UNESCO site.",
        lat: 39.8822,
        lon: 116.4066,
        address: "1 Tiantan E Rd, Beijing, China",
        wikiTitle: "Temple_of_Heaven",
        cityName: "Beijing",
        price: 5, // Approx. CNY 34 in 2023
    },
    // Shanghai, China
    {
        name: "The Bund",
        description: "Waterfront promenade with colonial-era buildings.",
        lat: 31.24,
        lon: 121.4903,
        address: "Zhongshan East 1st Rd, Shanghai, China",
        wikiTitle: "The_Bund",
        cityName: "Shanghai",
        price: 0, // Public area
    },
    {
        name: "Shanghai Museum",
        description: "Museum with ancient Chinese art and artifacts.",
        lat: 31.2304,
        lon: 121.4705,
        address: "201 Renmin Ave, Shanghai, China",
        wikiTitle: "Shanghai_Museum",
        cityName: "Shanghai",
        price: 0, // Free entry
    },
    {
        name: "Oriental Pearl Tower",
        description: "Iconic tower with observation decks and city views.",
        lat: 31.2418,
        lon: 121.4948,
        address: "1 Century Ave, Pudong, Shanghai, China",
        wikiTitle: "Oriental_Pearl_Tower",
        cityName: "Shanghai",
        price: 24, // Approx. CNY 160 in 2023
    },
    // Xi'an, China
    {
        name: "Terracotta Army",
        description: "Ancient life-sized warrior statues, UNESCO site.",
        lat: 34.3843,
        lon: 109.2782,
        address: "Lintong District, Xi'an, Shaanxi, China",
        wikiTitle: "Terracotta_Army",
        cityName: "Xi'an",
        price: 18, // Approx. CNY 120 in 2023
    },
    {
        name: "Xi'an City Wall",
        description: "Well-preserved ancient city wall with bike rentals.",
        lat: 34.2583,
        lon: 108.9465,
        address: "Beilin District, Xi'an, Shaanxi, China",
        wikiTitle: "Xi’an_City_Wall",
        cityName: "Xi'an",
        price: 8, // Approx. CNY 54 in 2023
    },
    {
        name: "Muslim Quarter",
        description: "Vibrant street market with food stalls and cultural sites.",
        lat: 34.2647,
        lon: 108.95,
        address: "Huimin St, Xi'an, Shaanxi, China",
        wikiTitle: "Muslim_Quarter,_Xi’an",
        cityName: "Xi'an",
        price: 0, // Public area
    },
    // Bali, Indonesia
    {
        name: "Uluwatu Temple",
        description: "Clifftop Hindu temple with ocean views and Kecak dance.",
        lat: -8.8291,
        lon: 115.0845,
        address: "Pecatu, South Kuta, Bali, Indonesia",
        wikiTitle: "Uluwatu_Temple",
        cityName: "Bali",
        price: 3, // Approx. IDR 50,000 in 2023
    },
    {
        name: "Tanah Lot Temple",
        description: "Seafront temple with stunning sunset views.",
        lat: -8.6212,
        lon: 115.0868,
        address: "Beraban, Kediri, Tabanan, Bali, Indonesia",
        wikiTitle: "Tanah_Lot",
        cityName: "Bali",
        price: 4, // Approx. IDR 60,000 in 2023
    },
    {
        name: "Ubud Monkey Forest",
        description: "Sacred forest with temples and wild monkeys.",
        lat: -8.5193,
        lon: 115.2606,
        address: "Jalan Monkey Forest, Ubud, Bali, Indonesia",
        wikiTitle: "Ubud_Monkey_Forest",
        cityName: "Bali",
        price: 6, // Approx. IDR 80,000 in 2023
    },
    // Jakarta, Indonesia
    {
        name: "National Monument (Monas)",
        description: "Iconic tower symbolizing Indonesian independence.",
        lat: -6.1751,
        lon: 106.8272,
        address: "Jl. Silang Monas, Jakarta Pusat, Indonesia",
        wikiTitle: "National_Monument_(Indonesia)",
        cityName: "Jakarta",
        price: 1, // Approx. IDR 20,000 in 2023
    },
    {
        name: "Istiqlal Mosque",
        description: "Largest mosque in Southeast Asia, open to visitors.",
        lat: -6.1702,
        lon: 106.8314,
        address: "Jl. Taman Wijaya Kusuma, Jakarta Pusat, Indonesia",
        wikiTitle: "Istiqlal_Mosque,_Jakarta",
        cityName: "Jakarta",
        price: 0, // Free entry
    },
    {
        name: "Old Town (Kota Tua)",
        description: "Historic colonial area with museums and cafes.",
        lat: -6.1352,
        lon: 106.8135,
        address: "Kota Tua, Jakarta Barat, Indonesia",
        wikiTitle: "Kota_Tua_Jakarta",
        cityName: "Jakarta",
        price: 0, // Public area (museums may charge)
    },
    // Yogyakarta, Indonesia
    {
        name: "Borobudur Temple",
        description: "9th-century Buddhist temple and UNESCO site.",
        lat: -7.6079,
        lon: 110.2037,
        address: "Borobudur, Magelang, Yogyakarta, Indonesia",
        wikiTitle: "Borobudur",
        cityName: "Yogyakarta",
        price: 25, // Approx. IDR 375,000 in 2023
    },
    {
        name: "Prambanan Temple",
        description: "Hindu temple complex with intricate carvings, UNESCO site.",
        lat: -7.752,
        lon: 110.4915,
        address: "Bokoharjo, Prambanan, Yogyakarta, Indonesia",
        wikiTitle: "Prambanan",
        cityName: "Yogyakarta",
        price: 25, // Approx. IDR 375,000 in 2023
    },
    {
        name: "Malioboro Street",
        description: "Vibrant shopping street with local crafts and food.",
        lat: -7.7931,
        lon: 110.3658,
        address: "Jl. Malioboro, Yogyakarta, Indonesia",
        wikiTitle: "Malioboro_Street",
        cityName: "Yogyakarta",
        price: 0, // Public street
    },
    // Seoul, South Korea
    {
        name: "Gyeongbokgung Palace",
        description: "Historic Joseon dynasty palace with daily ceremonies.",
        lat: 37.5759,
        lon: 126.9751,
        address: "161 Sajik-ro, Jongno-gu, Seoul, South Korea",
        wikiTitle: "Gyeongbokgung",
        cityName: "Seoul",
        price: 3, // Approx. KRW 3,000 in 2023
    },
    {
        name: "Bukchon Hanok Village",
        description: "Traditional village with preserved Korean houses.",
        lat: 37.5824,
        lon: 126.9831,
        address: "Bukchon-ro, Jongno-gu, Seoul, South Korea",
        wikiTitle: "Bukchon_Hanok_Village",
        cityName: "Seoul",
        price: 0, // Public area
    },
    {
        name: "N Seoul Tower",
        description: "Observation tower with panoramic city views.",
        lat: 37.5512,
        lon: 126.9882,
        address: "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
        wikiTitle: "N_Seoul_Tower",
        cityName: "Seoul",
        price: 12, // Approx. KRW 16,000 in 2023
    },
    // Busan, South Korea
    {
        name: "Haeundae Beach",
        description: "Popular urban beach with festivals and nightlife.",
        lat: 35.1587,
        lon: 129.1604,
        address: "Haeundae Beach, Haeundae-gu, Busan, South Korea",
        wikiTitle: "Haeundae_Beach",
        cityName: "Busan",
        price: 0, // Public beach
    },
    {
        name: "Gamcheon Culture Village",
        description: "Colorful hillside village with art installations.",
        lat: 35.0971,
        lon: 129.01,
        address: "Gamcheon-dong, Saha-gu, Busan, South Korea",
        wikiTitle: "Gamcheon_Culture_Village",
        cityName: "Busan",
        price: 0, // Public area
    },
    {
        name: "Beomeosa Temple",
        description: "Historic Buddhist temple in a serene mountain setting.",
        lat: 35.2831,
        lon: 129.0908,
        address: "250 Beomeosa-ro, Geumjeong-gu, Busan, South Korea",
        wikiTitle: "Beomeosa",
        cityName: "Busan",
        price: 0, // Free entry
    },
    // Jeju, South Korea
    {
        name: "Jeju Loveland",
        description: "Unique park with erotic sculptures and exhibits.",
        lat: 33.4512,
        lon: 126.4897,
        address: "680-26 Yeon-dong, Jeju-si, Jeju-do, South Korea",
        wikiTitle: "Jeju_Loveland",
        cityName: "Jeju",
        price: 9, // Approx. KRW 12,000 in 2023
    },
    {
        name: "Seongsan Ilchulbong",
        description: "Volcanic tuff cone with hiking trails and sunrise views.",
        lat: 33.4622,
        lon: 126.9365,
        address: "Seongsan-ri, Seogwipo-si, Jeju-do, South Korea",
        wikiTitle: "Seongsan_Ilchulbong",
        cityName: "Jeju",
        price: 2, // Approx. KRW 2,000 in 2023
    },
    {
        name: "Hallasan National Park",
        description: "Volcanic mountain with hiking trails and crater lakes.",
        lat: 33.3617,
        lon: 126.5292,
        address: "Hallasan, Jeju-si, Jeju-do, South Korea",
        wikiTitle: "Hallasan",
        cityName: "Jeju",
        price: 0, // Free park
    },
    // Hanoi, Vietnam
    {
        name: "Hoan Kiem Lake",
        description: "Scenic lake with Ngoc Son Temple and Turtle Tower.",
        lat: 21.0288,
        lon: 105.8522,
        address: "Hoàn Kiếm, Hanoi, Vietnam",
        wikiTitle: "Hoan_Kiem_Lake",
        cityName: "Hanoi",
        price: 0, // Public area (temple entry ~VND 30,000)
    },
    {
        name: "Temple of Literature",
        description: "Historic Confucian temple and Vietnam’s first university.",
        lat: 21.0288,
        lon: 105.8352,
        address: "58 Quốc Tử Giám, Hanoi, Vietnam",
        wikiTitle: "Temple_of_Literature,_Hanoi",
        cityName: "Hanoi",
        price: 1, // Approx. VND 30,000 in 2023
    },
    {
        name: "Ho Chi Minh Mausoleum",
        description: "Memorial housing the preserved body of Ho Chi Minh.",
        lat: 21.0367,
        lon: 105.8347,
        address: "2 Hùng Vương, Ba Đình, Hanoi, Vietnam",
        wikiTitle: "Ho_Chi_Minh_Mausoleum",
        cityName: "Hanoi",
        price: 0, // Free entry
    },
    // Ho Chi Minh City, Vietnam
    {
        name: "Notre-Dame Basilica",
        description: "French-built Catholic basilica in central Saigon.",
        lat: 10.7798,
        lon: 106.699,
        address: "1 Công xã Paris, Bến Nghé, Quận 1, Ho Chi Minh City, Vietnam",
        wikiTitle: "Notre-Dame_Basilica,_Ho_Chi_Minh_City",
        cityName: "Ho Chi Minh City",
        price: 0, // Free entry
    },
    {
        name: "War Remnants Museum",
        description: "Museum documenting the Vietnam War’s history.",
        lat: 10.7794,
        lon: 106.6953,
        address: "28 Võ Văn Tần, Quận 3, Ho Chi Minh City, Vietnam",
        wikiTitle: "War_Remnants_Museum",
        cityName: "Ho Chi Minh City",
        price: 2, // Approx. VND 40,000 in 2023
    },
    {
        name: "Ben Thanh Market",
        description: "Bustling market with food, crafts, and souvenirs.",
        lat: 10.7721,
        lon: 106.6981,
        address: "Lê Lợi, Bến Thành, Quận 1, Ho Chi Minh City, Vietnam",
        wikiTitle: "Bến_Thành_Market",
        cityName: "Ho Chi Minh City",
        price: 0, // Public market
    },
    // Hoi An, Vietnam
    {
        name: "Hoi An Ancient Town",
        description: "UNESCO-listed historic town with lantern-lit streets.",
        lat: 15.8801,
        lon: 108.338,
        address: "Hội An, Quảng Nam, Vietnam",
        wikiTitle: "Hội_An",
        cityName: "Hoi An",
        price: 5, // Approx. VND 120,000 for ticket in 2023
    },
    {
        name: "Japanese Covered Bridge",
        description: "Iconic 18th-century bridge with a small temple.",
        lat: 15.8774,
        lon: 108.326,
        address: "Nguyen Thi Minh Khai, Hội An, Vietnam",
        wikiTitle: "Japanese_Covered_Bridge",
        cityName: "Hoi An",
        price: 0, // Included in Ancient Town ticket
    },
    {
        name: "An Bang Beach",
        description: "Relaxed beach with restaurants and water activities.",
        lat: 15.9167,
        lon: 108.339,
        address: "An Bàng, Hội An, Quảng Nam, Vietnam",
        wikiTitle: "Hội_An",
        cityName: "Hoi An",
        price: 0, // Public beach
    },
    // Marrakech, Morocco
    {
        name: "Jemaa el-Fnaa",
        description: "Vibrant central square with markets and street performers.",
        lat: 31.6258,
        lon: -7.9892,
        address: "Jemaa el-Fnaa, Marrakech 40000, Morocco",
        wikiTitle: "Jemaa_el-Fnaa",
        cityName: "Marrakech",
        price: 0, // Public square[](https://www.bemytravelmuse.com/the-cheapest-destinations-to-travel-to/)
    },
    {
        name: "Bahia Palace",
        description: "19th-century palace with ornate architecture and gardens.",
        lat: 31.6218,
        lon: -7.9823,
        address: "Avenue Imam El Ghazali, Marrakech, Morocco",
        wikiTitle: "Bahia_Palace",
        cityName: "Marrakech",
        price: 7, // Approx. MAD 70 in 2023
    },
    {
        name: "Majorelle Garden",
        description: "Botanical garden with vibrant blue structures and cacti.",
        lat: 31.6419,
        lon: -8.0003,
        address: "Rue Yves Saint Laurent, Marrakech 40090, Morocco",
        wikiTitle: "Jardin_Majorelle",
        cityName: "Marrakech",
        price: 15, // Approx. MAD 150 in 2023
    },
    // Casablanca, Morocco
    {
        name: "Hassan II Mosque",
        description: "Grand mosque with a minaret and oceanfront location.",
        lat: 33.6082,
        lon: -7.6327,
        address: "Blvd de la Corniche, Casablanca 20050, Morocco",
        wikiTitle: "Hassan_II_Mosque",
        cityName: "Casablanca",
        price: 13, // Approx. MAD 130 in 2023
    },
    {
        name: "Old Medina",
        description: "Historic walled city with markets and traditional architecture.",
        lat: 33.6001,
        lon: -7.6198,
        address: "Casablanca 20250, Morocco",
        wikiTitle: "Casablanca",
        cityName: "Casablanca",
        price: 0, // Public area
    },
    {
        name: "Corniche Ain Diab",
        description: "Seaside promenade with beaches and cafes.",
        lat: 33.5951,
        lon: -7.6764,
        address: "Corniche Ain Diab, Casablanca, Morocco",
        wikiTitle: "Casablanca",
        cityName: "Casablanca",
        price: 0, // Public promenade
    },
    // Fez, Morocco
    {
        name: "Medina of Fez",
        description: "UNESCO-listed medieval city with souks and historic sites.",
        lat: 34.0585,
        lon: -4.9739,
        address: "Fes el Bali, Fez, Morocco",
        wikiTitle: "Fes_el_Bali",
        cityName: "Fez",
        price: 0, // Public area
    },
    {
        name: "Al-Attarine Madrasa",
        description: "14th-century Islamic school with intricate tilework.",
        lat: 34.0649,
        lon: -4.974,
        address: "Fes el Bali, Fez, Morocco",
        wikiTitle: "Al-Attarine_Madrasa",
        cityName: "Fez",
        price: 2, // Approx. MAD 20 in 2023
    },
    {
        name: "Chouara Tannery",
        description: "Historic leather tannery with colorful dye pits.",
        lat: 34.0661,
        lon: -4.9714,
        address: "Fes el Bali, Fez, Morocco",
        wikiTitle: "Chouara_Tannery",
        cityName: "Fez",
        price: 0, // Free to view from terraces
    },
    // Dubrovnik, Croatia
    {
        name: "Dubrovnik City Walls",
        description: "Historic fortifications with Adriatic Sea views.",
        lat: 42.6419,
        lon: 18.1082,
        address: "Old Town, 20000 Dubrovnik, Croatia",
        wikiTitle: "Walls_of_Dubrovnik",
        cityName: "Dubrovnik",
        price: 30, // Approx. HRK 200 in 2023
    },
    {
        name: "Old Town Dubrovnik",
        description: "UNESCO-listed medieval town with historic streets.",
        lat: 42.6407,
        lon: 18.1105,
        address: "20000 Dubrovnik, Croatia",
        wikiTitle: "Dubrovnik",
        cityName: "Dubrovnik",
        price: 0, // Public area
    },
    {
        name: "Fort Lovrijenac",
        description: "Clifftop fortress with Game of Thrones fame.",
        lat: 42.6408,
        lon: 18.1045,
        address: "Ul. od Tabakarije 29, 20000 Dubrovnik, Croatia",
        wikiTitle: "Fort_Lovrijenac",
        cityName: "Dubrovnik",
        price: 15, // Approx. HRK 100 in 2023
    },
    // Split, Croatia
    {
        name: "Diocletian’s Palace",
        description: "Roman palace complex and UNESCO site.",
        lat: 43.5081,
        lon: 16.4402,
        address: "Dioklecijanova 1, 21000 Split, Croatia",
        wikiTitle: "Diocletian’s_Palace",
        cityName: "Split",
        price: 6, // Approx. HRK 40 for substructures in 2023
    },
    {
        name: "Marjan Hill",
        description: "Forested hill with trails and city views.",
        lat: 43.509,
        lon: 16.4295,
        address: "Marjan, 21000 Split, Croatia",
        wikiTitle: "Marjan,_Split",
        cityName: "Split",
        price: 0, // Free park
    },
    {
        name: "Riva Promenade",
        description: "Seaside walkway with cafes and palm trees.",
        lat: 43.5078,
        lon: 16.4396,
        address: "Obala Hrvatskog narodnog preporoda, 21000 Split, Croatia",
        wikiTitle: "Split,_Croatia",
        cityName: "Split",
        price: 0, // Public promenade
    },
    // Zagreb, Croatia
    {
        name: "Zagreb Cathedral",
        description: "Gothic cathedral and city landmark.",
        lat: 45.8144,
        lon: 15.9799,
        address: "Kaptol 31, 10000 Zagreb, Croatia",
        wikiTitle: "Zagreb_Cathedral",
        cityName: "Zagreb",
        price: 0, // Free entry
    },
    {
        name: "Museum of Broken Relationships",
        description: "Unique museum with artifacts from failed romances.",
        lat: 45.815,
        lon: 15.9736,
        address: "Ćirilometodska 2, 10000 Zagreb, Croatia",
        wikiTitle: "Museum_of_Broken_Relationships",
        cityName: "Zagreb",
        price: 7, // Approx. HRK 50 in 2023
    },
    {
        name: "Dolac Market",
        description: "Vibrant open-air market with local produce.",
        lat: 45.8141,
        lon: 15.9775,
        address: "Dolac 9, 10000 Zagreb, Croatia",
        wikiTitle: "Dolac_Market",
        cityName: "Zagreb",
        price: 0, // Public market
    },
    // Prague, Czech Republic
    {
        name: "Prague Castle",
        description: "Historic castle complex with St. Vitus Cathedral.",
        lat: 50.0909,
        lon: 14.4005,
        address: "119 08 Prague 1, Czech Republic",
        wikiTitle: "Prague_Castle",
        cityName: "Prague",
        price: 18, // Approx. CZK 400 in 2023
    },
    {
        name: "Charles Bridge",
        description: "Iconic 14th-century bridge with statues and views.",
        lat: 50.0865,
        lon: 14.4119,
        address: "Karlův most, 110 00 Prague, Czech Republic",
        wikiTitle: "Charles_Bridge",
        cityName: "Prague",
        price: 0, // Public bridge
    },
    {
        name: "Old Town Square",
        description: "Historic square with the Astronomical Clock.",
        lat: 50.0875,
        lon: 14.4213,
        address: "Staroměstské nám., 110 00 Prague, Czech Republic",
        wikiTitle: "Old_Town_Square,_Prague",
        cityName: "Prague",
        price: 0, // Public square
    },
    // Brno, Czech Republic
    {
        name: "Špilberk Castle",
        description: "Hilltop castle with a museum and city views.",
        lat: 49.1947,
        lon: 16.5993,
        address: "Špilberk 210/1, 602 00 Brno, Czech Republic",
        wikiTitle: "Špilberk_Castle",
        cityName: "Brno",
        price: 8, // Approx. CZK 180 in 2023
    },
    {
        name: "Cathedral of St. Peter and Paul",
        description: "Gothic cathedral with twin spires.",
        lat: 49.191,
        lon: 16.6078,
        address: "Petrov 9, 602 00 Brno, Czech Republic",
        wikiTitle: "Cathedral_of_St._Peter_and_Paul,_Brno",
        cityName: "Brno",
        price: 0, // Free entry
    },
    {
        name: "Villa Tugendhat",
        description: "UNESCO-listed modernist villa by Mies van der Rohe.",
        lat: 49.2072,
        lon: 16.6159,
        address: "Černopolní 45, 613 00 Brno, Czech Republic",
        wikiTitle: "Villa_Tugendhat",
        cityName: "Brno",
        price: 18, // Approx. CZK 400 in 2023
    },
    // Český Krumlov, Czech Republic
    {
        name: "Český Krumlov Castle",
        description: "Medieval castle with a Baroque theater, UNESCO site.",
        lat: 48.8127,
        lon: 14.3152,
        address: "Zámek 59, 381 01 Český Krumlov, Czech Republic",
        wikiTitle: "Český_Krumlov_Castle",
        cityName: "Český Krumlov",
        price: 12, // Approx. CZK 270 in 2023
    },
    {
        name: "Old Town Český Krumlov",
        description: "UNESCO-listed historic town with cobblestone streets.",
        lat: 48.811,
        lon: 14.315,
        address: "381 01 Český Krumlov, Czech Republic",
        wikiTitle: "Český_Krumlov",
        cityName: "Český Krumlov",
        price: 0, // Public area
    },
    {
        name: "Egon Schiele Art Centrum",
        description: "Museum dedicated to the Austrian painter Egon Schiele.",
        lat: 48.8105,
        lon: 14.3158,
        address: "Široká 71, 381 01 Český Krumlov, Czech Republic",
        wikiTitle: "Egon_Schiele_Art_Centrum",
        cityName: "Český Krumlov",
        price: 8, // Approx. CZK 180 in 2023
    },
    // Auckland, New Zealand
    {
        name: "Sky Tower",
        description: "Tallest structure in the Southern Hemisphere with views.",
        lat: -36.8485,
        lon: 174.7622,
        address: "Victoria St W, Auckland 1010, New Zealand",
        wikiTitle: "Sky_Tower_(Auckland)",
        cityName: "Auckland",
        price: 22, // Approx. NZD 40 in 2023
    },
    {
        name: "Auckland War Memorial Museum",
        description: "Museum with Māori artifacts and war history.",
        lat: -36.8601,
        lon: 174.7777,
        address: "The Domain, Parnell, Auckland 1010, New Zealand",
        wikiTitle: "Auckland_War_Memorial_Museum",
        cityName: "Auckland",
        price: 15, // Approx. NZD 28 in 2023
    },
    {
        name: "Waiheke Island",
        description: "Island with vineyards, beaches, and hiking trails.",
        lat: -36.7928,
        lon: 175.0087,
        address: "Waiheke Island, Auckland, New Zealand",
        wikiTitle: "Waiheke_Island",
        cityName: "Auckland",
        price: 0, // Public area (ferry cost extra)
    },
    // Wellington, New Zealand
    {
        name: "Te Papa Museum",
        description: "National museum with Māori culture and natural history exhibits.",
        lat: -41.2904,
        lon: 174.7821,
        address: "55 Cable St, Wellington 6011, New Zealand",
        wikiTitle: "Museum_of_New_Zealand_Te_Papa_Tongarewa",
        cityName: "Wellington",
        price: 0, // Free entry
    },
    {
        name: "Wellington Cable Car",
        description: "Historic funicular with city and harbor views.",
        lat: -41.2845,
        lon: 174.7752,
        address: "280 Lambton Quay, Wellington 6011, New Zealand",
        wikiTitle: "Wellington_Cable_Car",
        cityName: "Wellington",
        price: 5, // Approx. NZD 9 in 2023
    },
    {
        name: "Zealandia Ecosanctuary",
        description: "Wildlife sanctuary with native species and guided tours.",
        lat: -41.2983,
        lon: 174.7518,
        address: "53 Waiapu Rd, Karori, Wellington 6012, New Zealand",
        wikiTitle: "Zealandia_(wildlife_sanctuary)",
        cityName: "Wellington",
        price: 15, // Approx. NZD 28 in 2023
    },
    // Queenstown, New Zealand
    {
        name: "Lake Wakatipu",
        description: "Scenic glacial lake with steamship cruises.",
        lat: -45.0351,
        lon: 168.6616,
        address: "Lake Wakatipu, Queenstown, New Zealand",
        wikiTitle: "Lake_Wakatipu",
        cityName: "Queenstown",
        price: 0, // Public lake (cruises extra)
    },
    {
        name: "Skyline Gondola",
        description: "Cable car with views and luge rides.",
        lat: -45.0316,
        lon: 168.6576,
        address: "Brecon St, Queenstown 9300, New Zealand",
        wikiTitle: "Skyline_Gondola,_Queenstown",
        cityName: "Queenstown",
        price: 30, // Approx. NZD 55 in 2023
    },
    {
        name: "Milford Sound",
        description: "Fjord with dramatic cliffs and marine life, accessible by tour.",
        lat: -44.6713,
        lon: 167.9252,
        address: "Milford Sound, Southland 9679, New Zealand",
        wikiTitle: "Milford_Sound",
        cityName: "Queenstown",
        price: 70, // Approx. NZD 130 for cruise in 2023
    },
    // Lima, Peru
    {
        name: "Plaza de Armas",
        description: "Historic main square with the Government Palace.",
        lat: -12.0453,
        lon: -77.0305,
        address: "Plaza Mayor, Lima 15001, Peru",
        wikiTitle: "Plaza_Mayor,_Lima",
        cityName: "Lima",
        price: 0, // Public square
    },
    {
        name: "Larco Museum",
        description: "Museum with pre-Columbian artifacts and erotic pottery.",
        lat: -12.0723,
        lon: -77.0708,
        address: "Av. Simón Bolívar 1515, Pueblo Libre, Lima, Peru",
        wikiTitle: "Larco_Museum",
        cityName: "Lima",
        price: 12, // Approx. PEN 40 in 2023
    },
    {
        name: "Huaca Pucllana",
        description: "Pre-Incan archaeological site in the city.",
        lat: -12.1111,
        lon: -77.0337,
        address: "Ca. Gral. Borgoño, Miraflores, Lima 15074, Peru",
        wikiTitle: "Huaca_Pucllana",
        cityName: "Lima",
        price: 5, // Approx. PEN 15 in 2023
    },
    // Cusco, Peru
    {
        name: "Sacsayhuamán",
        description: "Incan fortress with massive stone walls.",
        lat: -13.5079,
        lon: -71.982,
        address: "Cusco 08003, Peru",
        wikiTitle: "Sacsayhuamán",
        cityName: "Cusco",
        price: 20, // Approx. PEN 70 in 2023
    },
    {
        name: "Qorikancha",
        description: "Incan temple of the sun with colonial church.",
        lat: -13.52,
        lon: -71.9753,
        address: "Santo Domingo s/n, Cusco 08002, Peru",
        wikiTitle: "Qurikancha",
        cityName: "Cusco",
        price: 5, // Approx. PEN 15 in 2023
    },
    {
        name: "Cusco Cathedral",
        description: "Baroque cathedral in the main square.",
        lat: -13.5167,
        lon: -71.9781,
        address: "Plaza de Armas, Cusco 08003, Peru",
        wikiTitle: "Cusco_Cathedral",
        cityName: "Cusco",
        price: 12, // Approx. PEN 40 in 2023
    },
    // Machu Picchu, Peru
    {
        name: "Machu Picchu",
        description: "Ancient Incan city set high in the Andes, UNESCO site.",
        lat: -13.1631,
        lon: -72.545,
        address: "Machu Picchu, 08680, Peru",
        wikiTitle: "Machu_Picchu",
        cityName: "Machu Picchu",
        price: 45, // Approx. PEN 152 in 2023[](https://travel.usnews.com/rankings/worlds-best-vacations/)
    },
    {
        name: "Huayna Picchu",
        description: "Mountain peak with steep trails offering views of Machu Picchu.",
        lat: -13.1575,
        lon: -72.5468,
        address: "Machu Picchu, 08680, Peru",
        wikiTitle: "Huayna_Picchu",
        cityName: "Machu Picchu",
        price: 60, // Approx. PEN 200 (combo ticket) in 2023
    },
    {
        name: "Sun Gate (Inti Punku)",
        description: "Incan gate offering panoramic views of Machu Picchu.",
        lat: -13.1658,
        lon: -72.5372,
        address: "Machu Picchu, 08680, Peru",
        wikiTitle: "Machu_Picchu",
        cityName: "Machu Picchu",
        price: 45, // Included with Machu Picchu ticket
    },
    // Buenos Aires, Argentina
    {
        name: "Teatro Colón",
        description: "World-renowned opera house with guided tours.",
        lat: -34.6011,
        lon: -58.383,
        address: "Cerrito 628, C1010 CABA, Argentina",
        wikiTitle: "Teatro_Colón",
        cityName: "Buenos Aires",
        price: 15, // Approx. ARS 1,200 in 2023
    },
    {
        name: "Recoleta Cemetery",
        description: "Historic cemetery with ornate mausoleums.",
        lat: -34.5873,
        lon: -58.393,
        address: "Junín 1760, C1113 CABA, Argentina",
        wikiTitle: "La_Recoleta_Cemetery",
        cityName: "Buenos Aires",
        price: 0, // Free entry
    },
    {
        name: "Plaza de Mayo",
        description: "Historic square with Casa Rosada and protests.",
        lat: -34.6082,
        lon: -58.3721,
        address: "Pl. de Mayo, C1084 CABA, Argentina",
        wikiTitle: "Plaza_de_Mayo",
        cityName: "Buenos Aires",
        price: 0, // Public square
    },
    // Mendoza, Argentina
    {
        name: "Parque General San Martín",
        description: "Large urban park with a lake and zoo.",
        lat: -32.8941,
        lon: -68.8747,
        address: "Av. Emilio Civit, Mendoza, Argentina",
        wikiTitle: "Parque_General_San_Martín",
        cityName: "Mendoza",
        price: 0, // Free park
    },
    {
        name: "Bodega Catena Zapata",
        description: "Renowned winery with tours and tastings.",
        lat: -33.0081,
        lon: -68.8556,
        address: "Cobos 5519, Agrelo, Mendoza, Argentina",
        wikiTitle: "Catena_Zapata",
        cityName: "Mendoza",
        price: 30, // Approx. ARS 2,500 in 2023
    },
    {
        name: "Cerro de la Gloria",
        description: "Hilltop monument with views of the Andes.",
        lat: -32.885,
        lon: -68.88,
        address: "Parque General San Martín, Mendoza, Argentina",
        wikiTitle: "Cerro_de_la_Gloria",
        cityName: "Mendoza",
        price: 0, // Free monument
    },
    // Bariloche, Argentina
    {
        name: "Cerro Catedral",
        description: "Premier ski resort with stunning Andean views.",
        lat: -41.1667,
        lon: -71.4167,
        address: "Cerro Catedral, Río Negro, Argentina",
        wikiTitle: "Cerro_Catedral",
        cityName: "Bariloche",
        price: 40, // Approx. ARS 3,200 for ski pass in 2023
    },
    {
        name: "Nahuel Huapi National Park",
        description: "Vast park with lakes, forests, and hiking trails.",
        lat: -41.1333,
        lon: -71.4,
        address: "Nahuel Huapi, Bariloche, Río Negro, Argentina",
        wikiTitle: "Nahuel_Huapi_National_Park",
        cityName: "Bariloche",
        price: 0, // Free entry (some activities extra)
    },
    {
        name: "Llao Llao Hotel",
        description: "Historic hotel with scenic views and nearby trails.",
        lat: -41.0567,
        lon: -71.5314,
        address: "Av. Bustillo Km 25, Bariloche, Río Negro, Argentina",
        wikiTitle: "Llao_Llao_Hotel",
        cityName: "Bariloche",
        price: 0, // Public grounds (tours may cost extra)
    },
    // Moscow, Russia
    {
        name: "Red Square",
        description: "Historic square with Saint Basil’s Cathedral and the Kremlin.",
        lat: 55.7539,
        lon: 37.6208,
        address: "Red Square, Moscow, Russia",
        wikiTitle: "Red_Square",
        cityName: "Moscow",
        price: 0, // Public square
    },
    {
        name: "Kremlin",
        description: "Fortified complex with cathedrals and museums.",
        lat: 55.7517,
        lon: 37.6178,
        address: "Kremlin, Moscow, 103073, Russia",
        wikiTitle: "Moscow_Kremlin",
        cityName: "Moscow",
        price: 10, // Approx. RUB 900 in 2023
    },
    {
        name: "Bolshoi Theatre",
        description: "World-famous theater for ballet and opera.",
        lat: 55.7601,
        lon: 37.6187,
        address: "Teatralnaya Ploshchad 1, Moscow, Russia",
        wikiTitle: "Bolshoi_Theatre",
        cityName: "Moscow",
        price: 20, // Approx. RUB 1,800 for tour in 2023
    },
    // Saint Petersburg, Russia
    {
        name: "Hermitage Museum",
        description: "One of the world’s largest art museums, in the Winter Palace.",
        lat: 59.9398,
        lon: 30.3146,
        address: "Palace Square, 2, St Petersburg, Russia",
        wikiTitle: "Hermitage_Museum",
        cityName: "Saint Petersburg",
        price: 8, // Approx. RUB 700 in 2023
    },
    {
        name: "Peterhof Palace",
        description: "Grand palace with fountains and gardens, UNESCO site.",
        lat: 59.8849,
        lon: 29.9085,
        address: "Razvodnaya Ulitsa, 2, Peterhof, Russia",
        wikiTitle: "Peterhof_Palace",
        cityName: "Saint Petersburg",
        price: 12, // Approx. RUB 1,000 in 2023
    },
    {
        name: "Church of the Savior on Blood",
        description: "Ornate Orthodox church with colorful domes.",
        lat: 59.9401,
        lon: 30.3289,
        address: "Griboyedov Canal Embankment, St Petersburg, Russia",
        wikiTitle: "Church_of_the_Savior_on_Blood",
        cityName: "Saint Petersburg",
        price: 5, // Approx. RUB 450 in 2023
    },
    // Sochi, Russia
    {
        name: "Sochi Arboretum",
        description: "Botanical garden with subtropical plants and cable car.",
        lat: 43.5942,
        lon: 39.7243,
        address: "Kurortnyy Prospekt, 74, Sochi, Russia",
        wikiTitle: "Sochi_Arboretum",
        cityName: "Sochi",
        price: 4, // Approx. RUB 350 in 2023
    },
    {
        name: "Rosa Khutor Alpine Resort",
        description: "Ski resort with scenic mountain views.",
        lat: 43.6721,
        lon: 40.2978,
        address: "Esto-Sadok, Sochi, Russia",
        wikiTitle: "Rosa_Khutor_Alpine_Resort",
        cityName: "Sochi",
        price: 30, // Approx. RUB 2,700 for lift pass in 2023
    },
    {
        name: "Sochi Park",
        description: "Theme park with roller coasters and Russian folklore themes.",
        lat: 43.4048,
        lon: 39.9642,
        address: "Imereinskaya Lowland, Sochi, Russia",
        wikiTitle: "Sochi_Park",
        cityName: "Sochi",
        price: 20, // Approx. RUB 1,800 in 2023
    },
    // Dubai, United Arab Emirates
    {
        name: "Burj Khalifa",
        description: "World’s tallest building with observation decks.",
        lat: 25.1972,
        lon: 55.2744,
        address: "1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE",
        wikiTitle: "Burj_Khalifa",
        cityName: "Dubai",
        price: 43, // Approx. AED 159 for At the Top in 2023
    },
    {
        name: "Dubai Mall",
        description: "Massive shopping mall with aquarium and fountain shows.",
        lat: 25.198,
        lon: 55.2793,
        address: "Financial Centre Rd, Dubai, UAE",
        wikiTitle: "Dubai_Mall",
        cityName: "Dubai",
        price: 0, // Free entry (attractions like aquarium extra)
    },
    {
        name: "Palm Jumeirah",
        description: "Man-made island with luxury hotels and beaches.",
        lat: 25.1123,
        lon: 55.1393,
        address: "Palm Jumeirah, Dubai, UAE",
        wikiTitle: "Palm_Jumeirah",
        cityName: "Dubai",
        price: 0, // Public area (tours extra)
    },
    // Abu Dhabi, United Arab Emirates
    {
        name: "Sheikh Zayed Grand Mosque",
        description: "Iconic mosque with stunning architecture and marble work.",
        lat: 24.4124,
        lon: 54.475,
        address: "Sheikh Rashid Bin Saeed St, Abu Dhabi, UAE",
        wikiTitle: "Sheikh_Zayed_Mosque",
        cityName: "Abu Dhabi",
        price: 0, // Free entry
    },
    {
        name: "Louvre Abu Dhabi",
        description: "Art museum with global collections in a striking dome.",
        lat: 24.5337,
        lon: 54.3983,
        address: "Saadiyat Island, Abu Dhabi, UAE",
        wikiTitle: "Louvre_Abu_Dhabi",
        cityName: "Abu Dhabi",
        price: 17, // Approx. AED 63 in 2023
    },
    {
        name: "Qasr Al Watan",
        description: "Presidential palace with cultural exhibits.",
        lat: 24.4618,
        lon: 54.3176,
        address: "Al Ras Al Akhdar, Abu Dhabi, UAE",
        wikiTitle: "Qasr_Al_Watan",
        cityName: "Abu Dhabi",
        price: 16, // Approx. AED 60 in 2023
    },
    // Sharjah, United Arab Emirates
    {
        name: "Sharjah Museum of Islamic Civilization",
        description: "Museum showcasing Islamic art and history.",
        lat: 25.3591,
        lon: 55.385,
        address: "Corniche St, Sharjah, UAE",
        wikiTitle: "Sharjah_Museum_of_Islamic_Civilization",
        cityName: "Sharjah",
        price: 3, // Approx. AED 10 in 2023
    },
    {
        name: "Al Noor Mosque",
        description: "Beautiful mosque open to non-Muslim visitors.",
        lat: 25.3519,
        lon: 55.3918,
        address: "Al Majaz, Sharjah, UAE",
        wikiTitle: "Al_Noor_Mosque",
        cityName: "Sharjah",
        price: 0, // Free entry
    },
    {
        name: "Sharjah Heritage Museum",
        description: "Museum of traditional Emirati culture and history.",
        lat: 25.3562,
        lon: 55.387,
        address: "Heart of Sharjah, Sharjah, UAE",
        wikiTitle: "Sharjah_Heritage_Museum",
        cityName: "Sharjah",
        price: 3, // Approx. AED 10 in 2023
    },
    // Doha, Qatar
    {
        name: "Souq Waqif",
        description: "Traditional market with shops, cafes, and cultural events.",
        lat: 25.2877,
        lon: 51.533,
        address: "Souq Waqif, Doha, Qatar",
        wikiTitle: "Souq_Waqif",
        cityName: "Doha",
        price: 0, // Public market
    },
    {
        name: "Museum of Islamic Art",
        description: "Museum with Islamic art in a striking waterfront building.",
        lat: 25.2953,
        lon: 51.5391,
        address: "Corniche, Doha, Qatar",
        wikiTitle: "Museum_of_Islamic_Art,_Doha",
        cityName: "Doha",
        price: 0, // Free entry in 2023
    },
    {
        name: "Katara Cultural Village",
        description: "Cultural hub with theaters, galleries, and mosques.",
        lat: 25.3604,
        lon: 51.5242,
        address: "Katara, Doha, Qatar",
        wikiTitle: "Katara_(cultural_village)",
        cityName: "Doha",
        price: 0, // Public area
    },
    // Al Wakrah, Qatar
    {
        name: "Al Wakrah Souq",
        description: "Seaside traditional market with shops and restaurants.",
        lat: 25.1715,
        lon: 51.5988,
        address: "Al Wakrah, Qatar",
        wikiTitle: "Al_Wakrah",
        cityName: "Al Wakrah",
        price: 0, // Public market
    },
    {
        name: "Al Wakrah Beach",
        description: "Public beach with family-friendly facilities.",
        lat: 25.17,
        lon: 51.602,
        address: "Al Wakrah, Qatar",
        wikiTitle: "Al_Wakrah",
        cityName: "Al Wakrah",
        price: 0, // Free beach
    },
    {
        name: "Al Wakrah Heritage Village",
        description: "Cultural site showcasing traditional Qatari life.",
        lat: 25.172,
        lon: 51.597,
        address: "Al Wakrah, Qatar",
        wikiTitle: "Al_Wakrah",
        cityName: "Al Wakrah",
        price: 0, // Free entry
    },
    // Al Khor, Qatar
    {
        name: "Al Khor Park",
        description: "Family park with playgrounds and green spaces.",
        lat: 25.68,
        lon: 51.507,
        address: "Al Khor, Qatar",
        wikiTitle: "Al_Khor",
        cityName: "Al Khor",
        price: 0, // Free park
    },
    {
        name: "Purple Island",
        description: "Mangrove island with kayaking and nature trails.",
        lat: 25.6933,
        lon: 51.5536,
        address: "Al Khor, Qatar",
        wikiTitle: "Purple_Island_(Qatar)",
        cityName: "Al Khor",
        price: 0, // Free access
    },
    {
        name: "Al Khor Museum",
        description: "Museum of local maritime and cultural history.",
        lat: 25.6845,
        lon: 51.506,
        address: "Corniche Rd, Al Khor, Qatar",
        wikiTitle: "Al_Khor",
        cityName: "Al Khor",
        price: 0, // Free entry
    },
    // Riyadh, Saudi Arabia
    {
        name: "Al Rajhi Grand Mosque",
        description: "Large modern mosque with intricate design.",
        lat: 24.6727,
        lon: 46.7146,
        address: "Imam Saud Ibn Abdul Aziz Rd, Riyadh, Saudi Arabia",
        wikiTitle: "Al_Rajhi_Grand_Mosque",
        cityName: "Riyadh",
        price: 0, // Free entry
    },
    {
        name: "Riyadh Season",
        description: "Entertainment festival with events and attractions.",
        lat: 24.688,
        lon: 46.623,
        address: "Riyadh 13241, Saudi Arabia",
        wikiTitle: "Riyadh_Season",
        cityName: "Riyadh",
        price: 15, // Approx. SAR 55 for entry in 2023
    },
    {
        name: "National Museum of Saudi Arabia",
        description: "Museum of Saudi history and culture.",
        lat: 24.6473,
        lon: 46.7105,
        address: "Al Murabba, Riyadh 12631, Saudi Arabia",
        wikiTitle: "National_Museum_of_Saudi_Arabia",
        cityName: "Riyadh",
        price: 3, // Approx. SAR 10 in 2023
    },
    // Jeddah, Saudi Arabia
    {
        name: "Al-Balad",
        description: "Historic district with coral stone buildings, UNESCO site.",
        lat: 21.4833,
        lon: 39.1833,
        address: "Al-Balad, Jeddah, Saudi Arabia",
        wikiTitle: "Al-Balad,_Jeddah",
        cityName: "Jeddah",
        price: 0, // Public area
    },
    {
        name: "King Fahd’s Fountain",
        description: "World’s tallest fountain, visible along the Corniche.",
        lat: 21.5159,
        lon: 39.1553,
        address: "Corniche Rd, Jeddah, Saudi Arabia",
        wikiTitle: "King_Fahd’s_Fountain",
        cityName: "Jeddah",
        price: 0, // Public monument
    },
    {
        name: "Jeddah Corniche",
        description: "Scenic waterfront with parks and sculptures.",
        lat: 21.51,
        lon: 39.16,
        address: "Corniche, Jeddah, Saudi Arabia",
        wikiTitle: "Jeddah",
        cityName: "Jeddah",
        price: 0, // Public promenade
    },
    // Mecca, Saudi Arabia
    {
        name: "Kaaba",
        description: "Sacred Islamic site within the Masjid al-Haram.",
        lat: 21.4225,
        lon: 39.8262,
        address: "Masjid al-Haram, Mecca, Saudi Arabia",
        wikiTitle: "Kaaba",
        cityName: "Mecca",
        price: 0, // Free for pilgrims
    },
    {
        name: "Abraj Al Bait",
        description: "Government-owned complex with museums and shopping.",
        lat: 21.4189,
        lon: 39.8257,
        address: "Ajyad, Mecca, Saudi Arabia",
        wikiTitle: "Abraj_Al_Bait",
        cityName: "Mecca",
        price: 0, // Public areas free
    },
    {
        name: "Jabal al-Nour",
        description: "Mountain with the Cave of Hira, a significant Islamic site.",
        lat: 21.4576,
        lon: 39.8592,
        address: "Mecca, Saudi Arabia",
        wikiTitle: "Jabal_al-Nour",
        cityName: "Mecca",
        price: 0, // Free access
    },
    // Singapore, Singapore
    {
        name: "Marina Bay Sands",
        description: "Iconic hotel with infinity pool and observation deck.",
        lat: 1.2839,
        lon: 103.8607,
        address: "10 Bayfront Ave, Singapore 018956",
        wikiTitle: "Marina_Bay_Sands",
        cityName: "Singapore",
        price: 22, // Approx. SGD 30 for SkyPark in 2023
    },
    {
        name: "Gardens by the Bay",
        description: "Futuristic gardens with Supertree Grove and conservatories.",
        lat: 1.2816,
        lon: 103.8636,
        address: "18 Marina Gardens Dr, Singapore 018953",
        wikiTitle: "Gardens_by_the_Bay",
        cityName: "Singapore",
        price: 22, // Approx. SGD 30 for conservatories in 2023
    },
    {
        name: "Sentosa Island",
        description: "Resort island with beaches, theme parks, and attractions.",
        lat: 1.2494,
        lon: 103.8303,
        address: "Sentosa, Singapore",
        wikiTitle: "Sentosa",
        cityName: "Singapore",
        price: 4, // Approx. SGD 6 for entry in 2023
    },
    // Manila, Philippines
    {
        name: "Rizal Park",
        description: "Historic urban park with monuments and gardens.",
        lat: 14.5819,
        lon: 120.9751,
        address: "Ermita, Manila, 1000 Metro Manila, Philippines",
        wikiTitle: "Rizal_Park",
        cityName: "Manila",
        price: 0, // Free park
    },
    {
        name: "Intramuros",
        description: "Walled historic district with colonial architecture.",
        lat: 14.591,
        lon: 120.9753,
        address: "Intramuros, Manila, 1002 Metro Manila, Philippines",
        wikiTitle: "Intramuros",
        cityName: "Manila",
        price: 0, // Public area (museums extra)
    },
    {
        name: "Fort Santiago",
        description: "Historic fortress within Intramuros.",
        lat: 14.595,
        lon: 120.9693,
        address: "Santa Clara St, Intramuros, Manila, Philippines",
        wikiTitle: "Fort_Santiago",
        cityName: "Manila",
        price: 2, // Approx. PHP 75 in 2023
    },
    // Cebu City, Philippines
    {
        name: "Basilica Minore del Santo Niño",
        description: "Historic church with the oldest Catholic icon in the Philippines.",
        lat: 10.2942,
        lon: 123.9021,
        address: "Osmeña Blvd, Cebu City, 6000 Cebu, Philippines",
        wikiTitle: "Basilica_del_Santo_Niño",
        cityName: "Cebu City",
        price: 0, // Free entry
    },
    {
        name: "Magellan’s Cross",
        description: "Historic cross marking Spanish arrival in 1521.",
        lat: 10.2937,
        lon: 123.902,
        address: "P. Burgos St, Cebu City, 6000 Cebu, Philippines",
        wikiTitle: "Magellan’s_Cross",
        cityName: "Cebu City",
        price: 0, // Public monument
    },
    {
        name: "Tops Lookout",
        description: "Hilltop viewpoint with panoramic city views.",
        lat: 10.3418,
        lon: 123.8987,
        address: "Busay, Cebu City, 6000 Cebu, Philippines",
        wikiTitle: "Cebu_City",
        cityName: "Cebu City",
        price: 2, // Approx. PHP 100 in 2023
    },
    // Davao, Philippines
    {
        name: "Eden Nature Park",
        description: "Mountain resort with trails and gardens.",
        lat: 7.2388,
        lon: 125.3877,
        address: "Toril, Davao City, 8000 Davao del Sur, Philippines",
        wikiTitle: "Davao_City",
        cityName: "Davao",
        price: 5, // Approx. PHP 250 in 2023
    },
    {
        name: "People’s Park",
        description: "Urban park with sculptures and green spaces.",
        lat: 7.0712,
        lon: 125.6092,
        address: "Palma Gil St, Davao City, 8000 Davao del Sur, Philippines",
        wikiTitle: "Davao_City",
        cityName: "Davao",
        price: 0, // Free park
    },
    {
        name: "D’Bone Collector Museum",
        description: "Unique museum of animal bones and skeletons.",
        lat: 7.0762,
        lon: 125.6114,
        address: "San Pedro St, Davao City, 8000 Davao del Sur, Philippines",
        wikiTitle: "Davao_City",
        cityName: "Davao",
        price: 2, // Approx. PHP 100 in 2023
    },
    // Tel Aviv, Israel
    {
        name: "Jaffa Old City",
        description: "Historic port city with markets and ancient sites.",
        lat: 32.0554,
        lon: 34.7559,
        address: "Jaffa, Tel Aviv-Yafo, Israel",
        wikiTitle: "Jaffa",
        cityName: "Tel Aviv",
        price: 0, // Public area
    },
    {
        name: "Tel Aviv Museum of Art",
        description: "Modern art museum with Israeli and international works.",
        lat: 32.0773,
        lon: 34.7868,
        address: "27 Shaul Hamelech Blvd, Tel Aviv-Yafo, Israel",
        wikiTitle: "Tel_Aviv_Museum_of_Art",
        cityName: "Tel Aviv",
        price: 14, // Approx. ILS 50 in 2023
    },
    {
        name: "Rabin Square",
        description: "Central plaza with cultural events and memorials.",
        lat: 32.0809,
        lon: 34.7806,
        address: "Ibn Gabirol St, Tel Aviv-Yafo, Israel",
        wikiTitle: "Rabin_Square",
        cityName: "Tel Aviv",
        price: 0, // Public square
    },
    // Jerusalem, Israel
    {
        name: "Western Wall",
        description: "Sacred Jewish site in the Old City, UNESCO site.",
        lat: 31.7767,
        lon: 35.2345,
        address: "Western Wall Plaza, Jerusalem, Israel",
        wikiTitle: "Western_Wall",
        cityName: "Jerusalem",
        price: 0, // Free entry
    },
    {
        name: "Israel Museum",
        description: "Museum with the Dead Sea Scrolls and art collections.",
        lat: 31.7723,
        lon: 35.2045,
        address: "Derech Ruppin 11, Jerusalem, Israel",
        wikiTitle: "Israel_Museum",
        cityName: "Jerusalem",
        price: 15, // Approx. ILS 54 in 2023
    },
    {
        name: "Mount of Olives",
        description: "Historic hill with religious sites and city views.",
        lat: 31.778,
        lon: 35.2412,
        address: "Mount of Olives, Jerusalem, Israel",
        wikiTitle: "Mount_of_Olives",
        cityName: "Jerusalem",
        price: 0, // Public area
    },
    // Haifa, Israel
    {
        name: "Bahá’í Gardens",
        description: "UNESCO-listed terraced gardens with stunning views.",
        lat: 32.8148,
        lon: 34.9871,
        address: "Yefe Nof St, Haifa, Israel",
        wikiTitle: "Bahá’í_World_Centre",
        cityName: "Haifa",
        price: 0, // Free entry
    },
    {
        name: "Stella Maris Monastery",
        description: "Carmelite monastery with panoramic sea views.",
        lat: 32.8267,
        lon: 34.9698,
        address: "Stella Maris Rd, Haifa, Israel",
        wikiTitle: "Stella_Maris_Monastery",
        cityName: "Haifa",
        price: 0, // Free entry
    },
    {
        name: "Haifa Museum of Art",
        description: "Contemporary art museum with Israeli and global works.",
        lat: 32.8117,
        lon: 34.9956,
        address: "26 Shabtai Levi St, Haifa, Israel",
        wikiTitle: "Haifa_Museum_of_Art",
        cityName: "Haifa",
        price: 10, // Approx. ILS 35 in 2023
    },
    // Amman, Jordan
    {
        name: "Amman Citadel",
        description: "Historic hilltop site with Roman and Umayyad ruins.",
        lat: 31.9552,
        lon: 35.9353,
        address: "Jabal Al Qala’a, Amman, Jordan",
        wikiTitle: "Amman_Citadel",
        cityName: "Amman",
        price: 3, // Approx. JOD 2 in 2023
    },
    {
        name: "Roman Theatre",
        description: "Well-preserved 2nd-century Roman amphitheater.",
        lat: 31.9517,
        lon: 35.9393,
        address: "Taha Al Hashemi St, Amman, Jordan",
        wikiTitle: "Roman_Theatre_(Amman)",
        cityName: "Amman",
        price: 3, // Approx. JOD 2 in 2023
    },
    {
        name: "Rainbow Street",
        description: "Vibrant street with cafes, shops, and street art.",
        lat: 31.9478,
        lon: 35.9276,
        address: "Rainbow St, Amman, Jordan",
        wikiTitle: "Amman",
        cityName: "Amman",
        price: 0, // Public street
    },
    // Petra, Jordan
    {
        name: "The Treasury (Al-Khazneh)",
        description: "Iconic rock-cut facade in the ancient city of Petra.",
        lat: 30.3225,
        lon: 35.4516,
        address: "Petra, Ma’an, Jordan",
        wikiTitle: "Al-Khazneh",
        cityName: "Petra",
        price: 70, // Approx. JOD 50 for Petra entry in 2023
    },
    {
        name: "The Monastery (Ad Deir)",
        description: "Massive rock-cut monument reached by a steep climb.",
        lat: 30.338,
        lon: 35.4378,
        address: "Petra, Ma’an, Jordan",
        wikiTitle: "Ad_Deir",
        cityName: "Petra",
        price: 70, // Included in Petra entry
    },
    {
        name: "Siq",
        description: "Narrow canyon leading to Petra’s main sites.",
        lat: 30.3247,
        lon: 35.4499,
        address: "Petra, Ma’an, Jordan",
        wikiTitle: "Siq",
        cityName: "Petra",
        price: 70, // Included in Petra entry
    },
    // Aqaba, Jordan
    {
        name: "Aqaba Fort",
        description: "Historic Mamluk fort near the Red Sea.",
        lat: 29.5222,
        lon: 35.0015,
        address: "Aqaba, Jordan",
        wikiTitle: "Aqaba_Fort",
        cityName: "Aqaba",
        price: 4, // Approx. JOD 3 in 2023
    },
    {
        name: "South Beach",
        description: "Popular beach for snorkeling and diving.",
        lat: 29.489,
        lon: 34.975,
        address: "South Beach, Aqaba, Jordan",
        wikiTitle: "Aqaba",
        cityName: "Aqaba",
        price: 0, // Public beach
    },
    {
        name: "Ayla Ruins",
        description: "Archaeological site of an early Islamic city.",
        lat: 29.532,
        lon: 34.997,
        address: "Ayla, Aqaba, Jordan",
        wikiTitle: "Ayla_(city)",
        cityName: "Aqaba",
        price: 0, // Free access
    },
    // Colombo, Sri Lanka
    {
        name: "Gangaramaya Temple",
        description: "Buddhist temple with a museum and eclectic artifacts.",
        lat: 6.9167,
        lon: 79.8562,
        address: "61 Sri Jinarathana Rd, Colombo 00200, Sri Lanka",
        wikiTitle: "Gangaramaya_Temple",
        cityName: "Colombo",
        price: 2, // Approx. LKR 600 in 2023
    },
    {
        name: "Galle Face Green",
        description: "Seaside promenade with street food and kite flying.",
        lat: 6.9248,
        lon: 79.845,
        address: "Galle Face, Colombo 00300, Sri Lanka",
        wikiTitle: "Galle_Face_Green",
        cityName: "Colombo",
        price: 0, // Public promenade
    },
    {
        name: "National Museum of Colombo",
        description: "Museum of Sri Lankan history and culture.",
        lat: 6.9107,
        lon: 79.8612,
        address: "Sir Marcus Fernando Mawatha, Colombo 00700, Sri Lanka",
        wikiTitle: "National_Museum_of_Colombo",
        cityName: "Colombo",
        price: 3, // Approx. LKR 1,000 in 2023
    },
    // Kandy, Sri Lanka
    {
        name: "Temple of the Sacred Tooth Relic",
        description: "Sacred Buddhist temple housing a relic of the Buddha.",
        lat: 7.2936,
        lon: 80.6413,
        address: "Sri Dalada Veediya, Kandy 20000, Sri Lanka",
        wikiTitle: "Temple_of_the_Tooth",
        cityName: "Kandy",
        price: 5, // Approx. LKR 1,500 in 2023
    },
    {
        name: "Kandy Lake",
        description: "Scenic lake in the city center with walking paths.",
        lat: 7.2918,
        lon: 80.642,
        address: "Kandy, Sri Lanka",
        wikiTitle: "Kandy_Lake",
        cityName: "Kandy",
        price: 0, // Public area
    },
    {
        name: "Royal Botanical Gardens",
        description: "Expansive gardens with diverse plant species.",
        lat: 7.269,
        lon: 80.5956,
        address: "Peradeniya, Kandy, Sri Lanka",
        wikiTitle: "Royal_Botanical_Gardens,_Peradeniya",
        cityName: "Kandy",
        price: 5, // Approx. LKR 1,500 in 2023
    },
    // Galle, Sri Lanka
    {
        name: "Galle Fort",
        description: "UNESCO-listed colonial fort with historic buildings.",
        lat: 6.0258,
        lon: 80.217,
        address: "Galle 80000, Sri Lanka",
        wikiTitle: "Galle_Fort",
        cityName: "Galle",
        price: 0, // Public area
    },
    {
        name: "Unawatuna Beach",
        description: "Popular beach with clear waters and restaurants.",
        lat: 6.0097,
        lon: 80.2483,
        address: "Unawatuna, Galle, Sri Lanka",
        wikiTitle: "Unawatuna",
        cityName: "Galle",
        price: 0, // Public beach
    },
    {
        name: "National Maritime Museum",
        description: "Museum in Galle Fort with maritime artifacts.",
        lat: 6.027,
        lon: 80.2165,
        address: "Fort, Galle 80000, Sri Lanka",
        wikiTitle: "National_Maritime_Museum_(Galle)",
        cityName: "Galle",
        price: 2, // Approx. LKR 600 in 2023
    },
    // Budapest, Hungary
    {
        name: "Buda Castle",
        description: "Historic castle complex with museums and views.",
        lat: 47.4961,
        lon: 19.0399,
        address: "Szent György tér 2, 1014 Budapest, Hungary",
        wikiTitle: "Buda_Castle",
        cityName: "Budapest",
        price: 12, // Approx. HUF 4,000 for museums in 2023
    },
    {
        name: "Széchenyi Thermal Bath",
        description: "Historic thermal spa with outdoor pools.",
        lat: 47.5186,
        lon: 19.0819,
        address: "Állatkerti krt. 9-11, 1146 Budapest, Hungary",
        wikiTitle: "Széchenyi_thermal_bath",
        cityName: "Budapest",
        price: 20, // Approx. HUF 6,500 in 2023
    },
    {
        name: "Hungarian Parliament Building",
        description: "Gothic Revival parliament with guided tours.",
        lat: 47.5071,
        lon: 19.0456,
        address: "Kossuth Lajos tér 1-3, 1055 Budapest, Hungary",
        wikiTitle: "Hungarian_Parliament_Building",
        cityName: "Budapest",
        price: 10, // Approx. HUF 3,200 in 2023
    },
    // Debrecen, Hungary
    {
        name: "Great Reformed Church",
        description: "Iconic Calvinist church in the city center.",
        lat: 47.5316,
        lon: 21.6244,
        address: "Piac u. 4-6, 4025 Debrecen, Hungary",
        wikiTitle: "Great_Reformed_Church,_Debrecen",
        cityName: "Debrecen",
        price: 2, // Approx. HUF 600 in 2023
    },
    {
        name: "Déri Museum",
        description: "Museum with art, archaeology, and local history.",
        lat: 47.5297,
        lon: 21.6273,
        address: "Déri tér 1, 4026 Debrecen, Hungary",
        wikiTitle: "Déri_Museum",
        cityName: "Debrecen",
        price: 4, // Approx. HUF 1,200 in 2023
    },
    {
        name: "Great Forest Park",
        description: "Large park with a zoo and amusement park.",
        lat: 47.55,
        lon: 21.63,
        address: "Nagytemplom u., 4032 Debrecen, Hungary",
        wikiTitle: "Debrecen",
        cityName: "Debrecen",
        price: 0, // Free park (zoo entry extra)
    },
    // Szeged, Hungary
    {
        name: "Szeged Cathedral",
        description: "Neo-Romanesque cathedral with a prominent dome.",
        lat: 46.2489,
        lon: 20.149,
        address: "Dóm tér 15, 6720 Szeged, Hungary",
        wikiTitle: "Szeged_Cathedral",
        cityName: "Szeged",
        price: 2, // Approx. HUF 600 in 2023
    },
    {
        name: "Reök Palace",
        description: "Art Nouveau building with art exhibitions.",
        lat: 46.2515,
        lon: 20.1478,
        address: "Tisza Lajos krt. 56, 6720 Szeged, Hungary",
        wikiTitle: "Reök_Palace",
        cityName: "Szeged",
        price: 3, // Approx. HUF 900 in 2023
    },
    {
        name: "Szeged Open-Air Festival",
        description: "Cultural event space in Dóm Square.",
        lat: 46.249,
        lon: 20.1485,
        address: "Dóm tér, 6720 Szeged, Hungary",
        wikiTitle: "Szeged",
        cityName: "Szeged",
        price: 0, // Public square (events may charge)
    },
    // Warsaw, Poland
    {
        name: "Old Town Warsaw",
        description: "UNESCO-listed historic center with colorful buildings.",
        lat: 52.2498,
        lon: 21.0122,
        address: "Old Town, 00-279 Warsaw, Poland",
        wikiTitle: "Warsaw_Old_Town",
        cityName: "Warsaw",
        price: 0, // Public area
    },
    {
        name: "Royal Castle",
        description: "Reconstructed Baroque castle with royal apartments.",
        lat: 52.2477,
        lon: 21.0141,
        address: "plac Zamkowy 4, 00-277 Warsaw, Poland",
        wikiTitle: "Royal_Castle,_Warsaw",
        cityName: "Warsaw",
        price: 10, // Approx. PLN 40 in 2023
    },
    {
        name: "Wilanów Palace",
        description: "Baroque palace with gardens and art collections.",
        lat: 52.1651,
        lon: 21.0908,
        address: "Stanisława Kostki Potockiego 10/16, 02-958 Warsaw, Poland",
        wikiTitle: "Wilanów_Palace",
        cityName: "Warsaw",
        price: 8, // Approx. PLN 30 in 2023
    },
    // Krakow, Poland
    {
        name: "Wawel Castle",
        description: "Historic castle with cathedral and royal chambers.",
        lat: 50.0541,
        lon: 19.9353,
        address: "Wawel 5, 31-001 Kraków, Poland",
        wikiTitle: "Wawel_Castle",
        cityName: "Krakow",
        price: 10, // Approx. PLN 40 in 2023
    },
    {
        name: "Main Market Square",
        description: "Europe’s largest medieval square with St. Mary’s Basilica.",
        lat: 50.0616,
        lon: 19.9373,
        address: "Rynek Główny, 31-042 Kraków, Poland",
        wikiTitle: "Main_Market_Square,_Kraków",
        cityName: "Krakow",
        price: 0, // Public square
    },
    {
        name: "Kazimierz District",
        description: "Historic Jewish quarter with synagogues and cafes.",
        lat: 50.0477,
        lon: 19.9445,
        address: "Kazimierz, 31-055 Kraków, Poland",
        wikiTitle: "Kazimierz",
        cityName: "Krakow",
        price: 0, // Public area
    },
    // Gdańsk, Poland
    {
        name: "Długi Targ (Long Market)",
        description: "Historic street with colorful facades and Neptune Fountain.",
        lat: 54.3489,
        lon: 18.6533,
        address: "Długi Targ, 80-831 Gdańsk, Poland",
        wikiTitle: "Długi_Targ",
        cityName: "Gdańsk",
        price: 0, // Public street
    },
    {
        name: "St. Mary’s Church",
        description: "Gothic brick church with an astronomical clock.",
        lat: 54.3499,
        lon: 18.6532,
        address: "Podkramarska 5, 80-834 Gdańsk, Poland",
        wikiTitle: "St._Mary’s_Church,_Gdańsk",
        cityName: "Gdańsk",
        price: 2, // Approx. PLN 10 in 2023
    },
    {
        name: "Museum of the Second World War",
        description: "Modern museum on WWII history.",
        lat: 54.3563,
        lon: 18.6588,
        address: "plac Władysława Bartoszewskiego 1, 80-862 Gdańsk, Poland",
        wikiTitle: "Museum_of_the_Second_World_War",
        cityName: "Gdańsk",
        price: 6, // Approx. PLN 23 in 2023
    },
    // Oslo, Norway
    {
        name: "Vigeland Sculpture Park",
        description: "World’s largest sculpture park with over 200 works.",
        lat: 59.9271,
        lon: 10.6984,
        address: "Nobels gate 32, 0268 Oslo, Norway",
        wikiTitle: "Vigeland_Sculpture_Park",
        cityName: "Oslo",
        price: 0, // Free park
    },
    {
        name: "Oslo Opera House",
        description: "Modern waterfront opera house with walkable roof.",
        lat: 59.9074,
        lon: 10.7534,
        address: "Kirsten Flagstads Plass 1, 0150 Oslo, Norway",
        wikiTitle: "Oslo_Opera_House",
        cityName: "Oslo",
        price: 0, // Free exterior (tours extra)
    },
    {
        name: "Akershus Fortress",
        description: "Medieval fortress with museums and city views.",
        lat: 59.9095,
        lon: 10.7361,
        address: "0150 Oslo, Norway",
        wikiTitle: "Akershus_Fortress",
        cityName: "Oslo",
        price: 10, // Approx. NOK 100 in 2023
    },
    // Bergen, Norway
    {
        name: "Bryggen",
        description: "UNESCO-listed Hanseatic wharf with colorful wooden buildings.",
        lat: 60.3971,
        lon: 5.3242,
        address: "Bryggen, 5003 Bergen, Norway",
        wikiTitle: "Bryggen",
        cityName: "Bergen",
        price: 0, // Public area
    },
    {
        name: "Fløibanen Funicular",
        description: "Funicular to Mount Fløyen with panoramic views.",
        lat: 60.3946,
        lon: 5.3283,
        address: "Vetrlidsallmenningen 23A, 5014 Bergen, Norway",
        wikiTitle: "Fløibanen",
        cityName: "Bergen",
        price: 15, // Approx. NOK 150 in 2023
    },
    {
        name: "Bergen Aquarium",
        description: "Aquarium with marine life and penguin exhibits.",
        lat: 60.4001,
        lon: 5.305,
        address: "Nordnesbakken 4, 5005 Bergen, Norway",
        wikiTitle: "Bergen_Aquarium",
        cityName: "Bergen",
        price: 25, // Approx. NOK 250 in 2023
    },
    // Tromsø, Norway
    {
        name: "Arctic Cathedral",
        description: "Modern church with unique triangular design.",
        lat: 69.6484,
        lon: 18.9871,
        address: "Hans Nilsens vei 41, 9020 Tromsø, Norway",
        wikiTitle: "Arctic_Cathedral",
        cityName: "Tromsø",
        price: 5, // Approx. NOK 50 in 2023
    },
    {
        name: "Polar Museum",
        description: "Museum on Arctic exploration and hunting history.",
        lat: 69.6492,
        lon: 18.9601,
        address: "Søndre Tollbodgate 11, 9008 Tromsø, Norway",
        wikiTitle: "Polar_Museum_(Tromsø)",
        cityName: "Tromsø",
        price: 8, // Approx. NOK 80 in 2023
    },
    {
        name: "Tromsø Cable Car",
        description: "Cable car to Storsteinen with Arctic views.",
        lat: 69.6389,
        lon: 18.9962,
        address: "Sollivegen 12, 9020 Tromsø, Norway",
        wikiTitle: "Tromsø",
        cityName: "Tromsø",
        price: 25, // Approx. NOK 250 in 2023
    },
    // Stockholm, Sweden
    {
        name: "Gamla Stan",
        description: "Historic old town with cobblestone streets and palaces.",
        lat: 59.325,
        lon: 18.0708,
        address: "Gamla Stan, 111 29 Stockholm, Sweden",
        wikiTitle: "Gamla_Stan",
        cityName: "Stockholm",
        price: 0, // Public area
    },
    {
        name: "Vasa Museum",
        description: "Museum with a preserved 17th-century warship.",
        lat: 59.328,
        lon: 18.0915,
        address: "Galärvarvsvägen 14, 115 21 Stockholm, Sweden",
        wikiTitle: "Vasa_Museum",
        cityName: "Stockholm",
        price: 18, // Approx. SEK 190 in 2023
    },
    {
        name: "Skansen",
        description: "Open-air museum and zoo with traditional Swedish buildings.",
        lat: 59.3258,
        lon: 18.1051,
        address: "Djurgårdsslätten 49-51, 115 21 Stockholm, Sweden",
        wikiTitle: "Skansen",
        cityName: "Stockholm",
        price: 22, // Approx. SEK 230 in 2023
    },
    // Gothenburg, Sweden
    {
        name: "Liseberg",
        description: "Historic amusement park with rides and concerts.",
        lat: 57.6948,
        lon: 11.9917,
        address: "Örgrytevägen 5, 412 51 Göteborg, Sweden",
        wikiTitle: "Liseberg",
        cityName: "Gothenburg",
        price: 50, // Approx. SEK 500 for day pass in 2023
    },
    {
        name: "Feskekôrka",
        description: "Fish market in a church-like building.",
        lat: 57.7013,
        lon: 11.9593,
        address: "Fisktorget 4, 411 20 Göteborg, Sweden",
        wikiTitle: "Feskekôrka",
        cityName: "Gothenburg",
        price: 0, // Public market
    },
    {
        name: "Universeum",
        description: "Science center with rainforest and aquarium exhibits.",
        lat: 57.6953,
        lon: 11.9887,
        address: "Södra Vägen 50, 412 54 Göteborg, Sweden",
        wikiTitle: "Universeum",
        cityName: "Gothenburg",
        price: 25, // Approx. SEK 250 in 2023
    },
    // Malmö, Sweden
    {
        name: "Turning Torso",
        description: "Twisting skyscraper and architectural landmark.",
        lat: 55.6133,
        lon: 12.9764,
        address: "Lilla Varvsgatan 14, 211 15 Malmö, Sweden",
        wikiTitle: "Turning_Torso",
        cityName: "Malmö",
        price: 0, // View from outside
    },
    {
        name: "Malmö Castle",
        description: "Renaissance castle with history and art museums.",
        lat: 55.6049,
        lon: 12.9878,
        address: "Malmöhusvägen 6, 211 18 Malmö, Sweden",
        wikiTitle: "Malmö_Castle",
        cityName: "Malmö",
        price: 8, // Approx. SEK 80 in 2023
    },
    {
        name: "Kungsparken",
        description: "Historic park with gardens and a canal.",
        lat: 55.604,
        lon: 13.0001,
        address: "Slottsgatan, 211 33 Malmö, Sweden",
        wikiTitle: "Kungsparken,_Malmö",
        cityName: "Malmö",
        price: 0, // Free park
    },
    // Helsinki, Finland
    {
        name: "Helsinki Cathedral",
        description: "Iconic white cathedral in Senate Square.",
        lat: 60.1702,
        lon: 24.9522,
        address: "Unioninkatu 29, 00170 Helsinki, Finland",
        wikiTitle: "Helsinki_Cathedral",
        cityName: "Helsinki",
        price: 0, // Free entry
    },
    {
        name: "Suomenlinna",
        description: "UNESCO-listed sea fortress with museums.",
        lat: 60.1482,
        lon: 24.9864,
        address: "Suomenlinna, 00190 Helsinki, Finland",
        wikiTitle: "Suomenlinna",
        cityName: "Helsinki",
        price: 0, // Free access (museums extra)
    },
    {
        name: "Temppeliaukio Church",
        description: "Unique rock-hewn church with acoustic concerts.",
        lat: 60.173,
        lon: 24.9252,
        address: "Lutherinkatu 3, 00100 Helsinki, Finland",
        wikiTitle: "Temppeliaukio_Church",
        cityName: "Helsinki",
        price: 5, // Approx. €4 in 2023
    },
    // Espoo, Finland
    {
        name: "Espoo Museum of Modern Art (EMMA)",
        description: "Contemporary art museum in WeeGee Exhibition Centre.",
        lat: 60.1817,
        lon: 24.804,
        address: "Ahertajantie 5, 02100 Espoo, Finland",
        wikiTitle: "Espoo_Museum_of_Modern_Art",
        cityName: "Espoo",
        price: 12, // Approx. €10 in 2023
    },
    {
        name: "Nuuksio National Park",
        description: "Forest park with lakes and hiking trails.",
        lat: 60.3067,
        lon: 24.5178,
        address: "Nuuksio, Espoo, Finland",
        wikiTitle: "Nuuksio_National_Park",
        cityName: "Espoo",
        price: 0, // Free park
    },
    {
        name: "Serena Water Park",
        description: "Indoor water park with slides and pools.",
        lat: 60.304,
        lon: 24.634,
        address: "Tornimäentie 10, 02970 Espoo, Finland",
        wikiTitle: "Serena_Water_Park",
        cityName: "Espoo",
        price: 25, // Approx. €22 in 2023
    },
    // Rovaniemi, Finland
    {
        name: "Santa Claus Village",
        description: "Arctic Circle village with Santa’s office and post office.",
        lat: 66.5437,
        lon: 25.8473,
        address: "96930 Rovaniemi, Finland",
        wikiTitle: "Santa_Claus_Village",
        cityName: "Rovaniemi",
        price: 0, // Free entry (activities extra)
    },
    {
        name: "Arktikum",
        description: "Museum on Arctic culture and history.",
        lat: 66.505,
        lon: 25.7246,
        address: "Pohjoisranta 4, 96200 Rovaniemi, Finland",
        wikiTitle: "Arktikum",
        cityName: "Rovaniemi",
        price: 15, // Approx. €13 in 2023
    },
    {
        name: "Ranua Zoo",
        description: "Arctic wildlife zoo with polar bears and reindeer.",
        lat: 65.9292,
        lon: 26.5178,
        address: "Rovaniementie 29, 97700 Ranua, Finland",
        wikiTitle: "Ranua_Zoo",
        cityName: "Rovaniemi",
        price: 20, // Approx. €18 in 2023
    },
    // Copenhagen, Denmark
    {
        name: "Nyhavn",
        description: "Colorful canal with historic buildings and cafes.",
        lat: 55.6797,
        lon: 12.5918,
        address: "Nyhavn, 1051 Copenhagen, Denmark",
        wikiTitle: "Nyhavn",
        cityName: "Copenhagen",
        price: 0, // Public area
    },
    {
        name: "Tivoli Gardens",
        description: "Historic amusement park with rides and gardens.",
        lat: 55.6737,
        lon: 12.5683,
        address: "Vesterbrogade 3, 1630 Copenhagen, Denmark",
        wikiTitle: "Tivoli_Gardens",
        cityName: "Copenhagen",
        price: 20, // Approx. DKK 135 for entry in 2023
    },
    {
        name: "Rosenborg Castle",
        description: "Renaissance castle with crown jewels.",
        lat: 55.6851,
        lon: 12.5776,
        address: "Øster Voldgade 4A, 1350 Copenhagen, Denmark",
        wikiTitle: "Rosenborg_Castle",
        cityName: "Copenhagen",
        price: 17, // Approx. DKK 120 in 2023
    },
    // Aarhus, Denmark
    {
        name: "ARoS Aarhus Art Museum",
        description: "Modern art museum with a rainbow panorama walkway.",
        lat: 56.1539,
        lon: 10.1997,
        address: "Aros Allé 2, 8000 Aarhus, Denmark",
        wikiTitle: "ARoS_Aarhus_Art_Museum",
        cityName: "Aarhus",
        price: 20, // Approx. DKK 140 in 2023
    },
    {
        name: "Den Gamle By",
        description: "Open-air museum of historic Danish buildings.",
        lat: 56.1589,
        lon: 10.1913,
        address: "Viborgvej 2, 8000 Aarhus, Denmark",
        wikiTitle: "Den_Gamle_By",
        cityName: "Aarhus",
        price: 20, // Approx. DKK 135 in 2023
    },
    {
        name: "Moesgaard Museum",
        description: "Archaeology museum with Viking exhibits.",
        lat: 56.0889,
        lon: 10.1961,
        address: "Moesgård Allé 15, 8270 Højbjerg, Denmark",
        wikiTitle: "Moesgaard_Museum",
        cityName: "Aarhus",
        price: 22, // Approx. DKK 150 in 2023
    },
    // Odense, Denmark
    {
        name: "Hans Christian Andersen Museum",
        description: "Museum dedicated to the famous fairy-tale author.",
        lat: 55.3988,
        lon: 10.3883,
        address: "Bangs Boder 29, 5000 Odense, Denmark",
        wikiTitle: "Hans_Christian_Andersen_Museum",
        cityName: "Odense",
        price: 15, // Approx. DKK 100 in 2023
    },
    {
        name: "Odense Cathedral",
        description: "Gothic cathedral with historic significance.",
        lat: 55.395,
        lon: 10.389,
        address: "Klosterbakken 2, 5000 Odense, Denmark",
        wikiTitle: "Odense_Cathedral",
        cityName: "Odense",
        price: 0, // Free entry
    },
    {
        name: "The Funen Village",
        description: "Open-air museum of 19th-century Danish village life.",
        lat: 55.3744,
        lon: 10.3789,
        address: "Sejerskovvej 20, 5260 Odense, Denmark",
        wikiTitle: "The_Funen_Village",
        cityName: "Odense",
        price: 15, // Approx. DKK 100 in 2023
    },
    // Dublin, Ireland
    {
        name: "Trinity College",
        description: "Historic university with the Book of Kells.",
        lat: 53.3438,
        lon: -6.2546,
        address: "College Green, Dublin 2, Ireland",
        wikiTitle: "Trinity_College_Dublin",
        cityName: "Dublin",
        price: 18, // Approx. €16 for Book of Kells in 2023
    },
    {
        name: "Guinness Storehouse",
        description: "Museum and brewery tour with a pint at the Gravity Bar.",
        lat: 53.3419,
        lon: -6.2867,
        address: "St James’s Gate, Dublin 8, Ireland",
        wikiTitle: "Guinness_Storehouse",
        cityName: "Dublin",
        price: 27, // Approx. €25 in 2023
    },
    {
        name: "Dublin Castle",
        description: "Historic castle with state apartments and gardens.",
        lat: 53.3429,
        lon: -6.2675,
        address: "Dame St, Dublin 2, Ireland",
        wikiTitle: "Dublin_Castle",
        cityName: "Dublin",
        price: 9, // Approx. €8 in 2023
    },
    // Cork, Ireland
    {
        name: "Blarney Castle",
        description: "Medieval castle with the Blarney Stone.",
        lat: 51.9291,
        lon: -8.5709,
        address: "Blarney, Co. Cork, Ireland",
        wikiTitle: "Blarney_Castle",
        cityName: "Cork",
        price: 20, // Approx. €18 in 2023
    },
    {
        name: "English Market",
        description: "Historic covered market with local produce.",
        lat: 51.8979,
        lon: -8.4736,
        address: "Princes St, Cork, Ireland",
        wikiTitle: "English_Market",
        cityName: "Cork",
        price: 0, // Public market
    },
    {
        name: "St. Fin Barre’s Cathedral",
        description: "Gothic Revival cathedral with intricate stonework.",
        lat: 51.8944,
        lon: -8.4807,
        address: "Bishop St, Cork, Ireland",
        wikiTitle: "Saint_Fin_Barre’s_Cathedral",
        cityName: "Cork",
        price: 7, // Approx. €6 in 2023
    },
    // Galway, Ireland
    {
        name: "Eyre Square",
        description: "Central square with historic monuments and events.",
        lat: 53.2743,
        lon: -9.0498,
        address: "Eyre Square, Galway, Ireland",
        wikiTitle: "Eyre_Square",
        cityName: "Galway",
        price: 0, // Public square
    },
    {
        name: "Galway Cathedral",
        description: "Modern cathedral with colorful domes.",
        lat: 53.2752,
        lon: -9.0577,
        address: "Gaol Rd, Galway, Ireland",
        wikiTitle: "Galway_Cathedral",
        cityName: "Galway",
        price: 0, // Free entry
    },
    {
        name: "Spanish Arch",
        description: "Historic city wall remnant by the Corrib River.",
        lat: 53.2698,
        lon: -9.0537,
        address: "Spanish Parade, Galway, Ireland",
        wikiTitle: "Spanish_Arch",
        cityName: "Galway",
        price: 0, // Public monument
    },
    // Brussels, Belgium
    {
        name: "Grand Place",
        description: "UNESCO-listed square with ornate guildhalls.",
        lat: 50.8467,
        lon: 4.3522,
        address: "1000 Brussels, Belgium",
        wikiTitle: "Grand_Place",
        cityName: "Brussels",
        price: 0, // Public square
    },
    {
        name: "Atomium",
        description: "Futuristic structure with exhibits and city views.",
        lat: 50.8949,
        lon: 4.3415,
        address: "Pl. de l’Atomium 1, 1020 Brussels, Belgium",
        wikiTitle: "Atomium",
        cityName: "Brussels",
        price: 18, // Approx. €16 in 2023
    },
    {
        name: "Royal Palace of Brussels",
        description: "Official palace with summer tours of royal rooms.",
        lat: 50.8418,
        lon: 4.3622,
        address: "Place des Palais, 1000 Brussels, Belgium",
        wikiTitle: "Royal_Palace_of_Brussels",
        cityName: "Brussels",
        price: 0, // Free during summer
    },
    // Antwerp, Belgium
    {
        name: "Cathedral of Our Lady",
        description: "Gothic cathedral with Rubens’ paintings.",
        lat: 51.2204,
        lon: 4.4022,
        address: "Groenplaats 21, 2000 Antwerp, Belgium",
        wikiTitle: "Cathedral_of_Our_Lady_(Antwerp)",
        cityName: "Antwerp",
        price: 9, // Approx. €8 in 2023
    },
    {
        name: "MAS (Museum aan de Stroom)",
        description: "Modern museum of Antwerp’s history and culture.",
        lat: 51.229,
        lon: 4.4047,
        address: "Hanzestedenplaats 1, 2000 Antwerp, Belgium",
        wikiTitle: "Museum_aan_de_Stroom",
        cityName: "Antwerp",
        price: 11, // Approx. €10 in 2023
    },
    {
        name: "Grote Markt",
        description: "Historic square with guildhalls and Brabo Fountain.",
        lat: 51.2213,
        lon: 4.3997,
        address: "Grote Markt, 2000 Antwerp, Belgium",
        wikiTitle: "Grote_Markt_(Antwerp)",
        cityName: "Antwerp",
        price: 0, // Public square
    },
    // Ghent, Belgium
    {
        name: "Gravensteen",
        description: "Medieval castle with a museum of torture devices.",
        lat: 51.0572,
        lon: 3.7207,
        address: "Sint-Veerleplein 11, 9000 Ghent, Belgium",
        wikiTitle: "Gravensteen",
        cityName: "Ghent",
        price: 12, // Approx. €11 in 2023
    },
    {
        name: "Ghent Belfry",
        description: "Historic bell tower with city views.",
        lat: 51.0537,
        lon: 3.7249,
        address: "Sint-Baafsplein, 9000 Ghent, Belgium",
        wikiTitle: "Belfry_of_Ghent",
        cityName: "Ghent",
        price: 9, // Approx. €8 in 2023
    },
    {
        name: "Graslei and Korenlei",
        description: "Scenic quays along the Leie River with historic buildings.",
        lat: 51.0549,
        lon: 3.721,
        address: "Graslei, 9000 Ghent, Belgium",
        wikiTitle: "Graslei",
        cityName: "Ghent",
        price: 0, // Public area
    },
    // Reykjavik, Iceland
    {
        name: "Hallgrimskirkja",
        description: "Iconic Lutheran church with a viewing tower.",
        lat: 64.1417,
        lon: -21.9266,
        address: "Hallgrímstorg 1, 101 Reykjavík, Iceland",
        wikiTitle: "Hallgrimskirkja",
        cityName: "Reykjavik",
        price: 8, // Approx. ISK 1,000 for tower in 2023
    },
    {
        name: "Harpa Concert Hall",
        description: "Modern concert hall with colorful glass facade.",
        lat: 64.1506,
        lon: -21.9324,
        address: "Austurbakki 2, 101 Reykjavík, Iceland",
        wikiTitle: "Harpa_Concert_Hall_and_Conference_Centre",
        cityName: "Reykjavik",
        price: 0, // Free exterior (tours extra)
    },
    {
        name: "Sun Voyager",
        description: "Striking sculpture symbolizing exploration.",
        lat: 64.1475,
        lon: -21.9222,
        address: "Sæbraut, 101 Reykjavík, Iceland",
        wikiTitle: "Sun_Voyager",
        cityName: "Reykjavik",
        price: 0, // Public monument
    },
    // Akureyri, Iceland
    {
        name: "Akureyri Church",
        description: "Lutheran church with Art Deco architecture.",
        lat: 65.6802,
        lon: -18.0908,
        address: "Eyrarlandsvegur 7, 600 Akureyri, Iceland",
        wikiTitle: "Akureyri_Church",
        cityName: "Akureyri",
        price: 0, // Free entry
    },
    {
        name: "Akureyri Botanical Garden",
        description: "Garden with Arctic and global plant species.",
        lat: 65.6767,
        lon: -18.1023,
        address: "Eyrarlandsvegur, 600 Akureyri, Iceland",
        wikiTitle: "Akureyri",
        cityName: "Akureyri",
        price: 0, // Free entry
    },
    {
        name: "Hof Cultural Center",
        description: "Cultural venue with concerts and exhibitions.",
        lat: 65.6823,
        lon: -18.0915,
        address: "Strandgata 12, 600 Akureyri, Iceland",
        wikiTitle: "Akureyri",
        cityName: "Akureyri",
        price: 0, // Free exterior (events may charge)
    },
    // Keflavik, Iceland
    {
        name: "Viking World Museum",
        description: "Museum with a replica Viking ship and exhibits.",
        lat: 64.0087,
        lon: -22.5411,
        address: "Víkingabraut 1, 260 Reykjanesbær, Iceland",
        wikiTitle: "Viking_World_museum",
        cityName: "Keflavik",
        price: 12, // Approx. ISK 1,500 in 2023
    },
    {
        name: "Bridge Between Continents",
        description: "Symbolic bridge over a tectonic rift.",
        lat: 63.8674,
        lon: -22.6753,
        address: "Reykjanes Peninsula, Iceland",
        wikiTitle: "Bridge_Between_Continents",
        cityName: "Keflavik",
        price: 0, // Free access
    },
    {
        name: "Reykjanes Lighthouse",
        description: "Historic lighthouse with coastal views.",
        lat: 63.816,
        lon: -22.7049,
        address: "Reykjanesviti, Iceland",
        wikiTitle: "Reykjanes",
        cityName: "Keflavik",
        price: 0, // Free access
    },
    // Mykonos, Greece
    {
        name: "Mykonos Windmills",
        description: "Iconic 16th-century windmills with scenic views.",
        lat: 37.4447,
        lon: 25.3289,
        address: "Mykonos 846 00, Greece",
        wikiTitle: "Mykonos_Windmills",
        cityName: "Mykonos",
        price: 0, // Public monument
    },
    {
        name: "Little Venice",
        description: "Picturesque waterfront with colorful buildings.",
        lat: 37.4475,
        lon: 25.3267,
        address: "Chora, Mykonos 846 00, Greece",
        wikiTitle: "Mykonos",
        cityName: "Mykonos",
        price: 0, // Public area
    },
    {
        name: "Panagia Paraportiani",
        description: "Historic whitewashed church complex in Chora.",
        lat: 37.447,
        lon: 25.3258,
        address: "Chora, Mykonos 846 00, Greece",
        wikiTitle: "Panagia_Paraportiani",
        cityName: "Mykonos",
        price: 0, // Free entry
    },
];
