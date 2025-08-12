const enemiesData = [
    { id: 1, name: "Sallet", location: "CH1 Besaid Cave", floors: "7-9" },
    { id: 2, name: "Bicocette", location: "CH1 Thunder P.", floors: "10-12" },
    { id: 3, name: "Barbuta", location: "CH2 Besaid Cave", floors: "21-23" },
    { id: 4, name: "Armet", location: "CH2 Thunder P.", floors: "24-26" },
    { id: 5, name: "Bascinet", location: "CH3 MT. Gagazet", floors: "41-43" },
    { id: 6, name: "Heavy Sallet", location: "Hollow", floors: "50-59" },
    { id: 7, name: "Coyote", location: "CH1 Besaid", floors: "1-3" },
    { id: 8, name: "Wild Wolf", location: "CH1 Calm Lands", floors: "10-12" },
    { id: 9, name: "Killer Hound", location: "CH1 Bikanel", floors: "13-15" },
    { id: 10, name: "White Fang", location: "CH2 MT. Gagazet", floors: "16-19" },
    { id: 11, name: "Canis Major", location: "Bikanel", floors: "36-39" },
    { id: 12, name: "Lupus", location: "CH3 MT. Gagazet", floors: "47-49" },
    { id: 13, name: "Tindalos", location: "Farplane", floors: "61-64" },
    { id: 14, name: "Divebeak", location: "CH1 Floating Ruins", floors: "1-3" },
    { id: 15, name: "Peregrine", location: "CH2 Mi'ihen", floors: "21-23" },
    { id: 16, name: "Aquila", location: "Desert", floors: "44-46" },
    { id: 17, name: "Tentacles", location: "CH3 Macalania", floors: "36-39" },
    { id: 18, name: "Gecko", location: "CH1 Zanarkand", floors: "4-6" },
    { id: 19, name: "Agama", location: "CH1 Djose Road", floors: "13-15" },
    { id: 20, name: "Skink", location: "CH2 CL Ruins", floors: "21-23" },
    { id: 21, name: "Anole", location: "CH2 Zanarkand", floors: "24-26" },
    { id: 22, name: "Archaeothyris", location: "CH3 Djose Road", floors: "33-35" },
    { id: 23, name: "Lacerta", location: "Infinito", floors: "81+" },
    { id: 24, name: "Death Dauber", location: "CH1 Calm Lands", floors: "4-6" },
    { id: 25, name: "Assassin Bee", location: "CH3 Djose Road", floors: "21-23" },
    { id: 26, name: "Aculeate", location: "Desert", floors: "30-32" },
    { id: 27, name: "Vespa", location: "CH3 MT. Gagazet", floors: "36-39" },
    { id: 28, name: "Wasp Queen", location: "Hollow", floors: "50-59" },
    { id: 29, name: "Flan Azul", location: "CH1 Besaid", floors: "1-3" },
    { id: 30, name: "Flan Amarillo", location: "CH2 MT. Gagazet", floors: "10-12" },
    { id: 31, name: "Flan Palido", location: "CH1 Mi'ihen", floors: "13-15" },
    { id: 32, name: "Flan Blanco", location: "CH2 Moonflow", floors: "21-23" },
    { id: 33, name: "Flan Rojo", location: "CH3 Mi'ihen", floors: "36-39" },
    { id: 34, name: "Flan Azabache", location: "Chocobo", floors: "65-69" },
    { id: 35, name: "Purpurea", location: "CH1 Besaid", floors: "4-6" },
    { id: 36, name: "Leucophylla", location: "CH3 Calm Lands", floors: "24-26" },
    { id: 37, name: "Cephalotus", location: "CH3 Mi'ihen", floors: "30-32" },
    { id: 38, name: "Sahagin", location: "CH1 Besaid Cave", floors: "4-6" },
    { id: 39, name: "Sahagin Prince", location: "Infinito", floors: "30-32" },
    { id: 40, name: "Sahagin Chief", location: "Chocobo", floors: "50-59" },
    { id: 41, name: "Nashorn", location: "CH1 Calm Lands", floors: "1-3" },
    { id: 42, name: "Quadricorn", location: "CH1 Floating Ruins", floors: "1-3" },
    { id: 43, name: "Balivarha", location: "CH3 CL CoSF", floors: "41-43" },
    { id: 44, name: "Ahriman", location: "CH1 Floating Ruins", floors: "1-3" },
    { id: 45, name: "Fly Eye", location: "CH1 Mi'ihen", floors: "10-12" },
    { id: 46, name: "Vertigo", location: "CH2 Bevelle T.", floors: "13-15" },
    { id: 47, name: "Grim Gaze", location: "CH3 MT. Gagazet", floors: "41-43" },
    { id: 48, name: "Yellow Elemental", location: "CH1 Floating Ruins", floors: "4-6" },
    { id: 49, name: "White Elemental", location: "CH1 Zanarkand", floors: "7-9" },
    { id: 50, name: "Red Elemental", location: "CH1 Thunder P.", floors: "4-6" },
    { id: 51, name: "Gold Elemental", location: "CH1 Djose Road", floors: "10-12" },
    { id: 52, name: "Blue Elemental", location: "CH2 CL Ruins", floors: "33-35" },
    { id: 53, name: "Dark Elemental", location: "Farplane", floors: "61-64" },
    { id: 54, name: "Black Elemental", location: "Infinito", floors: "81+" },
    { id: 55, name: "Takouba", location: "CH1 Moonflow", floors: "7-9" },
    { id: 56, name: "Barong", location: "CH3 Bevelle T.", floors: "47-49" },
    { id: 57, name: "King Takouba", location: "Hollow", floors: "50-59" },
    { id: 58, name: "Protochimera", location: "CH1 Moonflow", floors: "16-19" },
    { id: 59, name: "Rhyos", location: "CH3 Macalania", floors: "41-43" },
    { id: 60, name: "Hrimthurs", location: "CH1 Bikanel", floors: "10-12" },
    { id: 61, name: "Gigas", location: "CH4 Haunt", floors: "30-32" },
    { id: 62, name: "Gug", location: "Farplane", floors: "70-74" },
    { id: 63, name: "Shantak", location: "CH1 Mi'ihen", floors: "13-15" },
    { id: 64, name: "Zu", location: "CH3 Mi'ihen", floors: "27-29" },
    { id: 65, name: "Rukh", location: "CH3 MT. Gagazet", floors: "50-59" },
    { id: 66, name: "Lesser Drake", location: "CH1 Thunder P.", floors: "7-9" },
    { id: 67, name: "Spine Drake", location: "CH3 Besaid Cave", floors: "36-39" },
    { id: 68, name: "Bolt Drake", location: "CH2 Thunder P.", floors: "24-26" },
    { id: 69, name: "Greater Drake", location: "CH3 MT. Gagazet", floors: "47-49" },
    { id: 70, name: "Elder Drake", location: "Infinito", floors: "Any" },
    { id: 71, name: "Kukulcan", location: "CH2 Bevelle U.", floors: "16-19" },
    { id: 72, name: "Gucumatz", location: "CH3 Thunder P.", floors: "33-35" },
    { id: 73, name: "Chac", location: "Infinito", floors: "81-84" },
    { id: 74, name: "Bully Cap", location: "CH1 Mi'ihen", floors: "13-15" },
    { id: 75, name: "Mycotoxin", location: "CH3 Mi'ihen", floors: "36-39" },
    { id: 76, name: "Mushroom Cloud", location: "Infinito", floors: "81+" },
    { id: 77, name: "Big Bully Cap", location: "Hollow", floors: "50-59" },
    { id: 78, name: "Haizhe", location: "CH1 Macalania", floors: "16-19" },
    { id: 79, name: "Deep Haizhe", location: "CH1 Macalania", floors: "24-26" },
    { id: 80, name: "Sand Worm", location: "CH3 Bikanel North", floors: "24-26" },
    { id: 81, name: "Earth Worm", location: "Farplane", floors: "65-69" },
    { id: 82, name: "Xiphactinus", location: "CH1 Macalania", floors: "13-15" },
    { id: 83, name: "Dinictus", location: "CH3 Macalania", floors: "41-43" },
    { id: 84, name: "Amorphous Gel", location: "CH1 Calm Lands", floors: "27-29" },
    { id: 85, name: "Protean Gel", location: "CH3 Macalania", floors: "75-79" },
    { id: 86, name: "Behemoth", location: "CH1 Zanarkand", floors: "7-9" },
    { id: 87, name: "Humbaba", location: "Thunder P.", floors: "36-39" },
    { id: 88, name: "Flame Dragon", location: "CH1 Besaid Cave", floors: "7-9" },
    { id: 89, name: "Zalamander", location: "CH4 Haunt", floors: "41-43" },
    { id: 90, name: "Claret Dragon", location: "Farplane", floors: "61-64" },
    { id: 91, name: "Ochu", location: "CH2 Thunder P.", floors: "4-6" },
    { id: 92, name: "Drowsy Ochu", location: "CH2 Mushroom RR", floors: "27-29" },
    { id: 93, name: "Flailing Ochu", location: "CH3 Zanarkand", floors: "47-49" },
    { id: 94, name: "Coeurl", location: "CH1 Besaid Cave", floors: "7-9" },
    { id: 95, name: "Queen Coeurl", location: "CH2 CL Ruins", floors: "27-29" },
    { id: 96, name: "Stalwart", location: "CH1 Thunder P.", floors: "4-6" },
    { id: 97, name: "Ironside", location: "CH3 Zanarkand", floors: "30-32" },
    { id: 98, name: "Malboro", location: "CH3 Thunder P.", floors: "24-26" },
    { id: 99, name: "Great Malboro", location: "Farplane", floors: "70-74" },
    { id: 100, name: "Bomb", location: "CH1 Floating Ruins", floors: "4-6" },
    { id: 101, name: "Detonator", location: "CH3 Bevelle T.", floors: "24-26" },
    { id: 102, name: "Volcano", location: "Farplane", floors: "65-69" },
    { id: 103, name: "Iron Giant", location: "CH1 Besaid", floors: "1-3" },
    { id: 104, name: "Gemini", location: "CH3 MT. Gagazet", floors: "21-23" },
    { id: 105, name: "Boris", location: "CH1 Floating Ruins", floors: "4-6" },
    { id: 106, name: "Aranea", location: "Infinito", floors: "81+" },
    { id: 107, name: "YSLS-Zero", location: "Infinito", floors: "10-12" },
    { id: 108, name: "YSLS-99", location: "CH3 Bevelle U.", floors: "21-23" },
    { id: 109, name: "Shell Shocker", location: "CH2 Moonflow", floors: "27-29" },
    { id: 110, name: "Concherer", location: "Infinito", floors: "81+" },
    { id: 111, name: "Georapella", location: "CH2 Bevelle U.", floors: "" },
    { id: 112, name: "Precepts Guard", location: "CH2 Bevelle U.", floors: "" },
    { id: 113, name: "Chocobo Eater", location: "CH2 Mi'ihen", floors: "16-19" },
    { id: 114, name: "Anything Eater", location: "Chocobo", floors: "75-79" },
    { id: 115, name: "Adamantoise", location: "CH3 Calm Lands", floors: "33-35" },
    { id: 116, name: "Adamantortoise", location: "Farplane", floors: "70-74" },
    { id: 117, name: "Ultima Weapon", location: "Chocobo", floors: "47-49" },
    { id: 118, name: "Omega Weapon", location: "Farplane", floors: "75-79" },
    { id: 119, name: "Paragon", location: "Infinito", floors: "100 boss" },
    { id: 120, name: "Guardian Beast", location: "CH1 Zanarkand", floors: "7-9" },
    { id: 121, name: "Azi Dahaka", location: "Farplane", floors: "70-74" },
    { id: 122, name: "Tonberry", location: "CH2 Mushroom RR", floors: "Any" },
    { id: 123, name: "Mega Tonberry", location: "Infinito", floors: "61+" },
    { id: 124, name: "Creeper", location: "Colony", floors: "65-69" },
    { id: 125, name: "Hug Bug", location: "Colony", floors: "65-69" },
    { id: 126, name: "Hexapod", location: "Colony", floors: "65-69" },
    { id: 127, name: "King Vermin", location: "Colony", floors: "65-69" },
    { id: 128, name: "Insect Matriarch", location: "Infinito", floors: "85-89" },
    { id: 129, name: "Critical Bug", location: "Infinito", floors: "85-89" },
    { id: 130, name: "Cactuar", location: "Hollow", floors: "47-59" },
    { id: 131, name: "Jumbo Cactuar", location: "Hollow", floors: "50-59" }
];

function organizeEnemiesByFloor() {
    const floorMap = new Map();
    
    enemiesData.forEach(enemy => {
        if (!enemy.floors || enemy.floors === "" || enemy.floors === "Any") {
            if (!floorMap.has("Other")) {
                floorMap.set("Other", []);
            }
            floorMap.get("Other").push(enemy);
            return;
        }
        
        let floors = [];
        if (enemy.floors.includes("+")) {
            // Handle "81+" format
            const start = parseInt(enemy.floors.replace("+", ""));
            floors = [start]; // Just use the starting floor for organization
        } else if (enemy.floors.includes("-")) {
            // Handle "7-9" format
            const [start, end] = enemy.floors.split("-").map(num => parseInt(num));
            floors = [start]; // Use starting floor for organization
        } else if (enemy.floors.includes("boss")) {
            // Handle special cases like "100 boss"
            const floorNum = parseInt(enemy.floors);
            floors = [floorNum];
        } else {
            // Single floor
            const floorNum = parseInt(enemy.floors);
            if (!isNaN(floorNum)) {
                floors = [floorNum];
            }
        }
        
        floors.forEach(floor => {
            if (!floorMap.has(floor)) {
                floorMap.set(floor, []);
            }
            floorMap.get(floor).push(enemy);
        });
    });
    
    const sortedFloors = Array.from(floorMap.keys()).sort((a, b) => {
        if (a === "Other") return 1;
        if (b === "Other") return -1;
        return a - b;
    });
    
    return { floorMap, sortedFloors };
}
