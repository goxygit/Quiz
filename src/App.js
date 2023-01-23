import { useState } from "react";
import Quiz from "./quiz/quiz";
import s from "./quiz/quiz.module.css";
import End from "./quiz/End";
const array = [
  {
    title: "React this ...?",
    variants: ["Hook", "Framework", "Library"],
    correct: 1,
  },
  {
    title: "SetState this ...?",
    variants: ["Hook", "Hoc", "App"],
    correct: 0,
  },
  {
    title: "React was created by... ?",
    variants: ["Tesla", "Apple", "Facebook"],
    correct: 2,
  },
  {
    title: "Does useEffect have a second object...?",
    variants: ["App", "Dependence", "useState"],
    correct: 1,
  },
  {
    title: "A library for creating forms in React... ?",
    variants: ["react-hook-form", "react-router-dom", "react-redux"],
    correct: 0,
  },
  {
    title: "connect component comes from the library... ?",
    variants: ["react-hook-form", "react-router-dom", "react-redux"],
    correct: 2,
  },
  {
    title: "What does a pure component do...?",
    variants: ["Accepts props and returns JSX", "Creates other components", "Updates the class component"],
    correct: 0,
  },
  {
    title: "command for node.js and React interaction",
    variants: ["npm", "press", "push"],
    correct: 0,
  },
];

const App = () => {
  const [questions, setQuestions] = useState(0)
  const question = array[questions]
  const [correct, setCorrect] = useState(0)
  const nextQuestion =(id)=>{
    console.log(questions, id)
    setQuestions((questions)=> questions + 1)
    if( id === question.correct){
      setCorrect((correct) => correct + 1)
    }
  }
  let width = Math.ceil((questions / array.length * 100)) 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={s.app}>
      {
        questions !== array.length 
        ? <Quiz nextQuestion={nextQuestion} question={question} width={width}/>:
        <End correct={correct}/>
      
      }
      </div>
    </div>
  );
};

export default App;
