import React, { memo } from "react";

function LocalImg({ file }) {
  return (
    <div>
      {Object.values(file).map((el, inx) => (
        <img src={URL.createObjectURL(el)} width={200} key={inx} alt="" />
      ))}
    </div>
  );
}

export default memo(LocalImg);
