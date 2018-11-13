import React from "react";
import Select from "react-select";
import { technical } from "./keywords.js";

export default ({ input, keywords }) => {
  console.log("technical keywords ", keywords.technical);
  return (
    <Select
      isMulti
      value={input ? input.value : null}
      onChange={input ? input.onChange : null}
      onBlur={() => input.onBlur(input.value)}
      name="tech stack tags"
      options={keywords.technical}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};
