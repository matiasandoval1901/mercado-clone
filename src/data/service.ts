import { productsDB, categories } from './data';
import type { Product } from '../Types/typeProduct';

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

function getNextId(products: Product[]) {
  const ids = products.map((p) => p.id);
  return ids.length ? Math.max(...ids) + 1 : 1;
}

type FilterOptions = {
  filters?: Record<string, any>;
  sortBy?: string;
  category?: string;
  searchQuery?: string;
};

// FUNCIONES FUERA DEL OBJETO:
function applyFiltersAndSort(
  products: Product[],
  options: FilterOptions = {}
): Product[] {
  const {
    filters = {},
    sortBy = 'relevance',
    category = 'all',
    searchQuery = '',
  } = options;

  let filtered = [...products];

  if (category !== 'all') {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (searchQuery.trim()) {
    filtered = filtered.filter((product) =>
      product.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (filters.priceRange) {
    filtered = filtered.filter(
      (product) =>
        product.precio >= filters.priceRange[0] &&
        product.precio <= filters.priceRange[1]
    );
  }

  if (filters.inStock) {
    filtered = filtered.filter((product) => product.stock);
  }

  return sortProducts(filtered, sortBy);
}

function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.precio - b.precio);
    case 'price-high':
      return sorted.sort((a, b) => b.precio - a.precio);
    case 'name-az':
      return sorted.sort((a, b) => a.titulo.localeCompare(b.titulo));
    case 'name-za':
      return sorted.sort((a, b) => b.titulo.localeCompare(a.titulo));
    default:
      return sorted;
  }
}

// OBJETO SERVICE:
export const productService = {
 

  async getAllProducts(options = {}): Promise<Product[]> {
    await delay(200);

    // Obtener productos del localStorage si existen
    const stored = localStorage.getItem("productsDB");
    const localProducts: Product[] = stored ? JSON.parse(stored) : [];

  // Usar los productos del localStorage si existen, o fallback a productsDB
    let products = localProducts.length > 0 ? [...localProducts] : [...productsDB];

    products = applyFiltersAndSort(products, options);

    return products;
  },



  async CreateProduct(productData: { 
    title: string ,
    precio: number,
    metodo: string,
    category: string,
    stock: boolean,
    src: image,
  }): Promise<Product> {
    await delay(200);

    const stored = localStorage.getItem('productsDB');
    const products: Product[] = stored ? JSON.parse(stored) : [...productsDB];

    const newProduct: Product = {
      id: getNextId(products),
      titulo: productData.title,
      src: productData.src || 'https://via.placeholder.com/300',
      precio: productData.precio,
      metodo: productData.metodo,
      category: productData.category,
      stock: productData.stock,
    };

    products.push(newProduct);
    localStorage.setItem('productsDB', JSON.stringify(products));

    return newProduct;
  },

  async getProductById(id: string) {
    await delay(100);
  
    // Leer productos de localStorage si existen, sino usar productos por defecto
    const stored = localStorage.getItem("productsDB");
    const products: Product[] = stored ? JSON.parse(stored) : [...productsDB];

    const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  },


  

  async getCategories() {
    await delay(100);
    return [...categories];
  },

  async searchProducts(query: string, options = {}) {
    await delay(200);
    let products = !query
      ? [...productsDB]
      : productsDB.filter((product) =>
          product.titulo.toLowerCase().includes(query.toLowerCase())
        );

    products = applyFiltersAndSort(products, options);
    return products;
  },

  async getFilteredProducts(options = {}) {
    await delay(200);
    const {
      category = 'all',
      searchQuery = '',
      filters = {},
      sortBy = 'relevance',
    } = options;

    let products = applyFiltersAndSort(productsDB, {
      filters,
      sortBy,
      category,
      searchQuery,
    });

    return products;
  },

  async deleteProduct(id: number): Promise<void> {
    await delay(200);

    const stored = localStorage.getItem('productsDB');
    const products: Product[] = stored ? JSON.parse(stored) : [...productsDB];

    const updatedProducts = products.filter((product) => product.id !== id);

    localStorage.setItem('productsDB', JSON.stringify(updatedProducts));
  },


  getSortOptions() {
    return [
      { value: 'relevance', label: 'Relevancia' },
      { value: 'price-low', label: 'Precio: menor a mayor' },
      { value: 'price-high', label: 'Precio: mayor a menor' },
      { value: 'rating', label: 'Mejor valorados' },
      { value: 'newest', label: 'Más recientes' },
      { value: 'name-az', label: 'Nombre: A-Z' },
      { value: 'name-za', label: 'Nombre: Z-A' },
      { value: 'discount', label: 'Mayor descuento' },
      { value: 'popularity', label: 'Más populares' },
    ];
  },

  async getFilterOptions(category = 'all') {
    await delay(50);

    let products =
      category === 'all'
        ? [...productsDB]
        : productsDB.filter((product) => product.category === category);

    const colors = new Set();
    const brands = new Set();
    let minPrice = Infinity;
    let maxPrice = 0;

    products.forEach((product) => {
      minPrice = Math.min(minPrice, product.precio);
      maxPrice = Math.max(maxPrice, product.precio);
    });

    return {
      colors: Array.from(colors).sort(),
      brands: Array.from(brands).sort(),
      priceRange: [Math.floor(minPrice), Math.ceil(maxPrice)],
    };
  },
};
