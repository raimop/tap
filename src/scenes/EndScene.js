/* jshint esversion:6*/
import {
    CST
} from "../CST.js";

export class EndScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.END
        });
    }

    init() {
        console.log("EndScene loading...");
    }

    preload() {
        this.load.image("worst", "assets/worst.png");
        this.load.image("medium", "assets/medium.png");
        this.load.image("best", "assets/best.png");
        this.load.image("dead", "assets/dead.png");
        this.load.image("restart", "assets/restart.png");
    }

    create() {
        let gameScene = this.scene.get(CST.SCENES.WORLD);

        this.scene.stop('WorldScene');
        this.scene.stop('UIScene');
        this.scene.stop('HelpScene');
        console.log(gameScene.karma);

        if (gameScene.karma >= 1 && gameScene.karma < 31 && gameScene.playerHealth > 0) {
            console.log("worst");
            /* this.ending = this.add.text(150, 45, 'Oh no! Turns out that the king was mind controlled by the chickens and helped them in pursuit of taking over the village and then, the world! With the slime people out of sight, chickens now had the ultimate power over every living being...including Po.', { fill: '#0f0', fontSize: 12 , wordWrap: { width: 160}}); */
            let worst = this.add.image(0, 0, "worst").setOrigin(0);
        }
        if (gameScene.karma >= 31 && gameScene.karma < 98 && gameScene.playerHealth > 0) {
            console.log("medium");
            /*             this.ending = this.add.text(150, 40, 'The king banished Po from the village! He was confused, but soon came by an old witch who explained that the chickens were mind controlling the villagers. Now that the slimes are gone, it is only matter of time before chickens regain their power and take over the world.', { fill: '#0f0', fontSize: 12 , wordWrap: { width: 165}}); */
            let medium = this.add.image(0, 0, "medium").setOrigin(0);

        }
        if (gameScene.karma >= 98 && gameScene.playerHealth > 0) {
            console.log("best");
            /* this.ending = this.add.text(150, 45, 'The villagers regained their consciousness after all the mind controlling chickens were killed. The king was forever grateful for saving villagers. He granted Po the title of hero. Without chickens and dangerous slimes, the village lived happily ever after.', { fill: '#0f0', fontSize: 12 , wordWrap: { width: 160}}); */
            let best = this.add.image(0, 0, "best").setOrigin(0);
        }
        if (gameScene.playerHealth <= 0) {
            console.log("dead");
            /* this.ending = this.add.text(150, 45, 'Po died and thus he was unable to save the village and redeem himself', { fill: '#0f0', fontSize: 12 , wordWrap: { width: 160}}); */
            let dead = this.add.image(0, 0, "dead").setOrigin(0);
        }

        const start = this.add.image(250, 260, 'restart')
            .setInteractive()
            .on('pointerdown', () => {
                this.scene.start('BootScene');
                gameScene.karma = 0;
                gameScene.playerHealth = 100;
                gameScene.enemiesKilled = 0;
            })
        console.log("EndScene loaded"); // end
    }

    update() {

    }

}
