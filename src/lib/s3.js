'use server';
import { S3Client } from '@aws-sdk/client-s3';

let s3Client;

export default async function getS3Client() {
  try {
    if (!s3Client) {
      s3Client = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      });
    }
    return s3Client;
  } catch (error) {
    throw new Error('Error creating S3 client');
  }
}
