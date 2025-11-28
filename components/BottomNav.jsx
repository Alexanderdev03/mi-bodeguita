import React from 'react';
import { Home, Grid, ShoppingCart, User } from 'lucide-react';

export function BottomNav({ activeTab, onTabChange, cartCount }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'categories', icon: Grid, label: 'Deptos' },
    { id: 'cart', icon: ShoppingCart, label: 'Carrito', badge: cartCount },
    { id: 'profile', icon: User, label: 'Cuenta' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '600px',
      backgroundColor: 'white',
      borderTop: '1px solid #eee',
      padding: '0.25rem 1rem 0.5rem 1rem', // Reduced padding
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopLeftRadius: '1rem', // Slightly less rounded
      borderTopRightRadius: '1rem',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      zIndex: 1000,
      height: '60px' // Fixed smaller height
    }}>
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px', // Reduced gap
              color: isActive ? 'var(--color-primary)' : '#999',
              position: 'relative',
              padding: '0.25rem',
              minWidth: '50px', // Reduced width
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Special styling for active Home */}
              {item.id === 'home' && isActive ? (
                <div style={{
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '8px 8px 2px 2px',
                  padding: '2px'
                }}>
                  <Icon size={20} color="white" fill="white" /> {/* Reduced icon size */}
                </div>
              ) : (
                <Icon size={20} fill={isActive ? "currentColor" : "none"} /> // Reduced icon size
              )}

              {item.badge > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -4,
                  right: -6,
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                  fontSize: '0.6rem',
                  fontWeight: 'bold',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.badge}
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: isActive ? '600' : '400' }}> {/* Reduced font size */}
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
