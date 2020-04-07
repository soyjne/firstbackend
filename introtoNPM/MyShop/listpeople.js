var faker = require('faker');

for (var i = 1; i <= 10; i++) {
   bringdata()
}

function bringdata() {

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    console.log(randomName)
    console.log(randomEmail)

}