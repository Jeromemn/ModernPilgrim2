'use server';
import getS3Client from '@/lib/s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { v4 as uuidv4 } from 'uuid';

export async function getPresignedUrl(fileName) {
  try {
    const s3 = await getS3Client();
    const post = await createPresignedPost(s3, {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `${uuidv4()}-${fileName}`,
      Expires: 60,
    });

    return post;
  } catch (error) {
    console.error('Error getting presigned URL:', error);
    return { error };
  }
}
