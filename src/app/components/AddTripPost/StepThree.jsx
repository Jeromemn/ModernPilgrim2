import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { getPresignedUrl } from '@/actions/imageUploadAction';
import { deleteImage } from '@/actions/imageDeleteAction';
import Image from 'next/image';
import { CloseIcon } from '@/app/icons';
const FormStepThree = () => {
  const { state, dispatch } = useFormContext();

  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      try {
        const uploadPromises = Array.from(files).map(async (file) => {
          const { url, fields } = await getPresignedUrl(file.name, file.type);
          const imageData = new FormData();
          console.log('fields:', fields);

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

  return (
    <>
      <h1>Step 3</h1>
      <h1>Upload Images</h1>
      <div>
        <input
          type="file"
          name="tripImages"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          value={state.tripImages.imageName}
        />
      </div>
      <div>
        <h1>Preview images</h1>
        <div>
          {state.tripImages.map((image, index) => (
            <div key={index}>
              <button onClick={() => handleDeleteImage(image.imageName)}>
                <CloseIcon />
              </button>
              <Image src={image.tripImageUrl} alt={image.imageName} width={60} height={60} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormStepThree;
