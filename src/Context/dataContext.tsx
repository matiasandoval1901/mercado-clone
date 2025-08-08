//Context es un lugar centralizado de toda info o funcionalidad para repartir todo a la app, 
//programar funcionalidades, data, productos 
//ahora podemos usarlo en todos los componentes de la app

import { createContext, useState} from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../Types/typeProduct'; //importamos las propiedades de product

export type DataContextType = {
  allproducts: Product[];
  setAllproducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  countproduct: number;
  setCountproduct: React.Dispatch<React.SetStateAction<number>>;
};

//Creamos el contexto con un valor por defecto (vacío, pero tipado)
export const dataContext = createContext<DataContextType>({} as DataContextType);


type DataProviderProps = {
  children: ReactNode;
};

//estados que se van a compartir globalmente
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
// children hace referencia a todo el contenido que está envuelto dentro del componente DataProvider en main
//asi todos los componentees pueden acceder a los estados