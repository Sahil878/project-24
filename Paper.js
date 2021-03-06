class Paper{
    constructor(x,y,width,height){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        
        this.body=ellipse(x,y,radius,options)

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
       translate(pos.x,pos.y)
       rotate(angle)
       fill(255)
       pop()
    }

}
    