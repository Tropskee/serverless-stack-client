const config = {
  STRIPE_KEY:
    "pk_test_51IUBllBJptsjsE3xXru2iicymFRAuFOpJZ4K6Qw2zZe5wxy7L4whubLGTZYhuA3VWctbWriMKCiC1pKpciw975NE00ccge4jH9",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "note-app-user-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://om32h2vdl0.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_bvsDS1hMN",
    APP_CLIENT_ID: "5m47bkuasmmoqhhbngqettsj81",
    IDENTITY_POOL_ID: "us-east-2:5048ad7a-8f09-405f-85a9-22062f941c49",
  },
};

export default config;
