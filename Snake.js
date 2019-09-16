/**
 * snake module
 */
//the function of snake
(function () {
    var elements = [];//save the body of snake
    function Snake(width, height, direction) {
        //the width of body of snake
        this.width = width || 20;
        this.height = height || 20;
        //the body of snake
        this.body = [
            {x: 3, y: 2, color: "red"},//head
            {x: 2, y: 2, color: "orange"},//body
            {x: 1, y: 2, color: "orange"}//body
        ];
        //direction
        this.direction = direction || "right";
    }

    //add prototype--inital the function of snake
    Snake.prototype.init = function (map) {
        //delement the previous snake
        remove();//===========================================

        //use for to create div
        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var div = document.createElement("div");
            //add div to map
            map.appendChild(div);
            //set the stype of div
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            div.style.backgroundColor = obj.color;
            //add div to the array of element ---easily delete
            elements.push(div);
        }
    };

    //add prototype --move of snake
    Snake.prototype.move = function (food, map) {
        //change the position of body of snake
        var i = this.body.length - 1;//2
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //hange the position of head according to the direct
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }

        //the postion of head and food is same
        var headX=this.body[0].x*this.width;
        var headY=this.body[0].y*this.height;
        //if the postion of head and food is same
        if(headX==food.x&&headY==food.y){
            //get the last body of snake
            var last=this.body[this.body.length-1];
            // copy the last body and add to the body of snake
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            });
            //delete food and inital food
            food.init(map);
        }
    }
    ;//delete the function of snake============================================================================
    function remove() {
        // delete the snake body, and delete elements in array
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    //export snake to window
    window.Snake = Snake;
}());