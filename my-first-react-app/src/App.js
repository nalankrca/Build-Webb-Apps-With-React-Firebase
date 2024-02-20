import  { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal ,setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent =(event)=>{
    setEvents((prevEvents)=>{
      return[...prevEvents,event]
    })

    setShowModal(false)
  }

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });

    console.log(id);
    //buttona tıknaldığında alinan id id ye eşit değil ise true döner ve filter işlemi gerçekleşmez.
    //False dönme durumunda(id ler bibirine eşit olduğu durumda ) filter işlemi gerçekleşir
  };


  


  const subtitle = "All the latest events in marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            {" "}
            Hide Events{" "}
          </button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            {" "}
            Show Events{" "}
          </button>
        </div>
      )}
      {showEvents && <EventList events ={events} handleClick={handleClick} /> }
      {showModal && <Modal  isSalesModel={true}>
            <NewEventForm addEvent={addEvent} />
      </Modal>}

      <div>
        <button onClick={()=> setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
//     <button onClick={handleClick(event.id}>Delete Event</button> X
// otomatik bir şekilde render edilmemesi için onClick eventini anonymous function olarak tamınlamamız gerekir
//     <button onClick={()=> handleClick(event.id)}>Delete Event</button>
