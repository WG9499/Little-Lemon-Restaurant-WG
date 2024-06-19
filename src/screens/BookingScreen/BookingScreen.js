import { useReducer } from "react";
import "./BookingScreen.css";
import Form from "../../components/Form/Form.js";
import { updateTimes, initializeTimes } from "../../utilities/timeUtilities.js";

const BookingScreen = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="BookingScreen">
      <Form availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingScreen;
