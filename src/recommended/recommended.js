import Button from "../components/Button";
import "./recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button className="id" onClickHandler={handleClick} value="" title="All Products" />
          <Button className="id" onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button className="id" onClickHandler={handleClick} value="U.S. POLO" title="U.S. POLO" />
          <Button className="id" onClickHandler={handleClick} value="Allen Solly" title="Allen Solly" />
          <Button className="id" onClickHandler={handleClick} value="Pepe" title="Pepe" />
        </div>
      </div>
    </>
  );
};

export default Recommended;