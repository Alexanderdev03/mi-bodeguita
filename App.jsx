import React, { useState } from 'react';
import { ShoppingBasket, Apple, Milk, SprayCan, ChevronRight, Trash2, Plus, Minus, Dog, Pill, Croissant, Baby, Package, Clock, CheckCircle } from 'lucide-react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ProductCard } from './components/ProductCard';
import { ProductDetails } from './components/ProductDetails';
import { LoginModal } from './components/LoginModal';
import { BarcodeScanner } from './components/BarcodeScanner';
import { products, categories } from './data/products';

const iconMap = {
  ShoppingBasket,
  Apple,
  Milk,
  SprayCan,
  Dog,
  Pill,
  Croissant,
  Baby
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleFavorite = (product) => {
    setFavorites(prev => {
      const isFav = prev.some(item => item.id === product.id);
      if (isFav) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setActiveTab('home'); // Switch to home to show filtered list
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const handleScan = (product) => {
    setIsScanning(false);
    setSelectedProduct(product);
  };

  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: Math.floor(Math.random() * 1000000),
      date: new Date().toLocaleDateString(),
      items: [...cart],
      total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
      status: 'En camino'
    };

    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setActiveTab('profile'); // Redirect to profile to see the order
    alert('¡Pedido realizado con éxito!');
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!user) {
    return <LoginModal onLogin={setUser} />;
  }

  return (
    <div className="app-container">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userName={user}
        onOpenScanner={() => setIsScanning(true)}
      />

      <main style={{ padding: '1rem', paddingBottom: '80px', paddingTop: '90px', flex: 1 }}>
        {activeTab === 'home' && (
          <>
            {/* Filter Status */}
            {(selectedCategory || searchQuery) && (
              <div style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#e8f5e9',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-dark)' }}>
                  {selectedCategory ? `Categoría: ${selectedCategory}` : 'Resultados de búsqueda'}
                </span>
                <button
                  onClick={clearFilters}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            {/* Departments Scroller - Only show if no category selected */}
            {!selectedCategory && !searchQuery && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                  <h3>Departamentos</h3>
                </div>
                <div className="hide-scrollbar" style={{
                  display: 'flex',
                  gap: '1rem',
                  overflowX: 'auto',
                  paddingBottom: '0.5rem'
                }}>
                  {categories.map(category => {
                    const Icon = iconMap[category.icon] || ShoppingBasket;
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.name)}
                        style={{
                          minWidth: '80px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <div style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: category.color || '#fff3e0',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#333'
                        }}>
                          <Icon size={28} />
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Offers Banner - Only show on main home view */}
            {!selectedCategory && !searchQuery && (
              <div style={{
                backgroundColor: 'var(--color-primary)',
                borderRadius: 'var(--radius)',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h2 style={{ color: 'var(--color-secondary)', fontStyle: 'italic' }}>¡OFERTAS!</h2>
                  <p style={{ fontSize: '0.9rem' }}>Los mejores precios</p>
                </div>
                <div style={{
                  backgroundColor: 'white',
                  color: 'var(--color-primary)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}>
                  Ver todo
                </div>
              </div>
            )}

            {/* Product Grid */}
            <h3 style={{ marginBottom: '1rem' }}>
              {selectedCategory ? selectedCategory : (searchQuery ? 'Resultados' : 'Recomendados')}
            </h3>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <p>No se encontraron productos.</p>
                <button
                  onClick={clearFilters}
                  className="btn btn-primary"
                  style={{ marginTop: '1rem', width: 'auto' }}
                >
                  Ver todos los productos
                </button>
              </div>
            ) : (
              <div className="grid-2">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={addToCart}
                    isFavorite={favorites.some(fav => fav.id === product.id)}
                    onToggleFavorite={() => toggleFavorite(product)}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'categories' && (
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Todos los Departamentos</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {categories.map(category => {
                const Icon = iconMap[category.icon] || ShoppingBasket;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.name)}
                    style={{
                      backgroundColor: 'white',
                      padding: '1.5rem',
                      borderRadius: 'var(--radius)',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)'
                    }}>
                      <Icon size={24} />
                    </div>
                    <span style={{ fontWeight: '600', color: '#333' }}>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'cart' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Tu Carrito</h2>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', marginTop: '3rem', color: '#888' }}>
                <ShoppingBasket size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p>Tu carrito está vacío</p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '1rem', width: 'auto' }}
                  onClick={() => setActiveTab('home')}
                >
                  Ir a comprar
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{
                      backgroundColor: 'white',
                      padding: '1rem',
                      borderRadius: 'var(--radius)',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      gap: '1rem'
                    }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: '#f9f9f9', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                          <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} style={{ color: '#999' }}>
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-primary" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                          ${item.price.toFixed(2)}
                        </p>

                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          backgroundColor: '#f5f5f5',
                          borderRadius: '8px',
                          padding: '2px'
                        }}>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            style={{ padding: '4px 8px' }}
                          >
                            <Minus size={14} />
                          </button>
                          <span style={{ padding: '0 8px', fontWeight: '600', fontSize: '0.9rem' }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            style={{ padding: '4px 8px' }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon */}
                <div style={{ marginTop: '2rem', backgroundColor: 'white', padding: '1rem', borderRadius: 'var(--radius)' }}>
                  <h4 style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Cupón de descuento</h4>
                  <div className="flex-between" style={{ gap: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="EJ. BODEGA10"
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '0.9rem'
                      }}
                    />
                    <button style={{
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      Aplicar
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <div style={{ marginTop: '1rem', backgroundColor: 'white', padding: '1rem', borderRadius: 'var(--radius)' }}>
                  <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#666' }}>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex-between" style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#666' }}>Envío</span>
                    <span className="text-primary" style={{ fontWeight: 'bold' }}>Por confirmar</span>
                  </div>
                  <div className="flex-between" style={{ borderTop: '1px solid #eee', paddingTop: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>${cartTotal.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={placeOrder}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--color-secondary)',
                      color: 'var(--color-primary)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-pill)',
                      border: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
                    }}
                  >
                    Realizar Pedido
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div style={{ padding: '1rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Mi Cuenta</h2>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Mis Favoritos ❤️</h3>
              {favorites.length === 0 ? (
                <p style={{ color: '#666', fontStyle: 'italic' }}>Aún no tienes favoritos.</p>
              ) : (
                <div className="grid-2">
                  {favorites.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAdd={addToCart}
                      isFavorite={true}
                      onToggleFavorite={() => toggleFavorite(product)}
                      onClick={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 style={{ marginBottom: '1rem', color: '#666' }}>Historial de Pedidos</h3>
              {orders.length === 0 ? (
                <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: 'var(--radius)', color: '#999', textAlign: 'center' }}>
                  <p>No hay pedidos recientes.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {orders.map(order => (
                    <div key={order.id} style={{
                      backgroundColor: 'white',
                      padding: '1rem',
                      borderRadius: 'var(--radius)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Package size={20} color="var(--color-primary)" />
                          <span style={{ fontWeight: 'bold' }}>Pedido #{order.id}</span>
                        </div>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>{order.date}</span>
                      </div>

                      <div style={{ marginBottom: '0.75rem', paddingLeft: '28px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                          {order.items.length} productos • ${order.total.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex-between" style={{
                        backgroundColor: '#f5f5f5',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2e7d32' }}>
                          <Clock size={16} />
                          <span style={{ fontWeight: '500' }}>{order.status}</span>
                        </div>
                        <button style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.8rem' }}>
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} cartCount={cartCount} />

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={addToCart}
          isFavorite={favorites.some(fav => fav.id === selectedProduct.id)}
          onToggleFavorite={() => toggleFavorite(selectedProduct)}
        />
      )}

      {/* Barcode Scanner */}
      {isScanning && (
        <BarcodeScanner
          onClose={() => setIsScanning(false)}
          onScan={handleScan}
        />
      )}
    </div>
  );
}

export default App;
