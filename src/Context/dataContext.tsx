//Context es un lugar centralizado de toda info o funcionalidad para repartir todo a la app, 
//programar funcionalidades, data, productos 
//ahora podemos usarlo en todos los componentes de la app

// src/components/Context/dataContext.tsx

import { createContext, useState} from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../Types/typeProduct';

// 1. Definimos la forma del contexto
export type DataContextType = {
  allproducts: Product[];
  setAllproducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  countproduct: number;
  setCountproduct: React.Dispatch<React.SetStateAction<number>>;
};

// 2. Creamos el contexto con un valor por defecto (vacío, pero tipado)
export const dataContext = createContext<DataContextType>({} as DataContextType);

// 3. Props del provider (debe aceptar children)
type DataProviderProps = {
  children: ReactNode;
};

// 4. El componente proveedor del contexto
const DataProvider = ({ children }: DataProviderProps) => {
  const [allproducts, setAllproducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [countproduct, setCountproduct] = useState<number>(0);

  return (
    <dataContext.Provider
      value={{
        allproducts,
        setAllproducts,
        total,
        setTotal,
        countproduct,
        setCountproduct,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;


//todos los valores que ponfamos aca es lo que vamos a repartir en toda la app