import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

// this package for getting signed url when directly accesing files through s3 from our server
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// this package for getting signed url when we are using cloudfront to access files from s3 and then serve to client
// import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

const bucketName = process.env.S3_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function uploadFile(fileBuffer, fileName, mimetype) {
  // file object to upload
  const uploadParams = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: fileName,
    ContentType: mimetype,
  };

  return s3Client.send(new PutObjectCommand(uploadParams));
}

export function deleteFile(fileName) {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileName,
  };

  //   await getSignedUrl(s3Client, uploadParams);

  return s3Client.send(new DeleteObjectCommand(deleteParams));
}

export async function getObjectSignedUrl(key) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  const command = new GetObjectCommand(params);
  const seconds = 60;

  const url = await getSignedUrl(s3Client, command, {
    expiresIn: seconds,
  });

  return url;
}
