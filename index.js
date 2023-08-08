class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        
        if (!(title && description && price && thumbnail && code && stock)) {
            console.log("Todos los campos son obligatorios");
            return;
        }

        
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log("El código ya existe");
            return;
        }

        
        const newProduct = {
            id: this.nextId,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.products.push(newProduct);
        this.nextId++;
        console.log("Producto agregado exitosamente");
    }

    getProducts() {
        return this.products;
    }

    getProductById(product_id) {
        const product = this.products.find(product => product.id === product_id);
        if (product) {
            return product;
        }
        console.log("Producto no encontrado");
        return null;
    }
}


const manager = new ProductManager();

manager.addProduct("Producto 1", "Descripción del producto 1", 100, "imagen1.jpg", "P001", 10);
manager.addProduct("Producto 2", "Descripción del producto 2", 150, "imagen2.jpg", "P002", 5);

const products = manager.getProducts();
console.log("Lista de productos:");
console.log(products);

const productId = 2;
const product = manager.getProductById(productId);
if (product) {
    console.log(`Producto encontrado: ${JSON.stringify(product)}`);
}





