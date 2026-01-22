import * as cdk from 'aws-cdk-lib';
import { MyLambdaCdkStack } from '../lib/lambda';

const app = new cdk.App();
new MyLambdaCdkStack(app, 'MyLambdaCdkStack');
