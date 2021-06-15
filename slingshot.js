class slingshot{
   
   constructor(bodyA,bodyB){
   var jason ={
       bodyA:bodyA,
       bodyB:bodyB,
       stiffness: 0.04,
       length: 50
   }

   this.sling = Constraint.create(jason);
   
   World.add(world , this.sling)
   }
   display(){
       var pointA= this.sling.bodyA.position;
       var pointB= this.sling.bodyB.position;
       strokeWeight(7)
       line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
 




}