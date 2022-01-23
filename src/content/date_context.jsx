import {createContext, useContext} from "react";

const DateContext = createContext({date: getCurrentDate()});

function getCurrentDate() {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
}

export function DateProvider({children}) {
  const date = {
    date: getCurrentDate(),
  }

  return (
    <DateContext.Provider value={date}>
      {children}
    </DateContext.Provider>
  )
}

export function useDate() {
  const {date} = useContext(DateContext);
  return date;
}
