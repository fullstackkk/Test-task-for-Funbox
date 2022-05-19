import './app.scss'
import Cart from '../cart/Cart';

const App = () => {
    const data = [
        { supheader: 'Сказочное заморское явство', name: 'Нямушка', taste: 'с фуа-гра', portion: 10, gift: 'мышь в подарок', weight: 0.5, offer: 'Печень утки разварная с артишоками.', disabled: false, descrIfDisabled: 'Печалька, с фуа-гра закончился.', id: 1 },
        { supheader: 'Сказочное заморское явство', name: 'Нямушка', taste: 'с рыбой', portion: 40, gift: '2 мыши в подарок', weight: 2, offer: 'Головы щучьи с чесноком да свежайшая сёмгушка.', disabled: false, descrIfDisabled: 'Печалька, с рыбой закончился.', id: 2 },
        { supheader: 'Сказочное заморское явство', name: 'Нямушка', taste: 'с курой', portion: 100, gift: '5 мышей в подарок заказчик доволен', weight: 5, offer: 'Филе из цыплят с трюфелями в бульоне.', disabled: true, descrIfDisabled: 'Печалька, с курой закончился.', id: 3 }
    ]

    return (
        <div className="app" >
            <div className="app__header">Ты сегодня покормил кота?</div>
            <div className="container">
                <Cart data={data[0]} />
                <Cart data={data[1]} />
                <Cart data={data[2]} />
            </div>
            <button className="github"><a href="https://github.com/fullstackkk">github</a></button>
        </div>
    )
}

export default App;



