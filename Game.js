/**
 * Game module
 */
//game function
(function () {

    var that = null;//save the object of game

    //function of game
    function Game(map) {
        this.food = new Food();//create food
        this.snake = new Snake();//create snake
        this.map = map;//map
        that = this;
    }

    //inital game -- show snake and food
    Game.prototype.init = function () {
        //inital game
        //inital food
        this.food.init(this.map);
        //inital snake
        this.snake.init(this.map);
        // use the function of movement of snake
        this.runSnake(this.food, this.map);
        //use key function
        this.bindKey();//========================================
    };

    //add prototype
    Game.prototype.runSnake = function (food, map) {

        //movement
        var timeId = setInterval(function () {
            //this is window
            //move snake
            this.snake.move(food, map);
            //intial snake
            this.snake.init(map);
            //the max of the offsetWidth
            var maxX = map.offsetWidth / this.snake.width;
            //the max of Y
            var maxY = map.offsetHeight / this.snake.height;
            //the position of head
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                //clear internal
                clearInterval(timeId);
                alert("游戏结束");
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timeId);
                alert("游戏结束");
            }
        }.bind(that), 300);
    };

    //add prototype---set key function to change the direction of movement
    Game.prototype.bindKey=function () {

        //fetch the key, then change the directio of movement
        document.addEventListener("keydown",function (e) {
            switch (e.keyCode){
                case 37:this.snake.direction="left";break;
                case 38:this.snake.direction="top";break;
                case 39:this.snake.direction="right";break;
                case 40:this.snake.direction="bottom";break;
            }
        }.bind(that),false);
    };

    //export the game to window
    window.Game = Game;
}());

