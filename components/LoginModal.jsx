import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export function LoginModal({ onLogin }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onLogin(name);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-primary)',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
                <ShoppingBag size={48} color="var(--color-primary)" />
            </div>

            <h1 style={{ color: 'white', marginBottom: '0.5rem', textAlign: 'center' }}>¡Bienvenido!</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', textAlign: 'center' }}>
                Ingresa tu nombre para comenzar a comprar en Mi Bodeguita.
            </p>

            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px' }}>
                <input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: 'var(--radius-pill)',
                        border: 'none',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        textAlign: 'center',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                    autoFocus
                />
                <button
                    type="submit"
                    disabled={!name.trim()}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: 'var(--radius-pill)',
                        border: 'none',
                        backgroundColor: 'var(--color-secondary)',
                        color: 'var(--color-primary)',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: name.trim() ? 'pointer' : 'not-allowed',
                        opacity: name.trim() ? 1 : 0.7,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    Comenzar
                </button>
            </form>
        </div>
    );
}
