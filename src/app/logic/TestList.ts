export class Test {
    name: string;
    tested: Date;
    result: string;

    contextId: number;
    entityType: string;
    propertyName: string;
    conditionalTest: string;
    propertyValue

}

export class TestList {
    status: string;

    inputList: string;

    tests: Array<Test>;

    
}