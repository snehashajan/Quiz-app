import React, {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Main.css";
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

export default function Main() {

    //const navigate = useNavigate();

    const inputRef = useRef();
    const dispatch = useDispatch();

    function startQuiz(){
      if(inputRef.current?.value){
        dispatch(setUserId(inputRef.current?.value))
      }
    }

  return (
    <div className = "container">
      <h1 className = "title text-light"> Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after the other</li>
        <li>10 points will be awarded for each correct answer</li>
        <li>Each question has 3 options. You can choose only 1 option.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id = "form">
        <input ref = {inputRef} className = "userid" type = "text" placeholder = "username"/>
      </form>

      <div className='start'>
         <Link to = "/quiz" onClick = {startQuiz} className = "btn" >Start Quiz</Link>
      </div>
    </div>
  )
}