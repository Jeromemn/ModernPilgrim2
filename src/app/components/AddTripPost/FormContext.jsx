import { createContext, useContext, useMemo, useReducer } from 'react';

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
      const newTips = [...state.tips];
      newTips[action.payload.index][action.payload.field] = action.payload.value;
      return {
        ...state,
        tips: newTips,
      };
    }
    case 'removeTip': {
      const newTips = [...state.tips];
      newTips.splice(action.payload.index, 1);
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
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, {
    title: '',
    location: '',
    date: '',
    startDate: '',
    endDate: '',
    month: '',
    description: '',
    tripBudget: '',
    typeOfTrip: [],
    tripStatus: 'Upcoming',
    activities: [],
    tips: [
      {
        category: '',
        content: '',
      },
    ],
    tripImages: [],
  });

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
