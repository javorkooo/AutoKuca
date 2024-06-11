import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const EditArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    imageURL: "",
    description: "",
    category:"SmallCar"
  });

  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8081/article`, formData);
    history.push("/home");
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={submitForm}>
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <label className="form-label" htmlFor="form5Example1">
            Title
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            value={formData.imageURL}
            onChange={(e) =>
              setFormData({ ...formData, imageURL: e.target.value })
            }
          />
          <label className="form-label" htmlFor="form5Example2">
            Image URL
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            type="text"
            className="form-control"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <label className="form-label" htmlFor="form5Example2">
            Description
          </label>
        </div>
        <div className="form-outline mb-4">
          <label>Category:</label>
          <select name="category" onChange={(e)=>setFormData({...formData, category: e.target.value})} required>
            <option value="SmallCar">Small Car</option>
            <option value="Limousine">Limousine</option>
            <option value="SUV">SUV</option>
        </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
