import React from 'react';
import { Menu, ShoppingCart, Search, Camera } from 'lucide-react';

export function Header({ searchQuery, setSearchQuery, userName, onOpenScanner }) {
    return (
        <header style={{
            backgroundColor: 'var(--color-primary)',
            padding: '1rem',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            boxShadow: 'var(--shadow-md)'
        }}>
            <div className="input-group" style={{ position: 'relative' }}>
                <Search
                    size={20}
                    color="#999"
                    style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                />
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.75rem 3rem 0.75rem 2.5rem',
                        borderRadius: 'var(--radius-pill)',
                        border: 'none',
                        fontSize: '0.95rem',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                />
                <button
                    onClick={onOpenScanner}
                    style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Camera size={20} color="#666" />
                </button>
            </div>
        </header>
    );
}
