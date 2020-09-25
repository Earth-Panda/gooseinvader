namespace SpriteKind {
    export const humman = SpriteKind.create()
}
function spawn_human_F () {
    projectile = sprites.createProjectileFromSide(student_F[randint(0, student_F.length - 1)], 0, 30)
    projectile.setKind(SpriteKind.humman)
    projectile.x = randint(24, 40)
}
function spawn_wateranimal () {
    projectile = sprites.createProjectileFromSide(water_animal[randint(0, water_animal.length - 1)], 0, -75)
    projectile.setKind(SpriteKind.Food)
    projectile.x = randint(140, 140)
}
function create_sprites () {
    student_F = [sprites.castle.heroWalkFront1, sprites.builtin.villager1WalkFront1, sprites.builtin.villager2WalkFront1, sprites.builtin.villager3WalkFront1, sprites.builtin.villager4WalkFront1]
    student_B = [sprites.castle.heroWalkBack1, sprites.builtin.villager1WalkBack1, sprites.builtin.villager2WalkBack1, sprites.builtin.villager3WalkBack1, sprites.builtin.villager4WalkBack1]
    car_F = [sprites.vehicle.carRedFront, sprites.vehicle.carBlueFront, sprites.vehicle.carPinkFront]
    car_B = [sprites.vehicle.carRedBack, sprites.vehicle.carBlueBack, sprites.vehicle.carPinkBack]
    goose = sprites.create(img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . 2 f f 2 . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . 1 f f 1 . . . . . . 
        . . . . . . . f f . . . . . . . 
        b b d b b d 1 e e 1 d b d d b d 
        d e e e e e e e e e e e e e e d 
        b e e e e e e e e e e e e e e d 
        . b e d b e e e e e e d d e b . 
        . . d . . b b e e d d . . d . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . 1 e e b . . . . . . 
        . . . . . . 1 e e d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    water_animal = [sprites.builtin.angelFish1, sprites.builtin.clownFish2, sprites.builtin.hermitCrabAwaken5, sprites.builtin.shark1]
    land_animal = [sprites.builtin.cat1, sprites.builtin.forestBat0, sprites.builtin.forestMonkey0, sprites.builtin.forestSnake1]
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (honkscore >= 10) {
        honk1 = sprites.createProjectileFromSprite(img`
            1 1 1 1 1 . . . . . . . . . . . 
            . . 1 1 1 1 1 . . . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . . 1 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . . 1 
            `, goose, 100, -100)
        honk2 = sprites.createProjectileFromSprite(img`
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 1 1 . . . . . . . . . . . . . 
            . 1 1 . . . . . . . . . . . . . 
            . 1 1 1 . . . . . . . . . . . . 
            . . 1 1 . . . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . . . 1 1 1 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . 1 1 1 1 1 . . . . 
            . . . . . . . . . 1 1 1 1 1 . . 
            . . . . . . . . . . . . 1 1 1 1 
            `, goose, -100, 100)
        honk3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . 1 1 1 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . . 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 . . . . . . . . . 
            1 1 1 1 1 . . . . . . . . . . . 
            `, goose, 100, 100)
        honk4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . 1 1 1 1 1 
            . . . . . . . . . 1 1 1 1 1 . . 
            . . . . . . . 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 . . . . . . . . 
            . . . 1 1 1 1 . . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . . 1 1 . . . . . . . . . . . . 
            . 1 1 1 . . . . . . . . . . . . 
            . 1 1 . . . . . . . . . . . . . 
            1 1 1 . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            `, goose, -100, -100)
        honk5 = sprites.createProjectileFromSprite(img`
            . . . . . 1 1 1 . . . . . . . . 
            . . . . 1 1 1 . . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . 1 1 1 . . . . . . . . . . . . 
            . 1 1 . . . . . . . . . . . . . 
            1 1 1 . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . . 
            1 1 1 . . . . . . . . . . . . . 
            . 1 1 . . . . . . . . . . . . . 
            . 1 1 1 . . . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . . . 1 1 1 . . . . . . . . . 
            . . . . . 1 1 1 . . . . . . . . 
            `, goose, -100, 0)
        honk6 = sprites.createProjectileFromSprite(img`
            . . . . . . . 1 1 1 . . . . . . 
            . . . . . . . . . 1 1 1 . . . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . 1 1 1 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . 1 1 1 . . . 
            . . . . . . . . . 1 1 1 . . . . 
            . . . . . . . 1 1 1 . . . . . . 
            `, goose, 100, 0)
        honk7 = sprites.createProjectileFromSprite(img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            . . 1 1 . . . . . . . . 1 1 . . 
            . 1 1 . . . . . . . . . . 1 1 . 
            1 1 1 . . . . . . . . . . 1 1 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, goose, 0, -100)
        honk8 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            . 1 1 . . . . . . . . . . 1 1 . 
            . 1 1 1 . . . . . . . . 1 1 1 . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `, goose, 0, 100)
        honkscore = 0
    } else {
        scene.cameraShake(2, 100)
    }
})
function spawn_Car_F () {
    projectile = sprites.createProjectileFromSide(car_F[randint(0, car_F.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(55, 55)
}
function spawn_humman_B () {
    projectile = sprites.createProjectileFromSide(student_B[randint(0, student_B.length - 1)], 0, -30)
    projectile.setKind(SpriteKind.humman)
    projectile.x = randint(216, 232)
}
function spawn_Car_B () {
    projectile = sprites.createProjectileFromSide(car_B[randint(0, car_B.length - 1)], 0, -75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(199, 199)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    scene.cameraShake(2, 500)
    info.changeLifeBy(-1)
    if (info.life() == 1) {
        goose.startEffect(effects.fire)
    } else {
        goose.startEffect(effects.fire, 500)
    }
})
function spawn_landanimal () {
    still = sprites.create(land_animal[randint(0, land_animal.length - 1)], SpriteKind.humman)
    still.setKind(SpriteKind.Food)
    still.x = randint(56, 198)
    still.y = randint(56, 199)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.humman, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(2)
    honkscore += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(1)
    honkscore += 1
    animal_count += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.humman, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let roll = 0
let animal_count = 0
let still: Sprite = null
let honk8: Sprite = null
let honk7: Sprite = null
let honk6: Sprite = null
let honk5: Sprite = null
let honk4: Sprite = null
let honk3: Sprite = null
let honk2: Sprite = null
let honk1: Sprite = null
let land_animal: Image[] = []
let car_B: Image[] = []
let car_F: Image[] = []
let student_B: Image[] = []
let water_animal: Image[] = []
let student_F: Image[] = []
let projectile: Sprite = null
let honkscore = 0
let goose: Sprite = null
create_sprites()
goose.bottom = 120
controller.moveSprite(goose, 100, 100)
honkscore = 0
info.setScore(0)
info.setLife(3)
tiles.setTilemap(tilemap`level_3`)
scene.cameraFollowSprite(goose)
game.onUpdateInterval(2000, function () {
	
})
game.onUpdateInterval(2000, function () {
	
})
game.onUpdateInterval(2000, function () {
	
})
game.onUpdateInterval(2000, function () {
	
})
forever(function () {
    roll = randint(0, 30)
    if (0 <= roll && 8 >= roll) {
        spawn_Car_F()
    }
    if (8 < roll && 16 >= roll) {
        spawn_Car_B()
    }
    if (16 < roll && 19 >= roll) {
        spawn_human_F()
    }
    if (19 > roll && 22 >= roll) {
        spawn_humman_B()
    }
    if (animal_count < 5) {
        if (22 < roll && 28 >= roll) {
            spawn_landanimal()
            animal_count += 1
        }
    }
    if (28 < roll && 30 >= roll) {
        spawn_wateranimal()
    }
    pause(500)
})
