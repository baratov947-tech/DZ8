export const Services = () => {
    const servicesList = [
        { id: 1, title: 'Веб-разработка', description: 'Создание адаптивных и быстрых SPA-приложений на React.', price: '50 000 сом' },
        { id: 2, title: 'UI/UX Дизайн', description: 'Проектирование удобных интерфейсов и прототипирование.', price: '30 000 сом' },
        { id: 3, title: 'SEO-продвижение', description: 'Оптимизация вашего сайта под поисковые системы.', price: '20 000 сом' },
    ];

    return (
        <div>
            <h1>Наши услуги</h1>
            <div style={{ display: 'grid', gap: '15px', marginTop: '15px', maxWidth: '600px' }}>
                {servicesList.map((service) => (
                    <div key={service.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ margin: '0 0 8px 0' }}>{service.title}</h3>
                        <p style={{ margin: '0 0 12px 0', color: '#555' }}>{service.description}</p>
                        <span style={{ fontWeight: 'bold', color: '#28a745' }}>{service.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};