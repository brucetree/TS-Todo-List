import {useContext,useRef} from "react";
import classes from "./NewTodo.module.css";
import {TodosContext} from "../store/todos-context";
const NewTodo:React.FC = () => { //void表示没有返回值
    const todoCtx=useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value //表示value一定不为null
        //    const enteredText=todoTextInputRef.current?.value表示value不一定为null
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todoCtx.addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            {/*用ref的时候 input的值用ref传，用state管理的时候，input值用value传*/}
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;