import { OptionsProps } from "./@types/pipelines";

function logAction(functionName:string, returnData:any){
	console.log(`
		Returned from function: ${functionName}
	
		${JSON.stringify(returnData)}
	`)
}

function logError(functionName:string, error:any){
	console.error(`
		Error at function: ${functionName}
		
		${JSON.stringify(error)} 
	`)
}




/**
 * @param { Function[] } functions - the functions to use in the pipeline
 * @param { OptionsProps } options 
 * @param { boolean } options.logErrors - show errors on terminal
 * @param { boolean } options.logActions - show returned values from each function
 * @param { any } options.firstArgument - the argument for the first function
 * @returns { Promise<any> } - returns the result of cascade execution
 */
export function pipeline(functions: Function[], options?: OptionsProps): any {
	const { logErrors, logActions, firstArgument } = options || {};
	let returnData: any = firstArgument;

	for(let functionIndex in functions){
		const actualFunction = functions[functionIndex];
		const { name: functionName } = actualFunction;

		try{
			returnData = actualFunction(returnData);

			if(!!logActions) logAction(functionName, returnData);

		}catch (error: any) {
			if (!!logErrors) logError(functionName, error);
		}
	}

	return returnData;
}






/**
 * @param { Function[] } functions - the functions to use in the pipeline
 * @param { OptionsProps } options 
 * @param { boolean } options.logErrors - show errors on terminal
 * @param { boolean } options.logActions - show returned values from each function
 * @param { any } options.firstArgument - the argument for the first function
 * @returns { Promise<any> } - returns the result of cascade execution
 */

export async function asyncPipeline(functions: Function[], options?: OptionsProps): Promise<any> {

	const { logErrors, logActions, firstArgument } = options || {};
	let returnData: any = firstArgument;

	for(let functionIndex in functions){
		const actualFunction = functions[functionIndex];
		const { name: functionName } = actualFunction;

		try{
			returnData = await actualFunction(returnData);

			if(!!logActions) logAction(functionName, returnData);

		}catch (error: any) {
			if (!!logErrors) logError(functionName, error);
		}
	}



	return returnData;
}
