import { useState } from 'react';
import { BackArrow, CloseIcon } from '@/app/icons';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import Image from 'next/image';

const categories = [
  'Destinations',
  'Things to do',
  'Tours',
  'Accommodations',
  'Transportation',
  'Budgeting',
  'Flights',
  'General',
];

const TipsStep = () => {
  const { state, dispatch, onPrev, onNext } = useFormContext();
  const [localTip, setLocalTip] = useState({ category: '', content: '' });
  const updateTip = (field, value) => {
    if (field === 'category') {
      const existingTip = state.tips.find((tip) => tip.category === value);
      const existingContent = existingTip ? existingTip.content : '';
      setLocalTip({ category: value, content: existingContent });
      if (existingContent !== '') {
        dispatch({ type: 'updateTip', payload: { category: value, content: existingContent } });
      }
    } else {
      setLocalTip((prev) => ({ ...prev, [field]: value }));
      if (value !== '') {
        dispatch({ type: 'updateTip', payload: { category: localTip.category, content: value } });
      }
    }
  };

  const removeTip = () => {
    dispatch({ type: 'removeTip', payload: { category: localTip.category } });
    setLocalTip({ category: '', content: '' });
  };

  const placeholderText = localTip.category ? `Tips for ${localTip.category}` : 'Select a category';
  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper">
        <div className="stepContent h-3/4 w-5/6 lg:w-2/3 mx-auto">
          <button onClick={onPrev} className="backBtn ">
            <BackArrow />
          </button>
          <h1 className="stepHeader">Tips for {state.location}</h1>
          <p className="text-pretty">
            Provide helpful tips learned while traveling or strategies used to book the trip
          </p>
          <div className="flex text-center gap-3 flex-wrap">
            <h1 className="text-2xl ">Tips about</h1>
            <select
              value={localTip.category}
              onChange={(e) => updateTip('category', e.target.value)}
              className="border-b bg-transparent w-fit focus:outline-none text-2xl"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full items-center">
            <textarea
              placeholder={placeholderText}
              value={localTip.content}
              autoCorrect="on"
              spellCheck
              onChange={(e) => updateTip('content', e.target.value)}
              className="focus:outline-none border-b-2 border-black w-full p-2 bg-transparent resize-none  placeholder:text-xl placeholder:text-black/70 text-xl h-32 no-scrollbar"
            ></textarea>
            <button
              onClick={() => removeTip()}
              className={`lg:px-4 lg:py-2 h-fit ${localTip.content ? 'active: opacity-100' : 'disabled: opacity-35'}`}
            >
              <CloseIcon color="black" size={30} />
            </button>
          </div>
          <button className="yesNoBtn w-fit self-end" onClick={onNext}>
            Done Adding tips
          </button>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default TipsStep;
