import { CloseIcon } from '@/app/icons';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';

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
const TipSection = () => {
  const { state, dispatch } = useFormContext();
  const addTip = () => {
    dispatch({ type: 'addTip' });
  };

  const updateTip = (index, field, value) => {
    dispatch({ type: 'updateTip', payload: { index, field, value } });
  };

  const removeTip = (index) => {
    dispatch({ type: 'removeTip', payload: { index } });
  };

  const getPlaceHolder = (category) => {
    if (!category) return 'Select a category';
    const categoryObj = categories.find((cat) => cat === category);
    return `Enter a tip for ${categoryObj}`;
  };

  return (
    <div className="p-4">
      {state.tips.map((tip, index) => (
        <div key={index} className="flex items-center mb-4 gap-2">
          <select
            value={tip.category}
            onChange={(e) => updateTip(index, 'category', e.target.value)}
            className="mb-2 p-2 border rounded w-fit"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <textarea
            placeholder={getPlaceHolder(tip.category)}
            value={tip.content}
            onChange={(e) => updateTip(index, 'content', e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          ></textarea>
          <button
            onClick={() => removeTip(index)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out"
          >
            <CloseIcon />
          </button>
        </div>
      ))}
      <button
        onClick={addTip}
        className="px-4 py-2 mt-2 bg-blue-500 text-black rounded hover:bg-blue-700 transition duration-150 ease-in-out"
      >
        Add Another Tip
      </button>
    </div>
  );
};

export default TipSection;
