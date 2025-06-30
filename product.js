const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const bient = new THREE.DirectionalLight(0xffffff, 2);
bient.position.set(0, 10, 25);

scene.add(bient);

const manager = new THREE.LoadingManager();

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    const progress = (itemsLoaded / itemsTotal) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-count').textContent = progress + '%';
};

manager.onLoad = function () {
    document.getElementById('loading-screen').style.display = 'none';
};

const modal = document.getElementById('modal');
const buy = document.getElementById('buy');

buy.onclick = function () {
    modal.style.display = 'flex';
    document.body.classList.add("modal-open");
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const product = products.find(p => p.id === id);

if(product){
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.price;
    const linkElement = document.getElementById("link");
    linkElement.href = product.textures.link;
    linkElement.textContent = "View on Sketchfab";

    const texture = new THREE.TextureLoader(manager);
    const textures = product.textures;
    const colorModel = texture.load(textures.color);
    const metalModel = texture.load(textures.metal);
    const roughModel = texture.load(textures.roughness);
    const normalModel = texture.load(textures.normal);
    const emissiveModel = texture.load(textures.emissive);

    let object;

    const Gloader = new THREE.GLTFLoader(manager);

Gloader.load(product.model, (glb) => {
    object = glb.scene;

    object.scale.set(.5, .5, .5);

    object.traverse((child) => {
        if (child.isMesh) {
            let materialColor = {};

            colorModel.flipY = false;
            normalModel.flipY = false;
            metalModel.flipY = false;
            emissiveModel.flipY = false;
            roughModel.flipY = false;

            if (child.name.toLowerCase().includes('book')) {
                materialColor = {
                    map: colorModel,
                    normalMap: normalModel,
                    metalnessMap: metalModel,
                    roughnessMap: roughModel,
                    emissiveMap: emissiveModel,
                    emissiveIntensity: 5,
                    emissive: 0xff0000ff,
                    metalness: 1,
                    roughness: 1,
                    alpha: 1,
                };
            };
            child.material = new THREE.MeshStandardMaterial(materialColor);
        };
    });

    scene.add(object);
});

let isDragging = false;
let previouseMouseX = 0;
let previouseMouseY = 0;

renderer.domElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    previouseMouseX = event.clientX;
    previouseMouseY = event.clientY;
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previouseMouseX;
    const deltaY = event.clientY - previouseMouseY;

    previouseMouseX = event.clientX;
    previouseMouseY = event.clientY;

    object.rotation.y += deltaX * 0.01;
    object.rotation.x += deltaY * 0.01;
});

renderer.domElement.addEventListener('wheel', (event) => {
    event.preventDefault();

    camera.position.z += event.deltaY * 0.01;

    camera.position.z = THREE.MathUtils.clamp(camera.position.z, 10, 50);
});

renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
});

function anim() {
    requestAnimationFrame(anim);

    renderer.render(scene, camera);
}

anim();
}

const addtocart = document.getElementById("add-to-cart");

addtocart.onclick = function(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    if(!confirm("Item added to cart!")){
    }else if (confirm("Go to cart?")){
        window.location.href='cart.html';
    }
    
}