import { _decorator, Component, find, Node, quat, Quat, Vec2, Vec3} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('World')
export class Player extends Component {
    
    @property
    speed: number = 5

    @property
    q1: Quat = new Quat()

    @property
    player: Node

    rotateIsPlay:boolean = false
    delta:Vec2 = new Vec2(0, 0)

    start() {
        this.player = find("World/Player")
        this.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    update(deltaTime: number) {
        if(this.rotateIsPlay){
            let dy = this.delta.y - this.player.getWorldPosition().y
            let dx = this.delta.x - this.player.getWorldPosition().x 
            let angle = (Math.atan2(dy, dx) * 180 / Math.PI);
            Quat.fromEuler(this.q1, 0, 0, angle)
            this.player.rotation = this.q1
        }   
    }

    onMouseMove (event:any) {
        this.delta = event.getLocation();
        this.rotateIsPlay = true
    }
}


