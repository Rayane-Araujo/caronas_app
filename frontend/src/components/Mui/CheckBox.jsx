import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { CheckboxFild, CheckboxWrapper } from "../../pages/RideCreate/styled";


export const TypeCheckbox = () => {
  const [selectedType, setSelectedType] = useState("offer");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <CheckboxWrapper>
      <CheckboxFild>
        <Checkbox
          checked={selectedType === "offer"}
          onChange={handleChange}
          value="offer"
          sx={{
            color: "#FFA500",
            "&.Mui-checked": {
              color: "#FFA500",
            },
          }}
        />
        <label>Oferecendo</label>

        <Checkbox
          checked={selectedType === "request"}
          onChange={handleChange}
          value="request"
          sx={{
            color: "#FFA500",
            "&.Mui-checked": {
              color: "#FFA500",
            },
          }}
        />
        <label>Procurando</label>
      </CheckboxFild>
    </CheckboxWrapper>
  );
};
