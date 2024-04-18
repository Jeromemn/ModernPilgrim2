'use server';
import getS3Client from '@/lib/s3';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';

export async function deleteImage({ key }) {
  try {
    const s3 = await getS3Client();
    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    });
    const response = await s3.send(command);
    console.log('delete response:', response);
    return response;
  } catch (error) {
    console.error('Error deleting image:', error);
    return { error };
  }
}
