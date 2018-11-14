import React from "react";
import Select from "react-select";

export default ({ input, keywords }) => (
  <Select
    defaultValue={[keywords.technical[0], keywords.technical[1]]}
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
