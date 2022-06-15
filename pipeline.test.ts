import { pipeline } from "./pipelines";


test('should return 8', () => {
    const f1 = (num:number) => num + 2;
    const f2 = (num:number) => num * 4;
    const f3 = (num:number) => num / 2;

    const functions = [f1, f2, f3];
    const options = {
        firstArgument: 2
    }

    const pipelineReturn = pipeline(functions, options);

    expect(pipelineReturn).toBe(8);
});


test('should return NaN', () => {
    const f1 = (num:number) => num + 2;
    const f2 = (num:number) => num * 4;
    const f3 = (num:number) => num / 2;

    const functions = [f1, f2, f3];

    const pipelineReturn = pipeline(functions);

    expect(pipelineReturn).toBeNaN();
});


test('should return undefined', () => {
    const f1 = () => console.log('hello ');
    const f2 = () => console.log('world');

    const functions = [f1, f2];

    const pipelineReturn = pipeline(functions);

    expect(pipelineReturn).toBeUndefined();
});
