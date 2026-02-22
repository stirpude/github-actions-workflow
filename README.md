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



# CDK Capability Deployment

Automated GitOps deployment pipeline for AWS CDK capabilities.

## 📖 Overview

This repository uses a GitOps approach to deploy AWS CDK capabilities. Simply update a configuration file and push to trigger automatic deployment to AWS.

## 📁 Repository Structure 


## 📄 Configuration Files

### env.json (Required)

Shared environment configuration for all resources within a capability folder.

```json
{
  "account": "123456789012",
  "region": "us-east-1",
  "environment": "production",
  "tags": {
    "Project": "MyProject",
    "Team": "Platform",
    "CostCenter": "12345"
  },
  "vpc": {
    "id": "vpc-0123456789abcdef0",
    "subnets": {
      "private": ["subnet-abc123", "subnet-def456"],
      "public": ["subnet-ghi789", "subnet-jkl012"]
    }
  },
  "kms": {
    "keyArn": "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012"
  }
} 


Deployment Guide
Quick Start 

# 1. Clone repository
git clone https://github.com/your-org/your-repo.git
cd your-repo

# 2. Create feature branch
git checkout -b feature/update-config

# 3. Edit configuration
vim cdk-scripts/what-the-dimag-ka-lol/eks/cluster-prod.json

# 4. Validate JSON
jq empty cdk-scripts/what-the-dimag-ka-lol/eks/cluster-prod.json

# 5. Commit and push
git add cdk-scripts/what-the-dimag-ka-lol/eks/cluster-prod.json
git commit -m "feat(eks): update cluster configuration"
git push origin feature/update-config

# 6. Create PR and merge to main 

Step-by-Step Instructions
Step 1: Clone the Repository 

git clone https://github.com/your-org/your-repo.git
cd your-repo 

Step 2: Create a Feature Branch 
git checkout -b feature/your-change-description 

Step 3: Locate Your Configuration
Navigate to the appropriate capability folder: 

cd cdk-scripts/<domain-name>/<capability>/
# Example: cd cdk-scripts/what-the-dimag-ka-lol/eks/ 

Step 4: Update Configuration
Edit the configuration file: 

# Using your preferred editor
vim cluster-prod.json 

Step 6: Commit Changes 
git add cluster-prod.json
git commit -m "feat(eks): describe your change" 

Step 7: Push to Remote
git push origin feature/your-change-description 

Step 8: Create Pull Request
Go to GitHub repository
Click "Compare & pull request"
Add description and reviewers
Merge after approval 

Pipeline Stages 
detect-config-changes → validate-config → deploy-capability → post-deployment 

Note: 
Change only one configuration file per push
Ensure env.json exists in the capability folder
Validate JSON syntax before pushing
Use descriptive commit messages
Use feature branches