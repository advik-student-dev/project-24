class paperClass {
    constructor(x, y, d) {
        var options =
        {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, d, options);

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.positon;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        ellipse(0, 0, this.d);
        pop();
    }
}