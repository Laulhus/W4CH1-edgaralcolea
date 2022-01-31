import "./Button.css";
const Button = ({ actionOnClick }) => {
  return (
    <button className="button button--select" onClick="actionOnClick">
      Select all
    </button>
  );
};
export default Button;
