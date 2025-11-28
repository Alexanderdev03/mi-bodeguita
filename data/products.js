export const products = [
    // Abarrotes
    {
        id: 1,
        name: "Aceite Vegetal 1-2-3 1L",
        price: 35.50,
        originalPrice: 42.00,
        image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Abarrotes"
    },
    {
        id: 2,
        name: "Arroz Extra Grano Largo 1kg",
        price: 18.90,
        originalPrice: 22.00,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Abarrotes"
    },
    {
        id: 9,
        name: "Frijol Negro Querétaro 900g",
        price: 24.50,
        originalPrice: 28.00,
        image: "https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Abarrotes"
    },
    {
        id: 10,
        name: "Atún en Agua Tuny 140g",
        price: 17.50,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1599020792689-9fdeefad4831?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Abarrotes"
    },

    // Lácteos
    {
        id: 3,
        name: "Leche Entera Santa Clara 1L",
        price: 26.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Lácteos"
    },
    {
        id: 4,
        name: "Huevo Blanco San Juan 30 pzas",
        price: 82.00,
        originalPrice: 95.00,
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Lácteos" // Often grouped here or separate
    },
    {
        id: 11,
        name: "Yogurt Griego Natural 1kg",
        price: 85.00,
        originalPrice: 98.00,
        image: "https://images.unsplash.com/photo-1488477181946-6428a029177b?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Lácteos"
    },

    // Limpieza
    {
        id: 5,
        name: "Papel Higiénico Pétalo 12 rollos",
        price: 65.00,
        originalPrice: 78.00,
        image: "https://images.unsplash.com/photo-1584553153336-b3c37c47f9cc?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Limpieza"
    },
    {
        id: 6,
        name: "Detergente en Polvo Ace 5kg",
        price: 145.00,
        originalPrice: 160.00,
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Limpieza"
    },
    {
        id: 12,
        name: "Cloro Cloralex 2L",
        price: 28.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1584641911870-1c2804294306?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Limpieza"
    },

    // Frutas y Verduras
    {
        id: 7,
        name: "Jitomate Saladet kg",
        price: 12.90,
        originalPrice: 24.90,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Frutas y Verduras"
    },
    {
        id: 8,
        name: "Plátano Chiapas kg",
        price: 19.90,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Frutas y Verduras"
    },
    {
        id: 13,
        name: "Aguacate Hass kg",
        price: 58.00,
        originalPrice: 75.00,
        image: "https://images.unsplash.com/photo-1523049673856-6468baca292f?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Frutas y Verduras"
    },

    // Mascotas
    {
        id: 14,
        name: "Alimento Perro Pedigree 4kg",
        price: 210.00,
        originalPrice: 245.00,
        image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Mascotas"
    },
    {
        id: 15,
        name: "Sobres Whiskas 85g",
        price: 11.50,
        originalPrice: 13.00,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Mascotas"
    },

    // Farmacia
    {
        id: 16,
        name: "Paracetamol 500mg 10 tabs",
        price: 15.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Farmacia"
    },
    {
        id: 17,
        name: "Alcohol Etílico 70% 500ml",
        price: 35.00,
        originalPrice: 45.00,
        image: "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Farmacia"
    },

    // Panadería
    {
        id: 18,
        name: "Pan Blanco Bimbo Grande",
        price: 42.00,
        originalPrice: 48.00,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Panadería"
    },
    {
        id: 19,
        name: "Donas de Chocolate 6 pzas",
        price: 38.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=300&h=300",
        category: "Panadería"
    }
];

export const categories = [
    { id: 1, name: "Abarrotes", icon: "ShoppingBasket", color: "#e3f2fd" },
    { id: 2, name: "Frutas y Verduras", icon: "Apple", color: "#e8f5e9" },
    { id: 3, name: "Lácteos", icon: "Milk", color: "#f3e5f5" },
    { id: 4, name: "Limpieza", icon: "SprayCan", color: "#e0f7fa" },
    { id: 5, name: "Mascotas", icon: "Dog", color: "#fff3e0" },
    { id: 6, name: "Farmacia", icon: "Pill", color: "#ffebee" },
    { id: 7, name: "Panadería", icon: "Croissant", color: "#fff8e1" },
    { id: 8, name: "Bebés", icon: "Baby", color: "#fce4ec" },
];
