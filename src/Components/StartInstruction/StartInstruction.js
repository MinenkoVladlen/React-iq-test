import React from 'react';
import './css/startInstruction.css';

const StartInstruction = (props) => {
    const numberTest = props.location.props;
    return (
        <>
            <div className="main_iq_test_description">
                <h1>IQ Тест № {numberTest}</h1>
                <h2>Перед вами один из серии знаменитых IQ тестов,
                    разработанных классиком современной психологии
                    Гансом Айзенком с использованием словесного,
                    цифрового и графического материала.</h2>
                <h3>Перед тем как начать...</h3>
                <p>Тест не содержит слишком «заковыристых» заданий,
                    но всегда приходится рассмотреть несколько путей решения.
                    На решение данного теста предоставляется 30 минут.
                    По истечению времени данный тест будет завершен.
                    Прежде чем приступить к решению, удостоверьтесь,
                    что вы правильно поняли, что от вас требуется.
                    Вы напрасно потеряете время, если возьметесь
                    за решение не уяснив в чем состоит задача.
                    Помните также, что нет никакого смысла проходить
                    тест с одинаковыми вопросами повторно, результат
                    будет выше но это никак не отразится на вашем
                    истинном коэффициенте интеллекта. Для более подробной
                    инструкции нажмите
                </p>
                <div className="button">
                    <a href="#">начать тест</a>
                </div>
            </div>s
        </>
    )
}

export default StartInstruction;