//ECMAScript 5
export function Color(r,g,b,a) {
    this.r=r;
    this.g=g;
    this.b=b;
    this.a=a;
}
// ECMAScript 6
export class ColorModel{
    constructor(r,g,b,a) {
        this.r=r;
        this.g=g;
        this.b=b;
        this.a=a;
    }

}