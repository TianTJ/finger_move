
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        layout:{
            default: null, 
            type: cc.Layout
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initui()
    },  
    initui: function(){
        this.stat_pos = 0
        this.end_pos = 0
        var self = this
        this.layout.node.on(cc.Node.EventType.TOUCH_START,function(event){
            self.stat_pos = self.layout.node.convertTouchToNodeSpace(event.touch)
        })
        this.layout.node.on(cc.Node.EventType.TOUCH_MOVE,function(event){
            var move_pos = self.layout.node.convertTouchToNodeSpace(event.touch)
        })
        this.layout.node.on(cc.Node.EventType.TOUCH_END,function(event){
            self.end_pos = self.layout.node.convertTouchToNodeSpace(event.touch)

            cc.log("stat_pos=="+self.stat_pos)
            cc.log("end_pos=="+self.end_pos)

            if(Math.abs((self.end_pos.x - self.stat_pos.x)) > 100){
                if(self.end_pos.x < self.stat_pos.x){
                    cc.log("right")
                }else{
                    cc.log("left")
                }
                self.change_color()
            }
        })
    },
    change_color: function(){
        var type = Math.floor(Math.random() * 5+1); 
        switch (type){
            case 1:
                this.layout.node.color = cc.Color.RED
                break;
            case 2:
                this.layout.node.color = cc.Color.GREEN
                break;
            case 3:
                this.layout.node.color = cc.Color.YELLOW
                break;
            case 4:
                this.layout.node.color = cc.Color.WHITE
                break;
            case 5:
                this.layout.node.color = cc.Color.BLUE
                break;          
        }
       
    },
    start () {

    },

    // update (dt) {},
});
