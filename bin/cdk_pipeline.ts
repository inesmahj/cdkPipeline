import { CdkPipelineStack } from './../lib/cdk_pipeline-stack';

import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';


const app = new cdk.App();
new CdkPipelineStack(app, 'PipelineStack', {
  env: {

    account: '299776909111',
    region: 'eu-central-1',
  }
});

app.synth();