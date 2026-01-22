# My CDK App

This project is an AWS CDK application that deploys a Lambda function using GitHub Actions with an OIDC role for secure deployment.

## Project Structure

```
my-cdk-app
├── bin
│   └── app.ts               # Entry point for the AWS CDK application
├── lib
│   ├── lambda-stack.ts      # Defines the Lambda stack and resources
│   └── constructs
│       └── lambda-function.ts # Encapsulates the Lambda function creation
├── lambda
│   ├── index.ts             # Code for the Lambda function
│   └── package.json         # Dependencies for the Lambda function
├── .github
│   └── workflows
│       └── deploy.yml       # GitHub Actions workflow for deployment
├── cdk.json                 # CDK application configuration
├── package.json             # Root-level npm configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. **Install AWS CDK**: Make sure you have the AWS CDK installed. You can install it globally using npm:

   ```
   npm install -g aws-cdk
   ```

2. **Install Dependencies**: Navigate to the project root and install the necessary dependencies:

   ```
   npm install
   ```

3. **Deploy the Stack**: Use the following command to deploy the Lambda function:

   ```
   cdk deploy
   ```

## Usage

- The Lambda function is defined in `lambda/index.ts`. You can modify the function's logic as needed.
- The deployment process is automated using GitHub Actions, defined in `.github/workflows/deploy.yml`. Ensure that your GitHub repository is configured to use OIDC for secure deployments.

## License

This project is licensed under the MIT License.