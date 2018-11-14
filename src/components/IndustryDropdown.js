import React from "react";
import Select from "react-select";

export default ({ input, keywords }) => (
  <Select
    defaultValue={[keywords.industry[0], keywords.industry[1]]}
    isMulti
    value={input ? input.value : null}
    onChange={input ? input.onChange : null}
    onBlur={() => input.onBlur(input.value)}
    name="tech stack tags"
    options={keywords.industry}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
