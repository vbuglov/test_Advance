import { counterReducer, contactFormReducer } from "../slicers/index";

const rootReducer = {
  counter: counterReducer,
  contactForm: contactFormReducer,
};

export default rootReducer;
