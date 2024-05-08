import { createContext, useCallback, useContext, useMemo, useReducer, useState, useEffect } from 'react';

const FormContext = createContext(null);

export const useFormContext = () => {
  return useContext(FormContext);
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'inputChange':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'monthChange':
      return {
        ...state,
        month: action.payload,
      };
    case 'setStartDate':
      return {
        ...state,
        startDate: action.payload.date,
      };
    case 'setEndDate':
      return {
        ...state,
        endDate: action.payload.date,
      };
    case 'toggleTripType':
      if (!state.typeOfTrip.includes(action.payload)) {
        return {
          ...state,
          typeOfTrip: [...state.typeOfTrip, action.payload],
        };
      }
      return {
        ...state,
        typeOfTrip: state.typeOfTrip.filter((type) => type !== action.payload),
      };
    case 'toggleActivities':
      if (!state.activities.includes(action.payload)) {
        return {
          ...state,
          activities: [...state.activities, action.payload],
        };
      }
      return {
        ...state,
        activities: state.activities.filter((type) => type !== action.payload),
      };
    case 'addTip':
      return {
        ...state,
        tips: [...state.tips, { category: '', content: '' }],
      };
    case 'updateTip': {
      const newTips = state.tips.map((tip) =>
        tip.category === action.payload.category
          ? { category: action.payload.category, content: action.payload.content }
          : tip,
      );
      if (!newTips.find((tip) => tip.category === action.payload.category)) {
        newTips.push({ category: action.payload.category, content: action.payload.content });
      }
      return {
        ...state,
        tips: newTips,
      };
    }
    case 'removeTip': {
      const newTips = state.tips.filter((tip) => tip.category !== action.payload.category);
      return {
        ...state,
        tips: newTips,
      };
    }
    case 'addImages': {
      return {
        ...state,
        tripImages: [...state.tripImages, ...action.payload],
      };
    }
    case 'deleteImage': {
      return {
        ...state,
        tripImages: state.tripImages.filter((image) => image.imageName !== action.payload),
      };
    }
    case 'updateImages': {
      return {
        ...state,
        tripImages: action.payload,
      };
    }
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [state, dispatch] = useReducer(formReducer, {
    location: '',
    title: '',
    date: '',
    startDate: '',
    endDate: '',
    month: [],
    description: '',
    tripBudget: '',
    typeOfTrip: [],
    tripStatus: 'Upcoming',
    activities: [],
    tips: [],
    tripImages: [],
  });

  useEffect(() => {
    if (state.location) {
      dispatch({ type: 'inputChange', payload: { name: 'title', value: state.location } });
    }
  }, [state.location]);

  const onNext = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const onPrev = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const value = useMemo(() => ({ state, dispatch, step, onNext, onPrev }), [state, dispatch, step, onNext, onPrev]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
