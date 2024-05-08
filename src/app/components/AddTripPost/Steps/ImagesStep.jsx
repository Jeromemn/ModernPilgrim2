import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { getPresignedUrl } from '@/actions/imageUploadAction';
import { deleteImage } from '@/actions/imageDeleteAction';
import Image from 'next/image';
import { BackArrow, CloseIcon } from '@/app/icons';
import SubmitFormButton from '@/app/components/AddTripPost/Steps/SubmitFormButton';
const ImagesStep = () => {
  const { state, dispatch, onPrev } = useFormContext();

  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      try {
        const uploadPromises = Array.from(files).map(async (file) => {
          const { url, fields } = await getPresignedUrl(file.name, file.type);
          const imageData = new FormData();

          // Append additional fields required for S3
          Object.keys(fields).forEach((key) => {
            imageData.append(key, fields[key]);
          });

          // Append the file; 'file' should be the key S3 expects for the file
          imageData.append('file', file);

          // Perform the upload
          const response = await fetch(url, {
            method: 'POST',
            body: imageData,
          });

          if (!response.ok) {
            throw new Error(`Failed to upload file: ${file.name}`);
          }
          // return response;
          return { imageName: fields.key, tripImageUrl: `${url}${fields.key}` };
        });

        // eslint-disable-next-line no-undef
        const results = await Promise.all(uploadPromises);
        dispatch({
          type: 'addImages',
          payload: results,
        });
        console.log('All files uploaded successfully:', results);
      } catch (error) {
        console.error('Error uploading files:', error);
      }
    }
  };

  const handleDeleteImage = async (imageName) => {
    const response = await deleteImage({ key: imageName });
    if (response.error) {
      console.error('Error deleting image:', response.error);
      return;
    }
    console.log('Image deleted:', imageName);
    dispatch({
      type: 'deleteImage',
      payload: imageName,
    });
  };

  const handleSetMainImage = (index) => {
    const mainImage = state.tripImages[index];
    const updatedImages = state.tripImages.filter((_, i) => i !== index);
    updatedImages.unshift(mainImage);
    dispatch({
      type: 'updateImages',
      payload: updatedImages,
    });
  };

  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper ">
        <div className="stepContent h-5/6 lg:h-4/5 lg:w-4/5 w-5/6 mx-auto ">
          <button onClick={onPrev} className="backBtn">
            <BackArrow />
          </button>
          <div className="flex flex-col gap-4">
            <h1 className="stepHeader text-pretty">Share memories from your trip to {state.location}</h1>
            <div>
              <input
                type="file"
                name="tripImages"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                value={state.tripImages.imageName}
                className="block w-fit text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-light-brown file:text-black
      hover:file:bg-violet-100 cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-4 ">
              {state.tripImages && state.tripImages.length > 0 ? (
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden lg:hidden">
                  <Image src={state.tripImages[0]?.tripImageUrl} alt={state.tripImages[0]?.imageName} fill />
                </div>
              ) : null}
              <div className="lg:imagesContainer sm:imagesSlide">
                {state.tripImages.map((image, index) => (
                  <div key={index} className="relative sm:snap-start ">
                    <button
                      className="absolute -top-2 -right-2 z-30 bg-black/50"
                      onClick={() => handleDeleteImage(image.imageName)}
                    >
                      <CloseIcon color="rgba(220,71,71,0.85)" size={24} />
                    </button>
                    <div
                      className="flex justify-center items-center w-20 h-20 lg:w-36 lg:h-36 relative rounded-xl overflow-hidden"
                      onClick={() => handleSetMainImage(index)}
                      key={index}
                    >
                      <Image
                        src={image.tripImageUrl}
                        alt={image.imageName}
                        fill
                        // width={200}
                        // height={200}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SubmitFormButton />
          </div>
        </div>
      </div>
      <div className="stepImage">
        {state.tripImages && state.tripImages.length > 0 ? (
          <Image src={state.tripImages[0].tripImageUrl} alt={state.tripImages[0].imageName} fill />
        ) : (
          <Image src="/planeview.webp" alt="plane window" fill />
        )}
      </div>
    </div>
  );
};

export default ImagesStep;
