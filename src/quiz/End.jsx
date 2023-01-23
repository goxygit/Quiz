import ending from "./img/congratulation.png";
const End = ({ correct }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={ending} alt="" style={{ width: "200px", height: "200px" }} />
      </div>
      <div style={{display:'flex', justifyContent:'center', fontSize:'24px'}}>
        <span>You guessed {correct} questions out of 8</span>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
        <div onClick={()=>window.location.reload()} style={{width:'140px', height:'40px', backgroundColor:'blue', borderRadius:'8px',display:'flex', justifyContent:'center', alignItems:'center', color:'white', fontSize:'20px'}}>
                <span>Try again</span>
        </div>
      </div>
    </div>
  );
};
export default End;
