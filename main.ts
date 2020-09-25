enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walk_up,
    walk_down,
    walk_left,
    walk_right
}
namespace SpriteKind {
    export const humman = SpriteKind.create()
}
function spawn_human_F () {
    projectile = sprites.createProjectileFromSide(student_F[randint(0, student_F.length - 1)], 0, 30)
    projectile.setKind(SpriteKind.humman)
    projectile.x = randint(24, 40)
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
    birds = [img`
        . . . . . . . . d 1 . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . d 1 1 1 . . . . . . 
        . . . . . . d 1 1 1 . . . . . . 
        . . . . . . d 1 1 1 . . . . . . 
        d d . . 4 d 1 1 1 1 . 1 1 9 . . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 
        d d . . 4 d 1 1 1 1 . 1 1 9 . . 
        . . . . . . d 1 1 1 . . . . . . 
        . . . . . . d 1 1 1 . . . . . . 
        . . . . . . d 1 1 1 . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . d 1 1 . . . . . . 
        . . . . . . . . d 1 . . . . . . 
        `, img`
        . . . . . . . . d 4 . . . . . . 
        . . . . . . . d 4 4 . . . . . . 
        . . . . . . . d 4 8 . . . . . . 
        . . . . . . d 4 4 8 . . . . . . 
        . . . . . . d e 8 8 . . . . . . 
        . . . d d . e e 8 8 . . . . . . 
        7 7 . . d d e 8 8 8 . 8 1 f . . 
        5 7 7 5 7 7 e 8 8 8 8 8 8 8 5 5 
        7 5 7 7 7 7 e 8 8 8 8 8 8 8 5 5 
        5 7 . . d d e 8 8 8 . 8 1 f . . 
        . . . d d . e e 8 8 . . . . . . 
        . . . . . . d e 8 8 . . . . . . 
        . . . . . . d 4 4 8 . . . . . . 
        . . . . . . . d 4 8 . . . . . . 
        . . . . . . . d 4 4 . . . . . . 
        . . . . . . . . d 4 . . . . . . 
        `, img`
        . . . . . . . . c f . . . . . . 
        . . . . . . . c f f . . . . . . 
        . . . . . . . c f f . . . . . . 
        . . . . . . c f f f . . . . . . 
        . . . . . . c f f f . . . . . . 
        . . . . . . c f f f . . . . . . 
        c c . . 4 c f f f f . f f 2 . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        c c . . 4 c f f f f . f f 2 . . 
        . . . . . . c f f f . . . . . . 
        . . . . . . c f f f . . . . . . 
        . . . . . . c f f f . . . . . . 
        . . . . . . . c f f . . . . . . 
        . . . . . . . c f f . . . . . . 
        . . . . . . . . c f . . . . . . 
        `]
    birds_B = [img`
        . . . . . . 1 d . . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . 1 1 d 1 . . . . . . 
        . . . . . . 1 1 1 d . . . . . . 
        . . . . . . 1 1 1 d . . . . . . 
        . . 9 1 1 . 1 1 1 1 1 4 . . 1 1 
        f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
        f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
        . . 9 1 1 . 1 1 1 1 1 4 . . 1 1 
        . . . . . . 1 1 1 d . . . . . . 
        . . . . . . 1 1 1 d . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . 1 1 d . . . . . . . 
        . . . . . . 1 d . . . . . . . . 
        `, img`
        . . . . . . 4 d . . . . . . . . 
        . . . . . . 4 4 d . . . . . . . 
        . . . . . . 8 4 d . . . . . . . 
        . . . . . . 8 4 4 d . . . . . . 
        . . . . . . 8 8 e d . . . . . . 
        . . . . . . 8 8 e e d . . . . . 
        . . f 1 8 . 8 8 8 e d . . . 7 7 
        5 5 8 8 8 8 8 8 8 e 7 7 5 7 5 7 
        5 5 8 8 8 8 8 8 8 e 7 7 7 5 7 7 
        . . f 1 8 . 8 8 8 e d . . . 7 5 
        . . . . . . 8 8 e e d . . . . . 
        . . . . . . 8 8 e d . . . . . . 
        . . . . . . 8 4 4 d . . . . . . 
        . . . . . . 8 4 d . . . . . . . 
        . . . . . . 4 4 d . . . . . . . 
        . . . . . . 4 d . . . . . . . . 
        `, img`
        . . . . . . f c . . . . . . . . 
        . . . . . . f f c . . . . . . . 
        . . . . . . f f c . . . . . . . 
        . . . . . . f f f c . . . . . . 
        . . . . . . f f f c . . . . . . 
        . . . . . . f f f c . . . . . . 
        . . 2 f c . f f f f c . . f f f 
        c c f f f f f f f f f f f f c c 
        c c f f f f f f f f f f f f c c 
        . . 2 f c . f f f f c . . f f f 
        . . . . . . f f f c . . . . . . 
        . . . . . . f f f c . . . . . . 
        . . . . . . f f f c . . . . . . 
        . . . . . . f f c . . . . . . . 
        . . . . . . f f c . . . . . . . 
        . . . . . . f c . . . . . . . . 
        `]
    land_animal = [sprites.builtin.cat1, sprites.builtin.forestBat0, sprites.builtin.forestMonkey0, sprites.builtin.forestSnake1]
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (honkscore >= 10) {
        goose.startEffect(effects.smiles, 1000)
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
            `, goose, 71, -71)
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
            `, goose, -71, 71)
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
            `, goose, 71, 71)
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
            `, goose, -71, -71)
        honk5 = sprites.createProjectileFromSprite(img`
            . . . . 1 1 1 1 . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
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
            . . 1 1 1 . . . . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . . . 1 1 1 1 . . . . . . . . 
            `, goose, -100, 0)
        honk6 = sprites.createProjectileFromSprite(img`
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . . . . 1 1 1 1 . . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . 1 1 1 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . 1 1 1 1 . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            `, goose, 100, 0)
        honk7 = sprites.createProjectileFromSprite(img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            . 1 1 1 . . . . . . . . 1 1 1 . 
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
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `, goose, 0, 100)
        honkscore = 0
        music.pewPew.play()
        sound_Played = false
    } else {
        scene.cameraShake(2, 100)
    }
})
function spawn_Car_F () {
    projectile = sprites.createProjectileFromSide(car_F[randint(0, car_F.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(55, 55)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (honkscore >= 10) {
        goose.startEffect(effects.smiles, 1000)
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
            `, goose, 71, -71)
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
            `, goose, -71, 71)
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
            `, goose, 71, 71)
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
            `, goose, -71, -71)
        honk5 = sprites.createProjectileFromSprite(img`
            . . . . 1 1 1 1 . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
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
            . . 1 1 1 . . . . . . . . . . . 
            . . . 1 1 1 . . . . . . . . . . 
            . . . . 1 1 1 1 . . . . . . . . 
            `, goose, -100, 0)
        honk6 = sprites.createProjectileFromSprite(img`
            . . . . . . . 1 1 1 1 . . . . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . . . . 1 1 1 1 . . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . 1 1 1 
            . . . . . . . . . . . . . 1 1 . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . 1 1 1 1 . . 
            . . . . . . . . . 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            `, goose, 100, 0)
        honk7 = sprites.createProjectileFromSprite(img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 . . . . 1 1 1 1 . . 
            . 1 1 1 . . . . . . . . 1 1 1 . 
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
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            `, goose, 0, 100)
        honkscore = 0
    } else {
        scene.cameraShake(2, 100)
    }
})
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
function spawn_bird () {
    if (1 == randint(1, 2)) {
        pos_neg = 75
        projectile = sprites.createProjectileFromSide(birds[randint(0, birds.length - 1)], pos_neg, 0)
        projectile.setKind(SpriteKind.Enemy)
        projectile.y = randint(0, 190)
    } else {
        pos_neg = -75
        projectile = sprites.createProjectileFromSide(birds_B[randint(0, birds_B.length - 1)], pos_neg, 0)
        projectile.setKind(SpriteKind.Enemy)
        projectile.y = randint(0, 190)
    }
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
    music.playMelody("D C - - - - - - ", 120)
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
    music.magicWand.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(1)
    honkscore += 1
    animal_count += -1
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.humman, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let roll = 0
let walk_right: animation.Animation = null
let walk_left: animation.Animation = null
let walk_down: animation.Animation = null
let walk_up: animation.Animation = null
let animal_count = 0
let still: Sprite = null
let pos_neg = 0
let sound_Played = false
let honk8: Sprite = null
let honk7: Sprite = null
let honk6: Sprite = null
let honk5: Sprite = null
let honk4: Sprite = null
let honk3: Sprite = null
let honk2: Sprite = null
let honk1: Sprite = null
let land_animal: Image[] = []
let birds_B: Image[] = []
let birds: Image[] = []
let car_B: Image[] = []
let car_F: Image[] = []
let student_B: Image[] = []
let student_F: Image[] = []
let projectile: Sprite = null
let honkscore = 0
let goose: Sprite = null
tiles.setTilemap(tilemap`level_3`)
create_sprites()
let boool = true
goose.bottom = 120
controller.moveSprite(goose, 85, 85)
honkscore = 0
info.setScore(0)
info.setLife(3)
scene.cameraFollowSprite(goose)
let statusbar = statusbars.create(4, 50, StatusBarKind.Energy)
statusbar.setColor(5, 15)
statusbar.positionDirection(CollisionDirection.Left)
statusbar.setBarBorder(1, 13)
statusbar.setLabel("HONK")
let start = 0
game.onUpdate(function () {
    if (goose.vx > 0) {
        animation.setAction(goose, ActionKind.walk_right)
    } else {
        animation.setAction(goose, ActionKind.Idle)
    }
    if (goose.vx < 0) {
        animation.setAction(goose, ActionKind.walk_left)
    } else {
        animation.setAction(goose, ActionKind.Idle)
    }
    if (goose.vy < 0) {
        animation.setAction(goose, ActionKind.walk_down)
    } else {
        animation.setAction(goose, ActionKind.Idle)
    }
    if (goose.vy > 0) {
        animation.setAction(goose, ActionKind.walk_up)
    } else {
        animation.setAction(goose, ActionKind.Idle)
    }
})
forever(function () {
    for (let start = 0; start <= 1; start++) {
        walk_up = animation.createAnimation(ActionKind.walk_up, 100)
        animation.attachAnimation(goose, walk_up)
        walk_up.addAnimationFrame(img`
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
            `)
        walk_down = animation.createAnimation(ActionKind.walk_down, 100)
        animation.attachAnimation(goose, walk_down)
        walk_down.addAnimationFrame(img`
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
            `)
        walk_left = animation.createAnimation(ActionKind.walk_left, 100)
        animation.attachAnimation(goose, walk_left)
        walk_left.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        walk_right = animation.createAnimation(ActionKind.walk_right, 100)
        animation.attachAnimation(goose, walk_right)
        walk_right.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        start = 1
    }
})
forever(function () {
    roll = randint(0, 30)
    if (0 <= roll && 8 >= roll) {
        spawn_Car_F()
    }
    if (8 < roll && 16 >= roll) {
        spawn_Car_B()
    }
    if (16 < roll && 18 >= roll) {
        spawn_human_F()
    }
    if (18 < roll && 20 >= roll) {
        spawn_humman_B()
    }
    if (animal_count < 5) {
        if (22 < roll && 28 >= roll) {
            spawn_landanimal()
            animal_count += 1
        }
    }
    if (14 < roll && 30 >= roll) {
        spawn_bird()
    }
    pause(500)
})
forever(function () {
    if (sound_Played == false && 10 <= honkscore) {
        music.powerUp.play()
        sound_Played = true
    }
    statusbar.value = 10 * honkscore
})
