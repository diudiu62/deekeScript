declare global {
    var Images: Images;
}

interface Mat {
}

interface Point {
    x: number;
    y: number;
}

interface Images {
    public getMat(imageFile: string): Mat;

    public findOne(source: Mat, template: Mat, threshold: number): Point;

    public find(source: Mat, template: Mat, threshold: number): Point[];

    public capture(): string;

    public getColor(imageFile: string, pixelX: number, pixelY: number): string;

    public findColor(imageFile: string, color: string): Point[];

    public findColor(imageFile: string, startColor: string, endColor: string): Point[];

    public crop(imageFile: string, left: number, top: number, width: number, height: number): string;

    public scale(imageFile: string, multiple: number): string;

    public getText(imageFile: string): string[];
}

export { };
