import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { Construct } from 'constructs';

export class MyLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Lambda function
    const myLambda = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      environment: {
        ENVIRONMENT: 'dev',
      },
      timeout: cdk.Duration.seconds(30),
      memorySize: 256,
    });

    // Output the Lambda function ARN
    new cdk.CfnOutput(this, 'LambdaFunctionArn', {
      value: myLambda.functionArn,
      description: 'Lambda Function ARN',
    });
  }
}
