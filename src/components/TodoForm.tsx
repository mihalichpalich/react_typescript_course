import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void

}

export const TodoForm: React.FC<TodoFormProps> = props => {
    //в generic для TodoForm описываются типы для props

    // const [title, setTitle] = useState(''); //useState - generic ф-я, работает с типом данных входного параметра
    const ref = useRef<HTMLInputElement>(null); //указываем generic для взятия значения из инпута

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value); //! для того, чтобы не воспринималось значение null по умолчанию
            ref.current!.value = '';
            // console.log(title)
            // setTitle('')
        }
    };

    return (
        <div className="input-field mt">
            <input
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
};