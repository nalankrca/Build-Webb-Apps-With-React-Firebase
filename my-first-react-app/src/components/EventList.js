import React from "react";
import style from './EventList.module.css';

export default function EventList({events,handleClick}) {
  return (
    <div>
      {   events.map((event, index) => (
          <div className={style.cart} key={event.id}>
            <h2>
              {index}-{event.title}
            </h2>
            <p> {event.location} - {event.date} </p>
            <button onClick={() => handleClick(event.id)}>Delete Event</button>
          </div>
        ))}
    </div>
  )
}


//React.Fragment dom'un çıktısını vermiyor,bu yüzden onu div öğesiyle değişiyoruz
//Çıktı olan ve ayrıca bir sınıfa sahip olabilen bir div dir

// Css modülünü kullandığımızda classı normalde yaptığımız gibi normal bir dize olarak iletmiyoruz 
// className="" X
//Bunun yerine dinamik bir çıktı olıyoruz bu yüzden küme parantezi
// clasName={}