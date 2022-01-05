# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Rest.destroy_all


user1 = User.create(username:'gracie235', fname:'Grace', lname:'See', email:'gsee@gmail.com', phone:'123456', password: 'password')
user2 = User.create(username:'eloise09', fname:'Eloise', lname:'Koh', email:'ekoh@gmail.com', phone:'0000000', password: 'password')
user3 = User.create(username:'billy', fname:'Bill', lname:'Omaha', email:'bill@gmail.com', phone:'1111111', password: 'password')
user4 = User.create(username:'roselyn', fname:'Lara', lname:'Mendelssohn', email:'cool@gmail.com', phone:'2222222', password: 'password')
user5 = User.create(username:'aime888', fname:'Amy', lname:'Toby', email:'amytoby@gmail.com', phone:'3333333', password: 'password')
user6 = User.create(username:'opencafe', fname:'Nancy', lname:'King', email:'nancy@gmail.com', phone:'4444444', password: 'password')
demo = User.create(username:'demo user', fname:'Demo User', lname:'User', email:'demo@gmail.com', phone:'909090', password: 'password')

rest1 = Rest.create!(
    name: 'Al Badawi', 
    description: 'Abdul Elenani and Ayat Masoud, who opened Ayat in Bay Ridge to much acclaim, are ready to give Palestinian food another push in Brooklyn Heights', 
    address: '151 Atlantic Avenue', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11201', 
    cuisine:'Middle Eastern', 
    neighborhood:'NoHo', 
    owner_id: user1.id
)

file1 = open('https://openspot-seeds.s3.amazonaws.com/albadawi_thumbnail.jpg')
rest1.photos.attach(io: file1, filename: 'albadawi_thumbnail.jpg')

rest2 = Rest.create!(
    name: 'Aldama', 
    description: 'Contemporary, upscale takes on Mexican classics in an unpretentious venue with outdoor seating.', 
    address: '91 S 6th St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11249', 
    cuisine:'Mexican', 
    neighborhood:'Williamsburg', 
    owner_id:user2.id
)

file2 = open('https://openspot-seeds.s3.amazonaws.com/aldama_thumbnail.jpg')
rest2.photos.attach(io: file2, filename: 'aldama_thumbnail.jpg')


rest3 = Rest.create!(
    name: 'Angel Indian Restaurant', 
    description: 'Compact, unassuming eatery specializing in vegetarian North Indian dishes & street food staples.', 
    address: '7414 37th Rd', 
    city: 'Queens', 
    state: 'NY', 
    zip: '11372', 
    cuisine:'Indian', 
    neighborhood:'Jackson Heights', 
    owner_id: user3.id
)

file3 = open('https://openspot-seeds.s3.amazonaws.com/angel-indian-thumbnail.jpg')

rest3.photos.attach(io: file3, filename: 'angel_thumbnail.jpg')

rest4 = Rest.create!(
    name: 'Anything At All', 
    description: 'Recharge with tasty offerings including coffee drinks, bottled cocktails and more at Graduate Roosevelt Island lobby cafe', 
    address: '22 N Loop Rd', 
    city: 'New York', 
    state: 'NY', 
    zip: '10044', 
    cuisine:'American', 
    neighborhood:'Roosevelt Island', 
    owner_id: user3.id
)

file4 = open('https://openspot-seeds.s3.amazonaws.com/anythingatall_thumbnail.jpg')

rest4.photos.attach(io: file4, filename: 'anythingatall_thumbnail.jpg')

rest5 = Rest.create!(
    name: 'As You Are', 
    description: 'A restaurant, bakery and bar in Boerum Hill, Brooklyn.', 
    address: '252 Schermerhorn St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11217', 
    cuisine:'Bakery', 
    neighborhood:'Boerum Hill', 
    owner_id: user4.id
)

file5 = open('https://openspot-seeds.s3.amazonaws.com/asyouare-thumbnail.jpg')

rest5.photos.attach(io: file5, filename: 'asyouare_thumbnail.jpg')

rest6 = Rest.create!(
    name: 'Bar Blondeau', 
    description: 'Bar Blondeau is a French-style bar from chef partners Aidan O’Neal and Jake Leiber (Le Crocodile, Chez Ma Tante), located on the 6th floor of Wythe Hotel, in the heart of Williamsburg.', 
    address: '80 Wythe Ave 6th Floor', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11249', 
    cuisine:'Bar', 
    neighborhood:'Williamsburg', 
    owner_id:user4.id
)

file6 = open('https://openspot-seeds.s3.amazonaws.com/barblondeau_thumbnail.jpg')
rest6.photos.attach(io: file6, filename: 'barblondeau_thumbnail.jpg')


rest7 = Rest.create!(
    name: 'Borrachito', 
    description: 'Petite space for tacos & a handful of Mexican snacks & sweets in back of The Garret East.', 
    address: '206 Avenue A', 
    city: 'New York', 
    state: 'NY', 
    zip: '10009', 
    cuisine:'Mexican', 
    neighborhood:'Midtown', 
    owner_id: user5.id
)

file7 = open('https://openspot-seeds.s3.amazonaws.com/borrachito_thumbnail.jpg')
rest7.photos.attach(io: file7, filename: 'borrachito_thumbnail.jpg')

rest8 = Rest.create!(
    name: 'Boulud Sud', 
    description: 'Refined Mediterranean dining via chef Daniel Boulud with convenience to Lincoln Center.', 
    address: '20 W 64th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10023', 
    cuisine:'Mediterranean', 
    neighborhood:'Upper West Side', 
    owner_id: user6.id
)

file8 = open('https://openspot-seeds.s3.amazonaws.com/boulud_sud_thumbnail.jpg')
rest8.photos.attach(io: file8, filename: 'bouludsud_thumbnail.jpg')

rest9 = Rest.create!(
    name: 'Cadence', 
    description: 'Cadence is a vegan Southern + soul food restaurant in the East Village.', 
    address: '122 E 7th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10009', 
    cuisine:'Soul Food', 
    neighborhood:'East Village', 
    owner_id:user6.id
)

file9 = open('https://openspot-seeds.s3.amazonaws.com/cadence_thumbnail.jpg')
rest9.photos.attach(io: file9, filename: 'cadence_thumbnail.jpg')

rest10 = Rest.create!(
    name: 'Casa Ora', 
    description: 'Elevated takes on classic Venezuelan plates are served in a stylish space with an intimate vibe.', 
    address: '148 Meserole St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11206', 
    cuisine:'Venezuelan', 
    neighborhood:'Williamsburg', 
    owner_id: demo.id
)

file10 = open('https://openspot-seeds.s3.amazonaws.com/casaora_thumbnail.jpg')
rest10.photos.attach(io: file10, filename: 'casaora_thumbnail.jpg')

rest11 = Rest.create!(
    name: 'CheLi', 
    description: 'Warm venue for elevated Chinese cuisine including Longjing shrimp, braised pork belly & smoked fish.', 
    address: '19 St Marks Pl', 
    city: 'New York', 
    state: 'NY', 
    zip: '10003', 
    cuisine:'Chinese', 
    neighborhood:'East Village', 
    owner_id: demo.id
)

file11 = open('https://openspot-seeds.s3.amazonaws.com/cheli_thumbnail.jpg')
rest11.photos.attach(io: file11, filename: 'cheli_thumbnail.jpg')

rest12 = Rest.create!(
    name: 'Chuko', 
    description: 'Ramen bowls & Asian-accented appetizers, plus beer & sake, are served at this hip eatery.', 
    address: '565 Vanderbilt Ave', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11238', 
    cuisine:'Japanese', 
    neighborhood:'Prospect Heights', 
    owner_id: user5.id
)

file12 = open('https://openspot-seeds.s3.amazonaws.com/chuko-thumbnail.jpg')
rest12.photos.attach(io: file12, filename: 'chuko_thumbnail.jpg')

rest13 = Rest.create!(
    name: 'Dhamaka', 
    description: 'Innovative, energetic eatery offering provincial Indian cuisine in a colorful dining room.', 
    address: '119 Delancey St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10002', 
    cuisine:'Indian', 
    neighborhood:'Lower East Side', 
    owner_id: user5.id
)

file13 = open('https://openspot-seeds.s3.amazonaws.com/dhamaka_thumbnail.jpg')
rest13.photos.attach(io: file13, filename: 'dhamaka_thumbnail.jpg')

rest14 = Rest.create!(
    name: 'Pecking House', 
    description: 'Chili Fried Chicken Dinners Delivered to Your Doorstep. Pecking House is the reimagining of Peking House, a longstanding Chinese dining institution in Queens.', 
    address: '185-23 Union Turnpike', 
    city: 'Fresh Meadows', 
    state: 'NY', 
    zip: '11366', 
    cuisine:'Fusion', 
    neighborhood:'Fresh Meadows', 
    owner_id: user5.id
)

file14 = open('https://openspot-seeds.s3.amazonaws.com/pecking_thumbnail.jpg')
rest14.photos.attach(io: file14, filename: 'pecking_thumbnail.jpg')

rest15 = Rest.create!(
    name: 'Soothr', 
    description: 'Intimate space with al fresco dining offering Thai noodles & soups, plus cocktails.', 
    address: '204 E 13th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10003', 
    cuisine:'Thai', 
    neighborhood:'East Village', 
    owner_id: user5.id
)

file15 = open('https://openspot-seeds.s3.amazonaws.com/soothr_thumbnail.jpg')
rest15.photos.attach(io: file15, filename: 'soothr_thumbnail.jpg')
