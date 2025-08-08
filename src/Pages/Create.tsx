import { useMutation } from "@tanstack/react-query";
import { productService } from "../data/service";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom';




export default function CreateForm () {
    const [title , SetTitle] = useState ('');
    const [precio, SetPrecio] = useState ('')
    const [category, setCategory] = useState('recommended');
    const [stock, setStock] = useState(true);
    const [image, setImage] = useState<File | null>(null);
    const [metodo, SetMetodo] = useState('')
    const navigate = useNavigate();

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setImage(file);
      }
    };

    {image && (
      <img
        src={URL.createObjectURL(image)}
        alt="Vista previa"
        style={{ width: 150, marginTop: 10 }}
      />
    )}



    const CreateProductMutation = useMutation ({
        mutationFn : productService.CreateProduct,
        onSuccess: () => {
            SetTitle ('');
            SetPrecio('')
            setCategory('recommended');
            setStock(true);
            navigate('/');
            SetMetodo('');
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        CreateProductMutation.mutate({
            title,
            precio: Number(precio),
            category,
            stock,
            src: image,
            metodo,
        });
    };

    return (
    <div>
        <label htmlFor="image">Imagen (URL)</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
        />
      <h2>¡Hola! ¿Qué quieres vender?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título:</label>
        <input
          id="titulo"
          type="text"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
          required
        />

        <label htmlFor="precio">Precio:</label>
        <input
          id="precio"
          type="number"
          value={precio}
          onChange={(e) => SetPrecio(e.target.value)}
          required
        />
        <label htmlFor="metodo">Metodos de pago:</label>
        <input
          id="metodo"
          type="string"
          value={metodo}
          onChange={(e) => SetMetodo(e.target.value)}
          required
        />

        <label htmlFor="category">Categoría:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="recommended">Recomendados</option>
          <option value="soldout">Más vendidos</option>
          <option value="offers">Ofertas</option>
          <option value="searches">Según tus búsquedas</option>
        </select>

        <label htmlFor="stock">
          ¿Hay stock?
          <input
            id="stock"
            type="checkbox"
            checked={stock}
            onChange={(e) => setStock(e.target.checked)}
          />
        </label>

          <button type="submit" disabled={CreateProductMutation.isPending}>
            {CreateProductMutation.isPending ? 'Creando...' : 'Crear'}
          </button>
      </form>
      <Link to={"/"}>Ir a Inicio</Link>
    </div>
  );
}