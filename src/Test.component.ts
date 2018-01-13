export class Test{
    text="const value";
    constructor(private _value:String){
    }
   
    public get value(){
        return this._value;
    }
    public getObject(){
        return this;
    }
}