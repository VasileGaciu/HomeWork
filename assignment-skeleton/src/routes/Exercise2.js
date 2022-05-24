function Exercise2() {
  return (
    <div>
      <div>
        <p>
          Add a native HTML button called "Click me". Capture the click event
          and alert the message, "You cliked me. Thanks!".
        </p>
      </div>
      <div className="solution-container">
        <input type="button" value="Click me" onClick={onClickEvent}></input>
      </div>
    </div>
  );
}
function onClickEvent(event){
  alert("You cliked me. Thanks!");
}

export default Exercise2;
