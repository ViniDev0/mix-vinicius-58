
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Vela de Soja Lavanda',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1602874205527-0815546e6bac?auto=format&fit=crop&q=80',
    category: 'Velas',
    description: 'Vela artesanal feita de cera de soja 100% natural com aroma de lavanda para momentos de relaxamento.',
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: 'Luminária de Mesa Nórdica',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80',
    category: 'Luminárias',
    description: 'Luminária de mesa com base em madeira de reflorestamento e cúpula em tecido orgânico. LED de baixo consumo incluso.',
    isFeatured: true
  },
  {
    id: 3,
    name: 'Vaso Cerâmica Minimalista',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80',
    category: 'Vasos',
    description: 'Vaso cerâmico feito à mão com design minimalista para plantas pequenas e médias.',
    isNew: true,
    isFeatured: true
  },
  {
    id: 4,
    name: 'Difusor de Ambiente Âmbar',
    price: 85.90,
    image: 'https://images.unsplash.com/photo-1596046502395-f41f5e9de915?auto=format&fit=crop&q=80',
    category: 'Aromas',
    description: 'Difusor de ambiente com óleo essencial natural e varetas de bambu. Fragrância âmbar com notas cítricas.',
    isFeatured: true
  },
  {
    id: 5,
    name: 'Conjunto Velas Flutuantes',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1605651202774-7d9ef66770e6?auto=format&fit=crop&q=80',
    category: 'Velas',
    description: 'Conjunto com 5 velas flutuantes de cera de abelha pura, ideais para decoração de mesa ou banheira.'
  },
  {
    id: 6,
    name: 'Luminária Pendente Bamboo',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80',
    category: 'Luminárias',
    description: 'Luminária pendente feita em bambu natural trançado à mão. Design leve que proporciona iluminação suave e aconchegante.'
  },
  {
    id: 7,
    name: 'Set de Vasos Geométricos',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80',
    category: 'Vasos',
    description: 'Conjunto com 3 vasos geométricos em concreto ecológico, disponíveis em cores neutras para combinar com qualquer ambiente.'
  },
  {
    id: 8,
    name: 'Prateleira Flutuante de Madeira',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80',
    category: 'Decoração',
    description: 'Prateleira flutuante feita de madeira de reflorestamento com acabamento natural. Perfeita para expor objetos decorativos.'
  }
];
