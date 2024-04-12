import React, { useState } from "react";
import Dialog from "./Dialog";

const Support = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <h2>Support Content</h2>
      <button onClick={handleOpenDialog}>Open Dialog</button>

      {showDialog && <Dialog onClose={handleCloseDialog} />}
    </div>
  );
};

export default Support;
