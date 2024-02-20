import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children,  isSalesModel }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModel ? "#ff4500" : "#555",
          textAlign: "cender",
        }}
      >
        {children}

      </div>
    </div>,
    document.body
  );
}

