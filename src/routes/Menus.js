import { useState } from "react";
import menu from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/files/menuHolder.png";

export default function Menus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [modalDisplay, setModalDisplay] = useState("none");

  function handleModal(menuSrc) {
    setSelectedMenu(menuSrc);
    setModalOpen(true);
    setModalDisplay("block");
  }

  function closeModal(event) {
    event.stopPropagation();
    setModalOpen(false);
    setModalDisplay("none");
  }

  return (
    <div id="menus">
      <h1>MENUS SAMPLES</h1>
      <div className="menus-container">
        <object data={menu} onClick={() => handleModal(menu)}></object>
        <object data={menu} onClick={() => handleModal(menu)}></object>
      </div>
      {modalOpen && (
        <div
          id="myModal"
          className="modal"
          style={{ display: { modalDisplay } }}
        >
          <span className="class" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            id="img01"
            src={selectedMenu}
            alt="Menu"
          ></img>
          <div id="caption"></div>
        </div>
      )}
    </div>
  );
}
