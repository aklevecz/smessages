const s3 = new aws.S3();

exports.handler = async (event) => {
  console.log(event);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Helloh from aaa!"),
  };
  return response;
};
