import Hello from "./assets/Components/Hello";

function App() {
  let name = "fatime";
  let surname = "memmedli";
  let age = 19;
  let hobbies = ["kitab oxumaq"];
  return (
    <>
      <Hello name={name} surname={surname} age={age} hobbies={hobbies} />
      <Hello name={name} surname={surname} age={age} hobbies={hobbies} />
    </>
  );
}

export default App;
