import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="men"
          title="men"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="women"
          title="women"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="dress"
          title="dress"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="shirt"
          title="shirt"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;