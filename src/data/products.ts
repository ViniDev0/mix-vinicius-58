
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  description?: string;
  isPromo?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Banana Prata',
    price: 5.99,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80',
    category: 'Frutas',
    description: 'Banana prata fresca, ideal para consumo direto ou vitaminas.',
    isPromo: true,
    isFeatured: true
  },
  {
    id: 2,
    name: 'Maçã Gala',
    price: 8.99,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80',
    category: 'Frutas',
    description: 'Maçã gala doce e crocante, perfeita para lanches saudáveis.',
    isFeatured: true
  },
  {
    id: 3,
    name: 'Alface Crespa',
    price: 2.99,
    unit: 'un',
    image: 'https://images.unsplash.com/photo-1621844622175-9d741df13ef9?auto=format&fit=crop&q=80',
    category: 'Verduras',
    description: 'Alface crespa fresca, cultivada sem agrotóxicos.',
    isPromo: true,
    isFeatured: true
  },
  {
    id: 4,
    name: 'Café Especial',
    price: 19.90,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1581927692308-be9e43b4d860?auto=format&fit=crop&q=80',
    category: 'Mercearia',
    description: 'Café especial torrado e moído na hora. Aroma intenso e corpo aveludado.',
    isFeatured: true
  },
  {
    id: 5,
    name: 'Cenoura Orgânica',
    price: 4.50,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1600315832300-6ecca3099d91?auto=format&fit=crop&q=80',
    category: 'Legumes',
    description: 'Cenoura orgânica cultivada por produtores locais, rica em vitamina A.'
  },
  {
    id: 6,
    name: 'Detergente Ecológico',
    price: 8.99,
    unit: '500ml',
    image: 'https://images.unsplash.com/photo-1616011445121-80c58c261a41?auto=format&fit=crop&q=80',
    category: 'Limpeza',
    description: 'Detergente biodegradável, rende mais e protege o meio ambiente.'
  },
  {
    id: 7,
    name: 'Ovos Caipira',
    price: 12.90,
    unit: 'dz',
    image: 'https://images.unsplash.com/photo-1566851474580-456dc781e5e5?auto=format&fit=crop&q=80',
    category: 'Mercearia',
    description: 'Ovos de galinha caipira, produção local e sustentável.'
  },
  {
    id: 8,
    name: 'Pão Integral',
    price: 6.99,
    unit: 'un',
    image: 'https://images.unsplash.com/photo-1546538994-4f15d0aa966f?auto=format&fit=crop&q=80',
    category: 'Padaria',
    description: 'Pão integral artesanal, feito com fermentação natural e grãos selecionados.'
  }
];

// Categories with their respective icons (can be used for menu navigation)
export const categories = [
  { id: 1, name: 'Frutas', icon: 'apple' },
  { id: 2, name: 'Verduras', icon: 'leaf' },
  { id: 3, name: 'Legumes', icon: 'carrot' },
  { id: 4, name: 'Mercearia', icon: 'package' },
  { id: 5, name: 'Limpeza', icon: 'spray-can' },
  { id: 6, name: 'Padaria', icon: 'bread' },
  { id: 7, name: 'Bebidas', icon: 'beer' },
  { id: 8, name: 'Congelados', icon: 'snowflake' }
];
