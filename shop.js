window.onload = function(){
    const shopSection = document.getElementById("shop");

    products.forEach(product => {
        const itemBox = document.createElement("div");
        itemBox.className = "item-box";

        itemBox.onclick = function(){
            location.href = `product.html?id=${product.id}`;
        };

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        itemBox.appendChild(img);

        const name = document.createElement("p");
        name.textContent = product.name;
        itemBox.appendChild(name);

        const button = document.createElement("button");
        button.textContent = "View Item";
        button.onclick = function(event){
            event.stopPropagation();
            location.href = `product.html?id=${product.id}`;
        };
        itemBox.appendChild(button);

        shopSection.appendChild(itemBox);
    });
};

const products = [
    {
        id: "0001",
        name: "Enchanted Grimoire",
        image: "image/book.png",
        model: "/model/a.glb",
        description: "A floating book radiating arcane light.",
        price: "120 Gold",
        textures:{
            color: "model/Book_baseColor.png",
            normal: "model/Book_normal.png",
            metal: "model/Book_metallicRoughness.png",
            roughness: "model/Book_metallicRoughness.png",
            emissive: "model/Book_emissive.png",
            link: "https://sketchfab.com/3d-models/book-of-eternity-1d79a1970e09406ebda7e512ea8e0c6c",
        }
    },

    {
        id: "0002",
        name: "Blazing Emberblade",
        image: "image/sword.png",
        model: "model/firesword.glb",
        description: "A sword with a molten core, forged in dragonfire.",
        price: "150 Gold",
        textures:{
            color: "model/Sword_Color.png",
            normal: "model/Sword_normal.png",
            metal: "model/Sword_metallicRoughness.png",
            roughness: "model/Sword_metallicRoughness.png",
            emissive: "model/Sword_emissive.png",
            link: "https://sketchfab.com/3d-models/autumn-sword-28c2c7262e334e529709fb88e019a716",
        }
    },

    {
        id: "0003",
        name: "Crystal of Aether",
        image: "image/crystal.png",
        model: "model/crystal.glb",
        description: "A pure, glowing crystal said to be a fragment of the stars.",
        price: "100 GOLD",
        textures:{
            color: "model/crystal_color.jpg",
            normal: "model/crystal_normal.png",
            metal: "model/crystal_metallicRoughness.png",
            roughness: "model/crystal_metallicRoughness.png",
            emissive: "model/crystal_emissive.jpg",
            link: "https://sketchfab.com/3d-models/magic-crystals-f20b3376ef9a4dff8ad27f1402087c52",
        }
    },

    {
        id: "0004",
        name: "Shadowfang Dagger",
        image: "image/dagger.png",
        model: "model/dagger.glb",
        description: "This dark blade blends into shadows and strikes without a sound.",
        price: "90 GOLD",
        textures:{
            color: "model/dagger_color.png",
            normal: "model/dagger_normal.png",
            metal: "model/dagger_metallicRoughness.png",
            roughness: "model/dagger_metallicRoughness.png",
            emissive: "model/dagger_emissive.png",
            link: "https://sketchfab.com/3d-models/assassin-dagger-3049393f6c8e491980e8a7b0fd065449",
        }
    },

    {
        id: "0005",
        name: "Mystic Elixir",
        image: "image/elixir.png",
        model: "model/potion.glb",
        description: "A swirling potion that boosts magical focus and regenerates mana.",
        price: "70 GOLD",
        textures:{
            color: "model/potion_color.png",
            normal: "model/potion_normal.png",
            metal: "model/potion_metalicRoughness.png",
            roughness: "model/potion_metalicRoughness.png",
            emissive: "model/potion_emissive.png",
            link: "https://sketchfab.com/3d-models/stylized-magic-potion-aa65bedfd27444f885ea8ded658a33c5",
        }
    },

    {
        id: "0006",
        name: "Celestial Staff",
        image: "image/staff.png",
        model: "model/staff.glb",
        description: "Wielding the power of constellations, this staff channels cosmic energy.",
        price: "160 GOLD",
        textures:{
            color: "model/staff_color.png",
            normal: "model/potion_normal.png",
            metal: "",
            roughness: "model/staff_metalicRoughness.png",
            emissive: "model/staff_color.png",
            link: "https://sketchfab.com/3d-models/crystal-staff-a5918cf44d7548acae741bdcacb7009a",
        }
    },

    {
        id: "0007",
        name: "War Axe",
        image: "image/axe.png",
        model: "model/axe.glb",
        description: " A brutal axe forged in volcanic flame, said to cleave both armor and bone with ease.",
        price: "150 GOLD",
        textures:{
            color: "model/axe_color.jpg",
            normal: "model/axe_normal.png",
            metal: "model/axe_metalicRoughness.png",
            roughness: "model/axe_metalicRoughness.png",
            emissive: "model/axe_emissive.jpg",
            link: "https://sketchfab.com/3d-models/fantasy-axe-b7f7d987c60045078b5252192d397e88",
        }
    },

    {
        id: "0008",
        name: "Katana",
        image: "image/katana.png",
        model: "model/katana.glb",
        description: " A blade forged in moonless voids, it strikes with silent precision, cutting through shadow and soul alike.",
        price: "115 GOLD",
        textures:{
            color: "model/katana_color.png",
            normal: "model/katana_normal.png",
            metal: "model/katana_metalicRoughness.png",
            roughness: "model/katana_metalicRoughness.png",
            emissive: "",
            link: "https://sketchfab.com/3d-models/katana-aa14db650ba1487bb68505e1faa92c4b",
        }
    },

    {
        id: "0009",
        name: "Ice Sword",
        image: "image/ice.png",
        model: "model/ice.glb",
        description: "This icy longsword leaves a trail of frost with every slash, freezing enemies where they stand.",
        price: "135 GOLD",
        textures:{
            color: "model/ice_color.png",
            normal: "",
            metal: "model/katana_metalicRoughness.png",
            roughness: "model/katana_metalicRoughness.png",
            emissive: "model/ice_emissive.png",
            link: "https://sketchfab.com/3d-models/ice-sword-85f4deecea8f4c66b90cb3d6a313885b",
        }
    },

    {
        id: "0010",
        name: "Elven Dagger",
        image: "image/elven.png",
        model: "model/elven.glb",
        description: "Lightweight and impossibly sharp, this dagger is a favorite among elven assassins.",
        price: "90 GOLD",
        textures:{
            color: "model/elven_color.png",
            normal: "model/elven_normal.png",
            metal: "model/elven_metalicRoughness.png",
            roughness: "model/elven_metalicRoughness.png",
            emissive: "model/elven_emissive.png",
            link: "https://sketchfab.com/3d-models/elven-blade-29298f049287430fa62d4f0269086cfd",
        }
    },
];