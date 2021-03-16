
interface Content {name:string,id?:number,precent:number,entityName?:string};

interface LV{
    name:string,
    requiredBlock:number,
    content:Content[],
}

export const data:LV[] = [
    {
        name:`새로운 시작`,
        requiredBlock: 0,
        content:[
            {
                name: "log",
                id: 0,
                entityName: "chicken",
                precent: 100
            },
            {
                name: "log",
                id: 1,
                precent: 8
            },
            {
                name: "log",
                id: 2,
                precent: 8
            },
            {
                name: "log",
                id: 3,
                precent: 8
            },
            {
                name: "log2",
                id: 0,
                precent: 8
            },
            {
                name:"leaves",
                id:0,
                precent: 5
            },
            {
                name:"leaves",
                id:0,
                precent: 5
            },
            {
                name:"grass",
                precent: 20
            },
            {
                name:"dirt",
                precent:30
            },
        ]
    },
    {
        name: `얕은 지하`,
        requiredBlock: 200,
        content:[
            {
                name: "stone",
                precent: 27,
            },
            {
                name: "stone",
                entityName: "zombie",
                precent: 3,
            },
            {
                name: "stone", // 안산암
                id: 5,
                precent: 5,
            },
            {
                name: "stone", // 섬록암
                id: 3,
                precent: 5,
            },
            {
                name: "cobblestone",
                precent: 30,
            },
            {
                name: "cobblestone",
                entityName: "zombie",
                precent: 5,
            },
            {
                name: "iron_ore",
                precent: 10,
            },
            {
                name: "coal_ore",
                precent: 5,
            },
        ]
    },
    {
        name: `모래 사막`,
        requiredBlock: 300,
        content:[
            {
                name: "sand",
                precent: 40,
            },
            {
                name: "sand",
                id: 1,
                precent: 20,
            },
            {
                name: "sandstone",
                id: 1,
                precent: 5,
            },
            {
                name: "red_sandstone",
                id: 1,
                precent: 5,
            },
            {
                name: "sand",
                entityName: "husk",
                precent: 5,
            },
            {
                name: "gravel",
                precent: 25,
            },
        ]
    },
    {
        name: `심층 지하`,
        requiredBlock: 500,
        content:[
            {
                name: "stone",
                precent: 21,
            },
            {
                name: "stone",
                entityName: "zombie",
                precent: 4,
            },
            {
                name: "stone",
                entityName: "spider",
                precent: 4,
            },
            {
                name: "stone",
                entityName: "creeper",
                precent: 3,
            },
            {
                name: "stone", // 안산암
                id: 5,
                precent: 10,
            },
            {
                name: "stone", // 섬록암
                id: 3,
                precent: 10,
            },
            {
                name: "cobblestone",
                precent: 15,
            }, // 60
            {
                name: "coal_ore",
                precent: 7,
            },
            {
                name: "iron_ore",
                precent: 7,
            },
            {
                name: "gold_ore",
                precent: 7,
            },
            {
                name: "lapis_ore",
                precent: 7,
            },
            {
                name: "redstone_ore",
                precent: 7,
            },

        ]
    },
    {
        name: `HELL`,
        requiredBlock: 800,
        content: [
            {
                name: "netherrack",
                precent: 15,
            },
            {
                name: "netherrack",
                entityName: "zombie_pigman",
                precent: 1,
            },
            {
                name: "netherrack",
                entityName: "piglin",
                precent: 1,
            },
            {
                name: "warped_nylium",
                precent: 9,
            },
            {
                name: "crimson_nylium",
                precent: 9,
            },
            {
                name: "bone_block",
                precent:5
            },
            {
                name: "quartz_ore",
                precent: 8,
            },
            {
                name: "nether_gold_ore",
                precent: 18,
            },
            {
                name: "glowstone",
                precent: 10,
            },
            {
                name: "warped_stem",
                precent: 10,
            },
            {
                name: "warped_wart_block",
                precent: 2
            },
            {
                name: "crimson_stem",
                precent: 10
            },
            {
                name: "crimson_hyphae",
                precent: 2
            }

        ]
    },
]