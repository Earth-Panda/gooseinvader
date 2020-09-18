namespace SpriteKind {
    export const humman = SpriteKind.create()
}
function create_sprites () {
    student_F = [sprites.castle.heroWalkFront1, sprites.builtin.villager1WalkFront1, sprites.builtin.villager2WalkFront1, sprites.builtin.villager3WalkFront1, sprites.builtin.villager4WalkFront1]
    student_B = [sprites.castle.heroWalkBack1, sprites.builtin.villager1WalkBack1, sprites.builtin.villager2WalkBack1, sprites.builtin.villager3WalkBack1, sprites.builtin.villager4WalkBack1]
    car_F = [sprites.vehicle.carRedFront, sprites.vehicle.carBlueFront, sprites.vehicle.carPinkFront]
    car_B = [sprites.vehicle.carRedBack, sprites.vehicle.carBlueBack, sprites.vehicle.carPinkBack]
    goose = sprites.create(sprites.duck.duck6, SpriteKind.Player)
    car_B = [sprites.vehicle.carRedBack, sprites.vehicle.carBlueBack, sprites.vehicle.carPinkBack]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.humman, function (sprite, otherSprite) {
    scene.cameraShake(2, 500)
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.hearts, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.humman, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let car_B: Image[] = []
let car_F: Image[] = []
let student_B: Image[] = []
let student_F: Image[] = []
let goose: Sprite = null
create_sprites()
goose.bottom = 120
controller.moveSprite(goose, 100, 100)
info.setScore(0)
info.setLife(3)
tiles.setTilemap(tilemap`level_3`)
scene.cameraFollowSprite(goose)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(student_B[randint(0, student_B.length - 1)], 0, -30)
    projectile.setKind(SpriteKind.humman)
    projectile.x = randint(216, 232)
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(student_F[randint(0, student_F.length - 1)], 0, 30)
    projectile.setKind(SpriteKind.humman)
    projectile.x = randint(24, 40)
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(car_F[randint(0, car_F.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(55, 55)
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(car_B[randint(0, car_B.length - 1)], 0, -75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(199, 199)
})
