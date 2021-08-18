class Launcher {
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:80
        }
        this.rope= Constraint.create (options)
        World.add(world,this.rope)
    } 

    display(){
        strokeWeight(4)
        if(this.rope.bodyA)
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
        
    }
    fly(){
        this.rope.bodyA= null 
    }
    attach(body){
        this.rope.bodyA=body 
    }
}


