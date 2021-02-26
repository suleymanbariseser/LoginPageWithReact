/* eslint-disable react-hooks/rules-of-hooks */
// this function is created by Süleyman Barış Eser like other codes

// I inspired from react-hook-form
// This code was not ready before starting to code. I coded it for this task. It is reusable for other forms.

import { FormEvent, RefObject, useRef, useState } from "react";

interface RuleType {
  pattern?: RegExp;
  required?: boolean;
}
// interface WatchType {
//   name: string;
// }
const useForm = () => {
  const [eventListeners, setEventListeners] = useState(0); // It is number of event listeners in use.
  // const [watchEventListeners, setWatchEventListeners] = useState<WatchType[]>(
  //   []
  // ); // It is number of event listeners in use.
  const [errors, setErrors] = useState<any>(undefined); // store errors
  const rules: RuleType[] = []; // rules that user can add
  const refs: RefObject<HTMLInputElement | HTMLSelectElement>[] = [];
  const register = ({ required, pattern }: RuleType) => {
    rules.push({ required, pattern });
    const newRef = useRef<HTMLInputElement | HTMLSelectElement>(null);
    refs.push(newRef);
    return newRef;
  };
  const handleSubmit = (event: FormEvent<Element>, onSubmit: Function) => {
    event.preventDefault(); // disable relocation after submit
    const hasError = checkErrorValidation(); // check whether there is any error or not
    // the main reason of adding event is that;
    // if user try to submit wrong form then errors are set and user can see errors.
    // and user start to correct errors, at this moment, we remove errors and user can see this field is not wrong anymore.
    // it is better than useStates because we avoid from waste re-renderings.
    if (eventListeners === 0 && hasError) addEventListeners();
    // if there is error and there is no event listeners then, add event listeners.
    else if (!hasError) {
      // if there is no error.
      removeEventListeners(); // remove all previous event listeners.
      const values = []; // value of inputs
      for (let i = 0; i < refs.length; i++) {
        values.push({
          name: refs[i].current?.name,
          value: refs[i].current?.value,
        });
      }
      onSubmit(values); // pass values to onSubmit function
    }
  };
  const addEventListeners = () => {
    let listeners = 0;
    for (let i = 0; i < refs.length; i++) {
      // add event listener for each input
      const currentRef = refs[i].current;
      if (currentRef?.type === "select-one") {
        // if type of input is select then, listen it's change events.
        currentRef?.addEventListener("change", checkErrorValidation);
      } else {
        // if type of input is text or password or email then, listen it's input event.
        currentRef?.addEventListener("input", checkErrorValidation);
      }
      listeners++;
    }
    setEventListeners(listeners); // store number of listeners
  };
  const removeEventListeners = () => {
    // remove all event listeners
    for (let i = 0; i < refs.length; i++) {
      const currentRef = refs[i].current;
      if (currentRef?.type === "select-one") {
        currentRef?.removeEventListener("change", checkErrorValidation);
      } else {
        currentRef?.removeEventListener("input", checkErrorValidation);
      }
    }
    setEventListeners(0);
  };

  // //should be optimized
  // const watch = (field: string) => {
  //   const currentRef = refs?.find(({ current }) => current?.name === field);
  //   if (currentRef && currentRef.current) {
  //     const tempWatchEvents = [...watchEventListeners];
  //     const tempRef = tempWatchEvents.find((item) => item.name === field);
  //     if (!tempRef) {
  //       tempWatchEvents.push({ name: field });
  //       if (currentRef?.current.type === "select-one") {
  //         // // if type of input is select then, listen it's change events.
  //         currentRef?.current.addEventListener(
  //           "change",
  //           watch.bind(this, field)
  //         );
  //       } else {
  //         // if type of input is text or password or email then, listen it's input event.
  //         currentRef?.current.addEventListener(
  //           "input",
  //           watch.bind(this, field)
  //         );
  //       }
  //       setWatchEventListeners(tempWatchEvents);
  //     }
  //     return currentRef.current.value;
  //   }
  //   return undefined;
  // };
  // const removeWatchEventListeners = {};
  const checkErrorValidation = () => {
    let currentErrors = {};
    for (let i = 0; i < refs.length; i++) {
      const currentRef = refs[i].current;
      if (rules[i].required && !currentRef?.value) {
        // if field is required and there is no value then, return an error.
        currentErrors = {
          ...currentErrors,
          [currentRef?.name as string]: {
            type: "required",
            message: `${currentRef?.name} is required field!`,
          },
        };
      } else if (
        rules[i].pattern &&
        !currentRef?.value.match(rules[i].pattern as any)
      ) {
        // if field has a pattern and doens't match with pattern then, return an error
        currentErrors = {
          ...currentErrors,
          [currentRef?.name as string]: {
            type: "pattern",
            message: `${currentRef?.name} is not valid!`,
          },
        };
      }
    }
    setErrors(currentErrors); // set errors
    return Object.keys(currentErrors).length !== 0;
  };
  return { errors, register, handleSubmit };
};

export default useForm;
