import sprite from '../../assets/svg/sprite.svg'

function Social({classAux}) {
    return (
        <ul className={`${classAux} social`}>
            <li className="social__item">
                <svg className="social__ico">
                    <use href={sprite + '#facebook'}></use>
                </svg>
            </li>
            <li className="social__item">
                <svg className="social__ico">
                    <use href={sprite + '#twitter'}></use>
                </svg>
            </li>
            <li className="social__item">
                <svg className="social__ico">
                    <use href={sprite + '#instagram'}></use>
                </svg>
            </li>
            <li className="social__item">
                <svg className="social__ico">
                    <use href={sprite + '#linkedin'}></use>
                </svg>
            </li>
            <li className="social__item">
                <svg className="social__ico">
                    <use href={sprite + '#behance'}></use>
                </svg>
            </li>
        </ul>
    );
}

export default Social;
