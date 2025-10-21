let Frugt = [
"Citroner",
"Pærer",
"Appelsiner",
"Blommer"
]
let FruitInBasket: number[] = []
for (let value of Frugt) {
    Frugt.reverse()
    FruitInBasket.push(Frugt.length)
    Frugt.shift()
}
console.log(FruitInBasket[1])
