import React from "react";

function ModalBackdrop(props: any) {
  const { handleUserClickedModalBackground } = props;

  return (
    <div id="modal-backdrop">
      <div
        id="modal-close-listener"
        onClick={handleUserClickedModalBackground}
      />
      {props.children}
    </div>
  );
}

export default ModalBackdrop;
