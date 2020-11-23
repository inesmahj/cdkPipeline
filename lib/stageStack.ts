import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { LambdaStack } from './lambdaStack';

/**
 * Deployable unit of web service app
 */
export class StageStack extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new LambdaStack(this, 'WebService');
    
    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }

}