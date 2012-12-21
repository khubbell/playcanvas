pc.script.create("pivot", function (context) {

    var Pivot = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };
 
    Pivot.prototype = {
        update: function (dt) {
            // Rotate 90 degrees around the world Y axis every second
            this.timer += dt;

	    var s = Math.sin(this.timer) + 1;
            this.entity.setLocalScale(s, s, s);

            this.entity.rotateLocal(90 * dt, 0, 0);
        }
    };
 
    return Pivot;
});