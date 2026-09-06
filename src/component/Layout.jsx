import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Главная' },
        { path: '/about', label: 'О нас' },
        { path: '/services', label: 'Услуги' },
        { path: '/contacts', label: 'Контакты' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            <header style={{ padding: '1rem', backgroundColor: '#f4f4f9', borderBottom: '1px solid #ddd' }}>
                <nav style={{ display: 'flex', gap: '10px' }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                style={{
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    backgroundColor: isActive ? '#007bff' : '#fff',
                                    color: isActive ? '#fff' : '#000',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                }}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
                <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#555' }}>
                    Текущая страница: <strong>{location.pathname}</strong>
                </div>
            </header>

            <main style={{ flex: 1, padding: '1.5rem' }}>
                <Outlet />
            </main>

            <footer style={{ padding: '1rem', borderTop: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f4f4f9' }}>
                © 2025
            </footer>
        </div>
    );
};