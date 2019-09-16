/**
 * food module
 */
//food-function
(function () {
    var elements = [];//save every food
    //food is a object with width, height, color, and position
    function Food(x, y, width, height, color) {
        //横纵坐标
        this.x = x || 0;
        this.y = y || 0;
        //宽和高
        this.width = width || 20;
        this.height = height || 20;
        //背景颜色
        this.color = color || "green";
    }

    //initial funcion
    Food.prototype.init = function (map) {
        //remove food first, can be used from outside
        remove();

        //create div
        var div = document.createElement("div");
        //add div to map
        map.appendChild(div);
        //set div's style
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        //use absolute
        div.style.position = "absolute";
        //create position randomly
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";

        //add div to the array of elements
        elements.push(div);
    };

    //delete food
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //find the father of the element, then delete the element
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    //export food to window
    window.Food = Food;
}());
