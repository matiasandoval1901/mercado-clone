export type Product = {
    id: number;
    src: string;
    titulo: string;
    precio: string;
    metodo: string;
  
  };
  
  export type Response = {
    productrecommended: {
      categorytitle: string;
      product: Product []
    };
    
    mostsoldout:{
      categorytitle: string;
      product: Product[]
    };
  
    offers:{
      categorytitle: string;
      product: Product[]
    };
  
    searches:{
      categorytitle: string;
      product: Product[]
    };
  
  };