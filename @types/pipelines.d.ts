
export interface OptionsProps {
	logErrors?: boolean;
	logActions?: boolean;
	firstArgument?: any;
}

export declare function pipeline(functions: Function[], options?: OptionsProps): any;
export declare function asyncPipeline(functions: Function[], options?: OptionsProps): Promise<any>;

