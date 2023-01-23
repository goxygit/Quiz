import s from './quiz.module.css'
const Quiz = ({ question, nextQuestion, width }) => {
  return (
    <div>
        <div
          style={{
            width: "700px",
            backgroundColor: "lightgray",
            height: "7px",
            margin: "30px auto 0 auto",
            borderRadius: "3px",
          }}
        >
          <div
            className={s.gradient}
            style={{ height: "100%", borderRadius: "3px", width: `${width}%` }}
          ></div>
        </div>
      <div style={{ margin: "30px", fontSize: "38px" }}>
        <span>{question.title}</span>
      </div>
      {question.variants.map((text, id) => (
        <div
        key={Math.random()}
          onClick={() => nextQuestion(id)}
          style={{
            width: "700px",
            borderRadius: "20px",
            border: "1px solid lightgray",
            height: "auto",
            margin: "20px auto auto",
            fontSize: "22px",
          }}
        >
          <p style={{ margin: "0", padding: "15px" }}>{text}</p>
        </div>
      ))}
    </div>
  );
};
export default Quiz;
