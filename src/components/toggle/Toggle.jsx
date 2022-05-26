import "./Toggle.css";

const Toggle = ({ selectGender, genderToggle }) => {
  return (
    <div className="toggle-container">
      <button
        id="mens"
        className={genderToggle === "mens" ? "selected" : null}
        onClick={selectGender}
      >
        Mens
      </button>
      <button
        id="womens"
        className={genderToggle === "womens" ? "selected" : null} 
        onClick={selectGender}
      >
        Womens
      </button>
    </div>
  );
};

export default Toggle;