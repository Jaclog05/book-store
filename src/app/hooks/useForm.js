import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useForm(initialValues, dispatch) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { value, name } = e.target;

    setValues((prev) => ({
			...prev,
			[name]: value
		}));
  }

	function handleSubmit(e) {
    e.preventDefault();
    if (!values.title || !values.author || !values.cover) {
      alert("Title, author and cover fields must be filled out");
      return;
    }
    dispatch({
      ...values,
      type: "ADD_BOOK",
      id: uuidv4(),
    });
    setValues(initialValues);
  }

	function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    if (file && file.type.startsWith("image/")) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setValues((prevValues) => ({
          ...prevValues,
          cover: reader.result.toString(),
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  }

	return {
		values,
		handleChange,
		handleSubmit,
		handleOnChangeFile
	}
}

export default useForm
