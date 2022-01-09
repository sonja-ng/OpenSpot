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
demo = User.create(username:'Guest', fname:'Guest', lname:'User', email:'demo@gmail.com', phone:'909090', password: 'password')

rest1 = Rest.create!(
    name: 'Al Badawi', 
    description: 'Abdul Elenani and Ayat Masoud, who opened Ayat in Bay Ridge to much acclaim, are ready to give Palestinian food another push in Brooklyn Heights', 
    address: '151 Atlantic Avenue', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11201', 
    cuisine:'Middle Eastern', 
    neighborhood:'NoHo',
    menu: {popular: "Chicken Shawarma Platter", pop_price: "$15.00", app: "Hummus", app_price: "$7.00", main: "Fattat Lahma", m_price: "$30+"},
    owner_id: user1.id
)

file1 = open('https://openspot-seeds.s3.amazonaws.com/albadawi_thumbnail.jpg')
rest1.photos.attach(io: file1, filename: 'albadawi_thumbnail.jpg')

file1a = open('https://openspot-seeds.s3.amazonaws.com/header/AlBadawi_header.jpg')
rest1.photos.attach(io: file1a, filename: 'albadawi_header.jpg')

file1b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/AlBadawi_OuziBeef_Adam-Friedlander_Eater-NY-2.jpg')
rest1.photos.attach(io: file1b, filename: 'albadawi_sheader.jpg')

file1c = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi1.jpg')
rest1.photos.attach(io: file1c, filename: 'albadawi1.jpg')

file1d = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi2.jpg')
rest1.photos.attach(io: file1d, filename: 'albadawi2.jpg')

file1e = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi3.jpg')
rest1.photos.attach(io: file1e, filename: 'albadawi3.jpg')

file1f = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi4.jpg')
rest1.photos.attach(io: file1f, filename: 'albadawi4.jpg')

file1g = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi5.jpg')
rest1.photos.attach(io: file1g, filename: 'albadawi5.jpg')

file1h = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi6.jpg')
rest1.photos.attach(io: file1h, filename: 'albadawi6.jpg')

file1i = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi7.jpg')
rest1.photos.attach(io: file1i, filename: 'albadawi7.jpg')

file1j = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi8.jpg')
rest1.photos.attach(io: file1j, filename: 'albadawi8.jpg')

file1k = open('https://openspot-seeds.s3.amazonaws.com/albadawi/albadawi9.jpg')
rest1.photos.attach(io: file1k, filename: 'albadawi9.jpg')

rest2 = Rest.create!(
    name: 'Aldama', 
    description: 'Contemporary, upscale takes on Mexican classics in an unpretentious venue with outdoor seating.', 
    address: '91 S 6th St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11249', 
    cuisine:'Mexican',
    menu: {popular: "Pork Belly Taco", pop_price: "$9.00", app: "Guacamole", app_price: "$12.00", main: "Roasted Chicken", m_price: "$32.00"},
    neighborhood:'Williamsburg', 
    owner_id:user2.id
)

file2 = open('https://openspot-seeds.s3.amazonaws.com/aldama_thumbnail.jpg')
rest2.photos.attach(io: file2, filename: 'aldama_thumbnail.jpg')

file2a = open('https://openspot-seeds.s3.amazonaws.com/header/AF_Aldama_GroupShot_Adam-Friedlander_Eater-NY.jpg')
rest2.photos.attach(io: file2a, filename: 'aldama_header.jpg')

file2b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/aldama_1002Gary-He-Eater.jpg')
rest2.photos.attach(io: file2b, filename: 'aldama_sheader.jpg')

rest3 = Rest.create!(
    name: 'Angel Indian Restaurant', 
    description: 'Compact, unassuming eatery specializing in vegetarian North Indian dishes & street food staples.', 
    address: '7414 37th Rd', 
    city: 'Queens', 
    state: 'NY', 
    zip: '11372', 
    cuisine:'Indian', 
    menu: {popular: "Chicken Dum Briyani", pop_price: "$17.99", app: "Vegan Lassuni Gobi", app_price: "$8.99", main: "Chicken Bhuna", m_price: "$14.99"},
    neighborhood:'Jackson Heights', 
    owner_id: user3.id
)

file3 = open('https://openspot-seeds.s3.amazonaws.com/angel-indian-thumbnail.jpg')
rest3.photos.attach(io: file3, filename: 'angel_thumbnail.jpg')

file3a = open('https://openspot-seeds.s3.amazonaws.com/header/angel-indian-James-Park-Eater-NY.jpg')
rest3.photos.attach(io: file3a, filename: 'angel_header.jpg')

file3b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/angel-indian-James-Park-Eater-NY-2.jpg')
rest3.photos.attach(io: file3b, filename: 'angel_sheader.jpg')

rest4 = Rest.create!(
    name: 'Anything At All', 
    description: 'Recharge with tasty offerings including coffee drinks, bottled cocktails and more at Graduate Roosevelt Island lobby cafe.', 
    address: '22 N Loop Rd', 
    city: 'New York', 
    state: 'NY', 
    zip: '10044', 
    cuisine:'American', 
    menu: {popular: "Cornell Chicken", pop_price: "$28.00", app: "Broccolini", app_price: "$11.00", main: "Grilled Hanger Steak", m_price: "$38.00"},
    neighborhood:'Roosevelt Island', 
    owner_id: user3.id
)

file4 = open('https://openspot-seeds.s3.amazonaws.com/anythingatall_thumbnail.jpg')
rest4.photos.attach(io: file4, filename: 'anythingatall_thumbnail.jpg')

file4a = open('https://openspot-seeds.s3.amazonaws.com/header/Graduate_Roosevelt_Steve-Freihon-Graudate-Hotel.jpg')
rest4.photos.attach(io: file4a, filename: 'anything_header.jpg')

file4b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/Graduate_Roosevelt_Steve-Freihon-Graudate-Hotel-2.jpg')
rest4.photos.attach(io: file4b, filename: 'anything_sheader.jpg')

file4c = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything1.jpg')
rest4.photos.attach(io: file4c, filename: 'anythingatall_gallery1.jpg')



rest5 = Rest.create!(
    name: 'As You Are', 
    description: 'A restaurant, bakery and bar in Boerum Hill, Brooklyn.', 
    address: '252 Schermerhorn St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11217', 
    cuisine:'Bakery', 
    menu: {popular: "Avocado Toast", pop_price: "$14.00", app: "Rum Loaf", app_price: "$4.00", main: "Poached Eggs", m_price: "$17.00"},
    neighborhood:'Boerum Hill', 
    owner_id: user4.id
)

file5 = open('https://openspot-seeds.s3.amazonaws.com/asyouare-thumbnail.jpg')
rest5.photos.attach(io: file5, filename: 'asyouare_thumbnail.jpg')

file5a = open('https://openspot-seeds.s3.amazonaws.com/header/As_You_Are_Alex-Staniloff_Eater-NY.jpg')
rest5.photos.attach(io: file5a, filename: 'asyouare_header.jpg')

file5b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/As_You_Are_Alex-Staniloff_Eater-NY-2.jpg')
rest5.photos.attach(io: file5b, filename: 'asyouare_sheader.jpg')

rest6 = Rest.create!(
    name: 'Bar Blondeau', 
    description: 'Bar Blondeau is a French-style bar from chef partners Aidan ONeal and Jake Leiber (Le Crocodile, Chez Ma Tante), located on the 6th floor of Wythe Hotel, in the heart of Williamsburg.', 
    address: '80 Wythe Ave 6th Floor', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11249', 
    cuisine:'Bar', 
    menu: {popular: "Tuna Tartare", pop_price: "$19.00", app: "Fries", app_price: "$11.00", main: "Steak Frites au Poivre", m_price: "$42.00"},
    neighborhood:'Williamsburg', 
    owner_id:user4.id
)

file6 = open('https://openspot-seeds.s3.amazonaws.com/barblondeau_thumbnail.jpg')
rest6.photos.attach(io: file6, filename: 'barblondeau_thumbnail.jpg')

file6a = open('https://openspot-seeds.s3.amazonaws.com/header/BarBlondeau_0721_LizClayman_029.0.jpg')
rest6.photos.attach(io: file6a, filename: 'blondeau_header.jpg')

file6b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/BarBlondeau_0721_LizClayman_029.jpg')
rest6.photos.attach(io: file6b, filename: 'blondeau_sheader.jpg')


rest7 = Rest.create!(
    name: 'Borrachito', 
    description: 'Petite space for tacos & a handful of Mexican snacks & sweets in back of The Garret East.', 
    address: '206 Avenue A', 
    city: 'New York', 
    state: 'NY', 
    zip: '10009', 
    cuisine:'Mexican', 
    menu: {popular: "Carnitas Taco", pop_price: "$5.00", app: "Chips and Salsas", app_price: "$5.00", main: "Wild Mix Mushroom Quesadillas", m_price: "$10.00"},
    neighborhood:'Midtown', 
    owner_id: user5.id
)

file7 = open('https://openspot-seeds.s3.amazonaws.com/borrachito_thumbnail.jpg')
rest7.photos.attach(io: file7, filename: 'borrachito_thumbnail.jpg')

file7a = open('https://openspot-seeds.s3.amazonaws.com/header/borrachito_conde_nast.jpg')
rest7.photos.attach(io: file7a, filename: 'borrachito_header.jpg')

file7b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/borrachito_conde_nast-2.jpg')
rest7.photos.attach(io: file7b, filename: 'blondeau_sheader.jpg')

rest8 = Rest.create!(
    name: 'Boulud Sud', 
    description: 'Refined Mediterranean dining via chef Daniel Boulud with convenience to Lincoln Center.', 
    address: '20 W 64th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10023', 
    cuisine:'Mediterranean', 
    menu: {popular: "Braised Double R Ranch Flat Iron", pop_price: "$42.00", app: "Citrus Cured Faroe Island Salmon", app_price: "$23.00", main: "Seared Dayboat Scallops", m_price: "$40.00"},
    neighborhood:'Upper West Side', 
    owner_id: user6.id
)

file8 = open('https://openspot-seeds.s3.amazonaws.com/boulud_sud_thumbnail.jpg')
rest8.photos.attach(io: file8, filename: 'bouludsud_thumbnail.jpg')

file8a = open('https://openspot-seeds.s3.amazonaws.com/header/boulud_sud_Evan-Sung-Dinex-Group.jpg')
rest8.photos.attach(io: file8a, filename: 'bouludsud_header.jpg')

file8b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/boulud_sud_Evan-Sung-search.jpg')
rest8.photos.attach(io: file8b, filename: 'bouludsud_sheader.jpg')

rest9 = Rest.create!(
    name: 'Cadence', 
    description: 'Cadence is a vegan Southern + soul food restaurant in the East Village.', 
    address: '122 E 7th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10009', 
    cuisine:'Soul Food', 
    menu: {popular: "Palm Cake", pop_price: "$16.00", app: "Fried Okra", app_price: "$5.00", main: "Southern Fried Lasagna", m_price: "$24.00"},
    neighborhood:'East Village', 
    owner_id:user6.id
)

file9 = open('https://openspot-seeds.s3.amazonaws.com/cadence_thumbnail.jpg')
rest9.photos.attach(io: file9, filename: 'cadence_thumbnail.jpg')

file9a = open('https://openspot-seeds.s3.amazonaws.com/header/Medsker_Cadence_Nov_003__1_.jpg')
rest9.photos.attach(io: file9a, filename: 'cadence_header.jpg')

file9b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/cadence.jpg')
rest9.photos.attach(io: file9b, filename: 'cadence_sheader.jpg')

rest10 = Rest.create!(
    name: 'Casa Ora', 
    description: 'Elevated takes on classic Venezuelan plates are served in a stylish space with an intimate vibe.', 
    address: '148 Meserole St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11206', 
    cuisine:'Venezuelan', 
    menu: {popular: "Paella De Pulpo", pop_price: "$28.00", app: "Ceviche", app_price: "$18.00", main: "Scallops", m_price: "$32.00"},
    neighborhood:'Williamsburg', 
    owner_id: demo.id
)

file10 = open('https://openspot-seeds.s3.amazonaws.com/casaora_thumbnail.jpg')
rest10.photos.attach(io: file10, filename: 'casaora_thumbnail.jpg')

file10a = open('https://openspot-seeds.s3.amazonaws.com/header/casaora.jpg')
rest10.photos.attach(io: file10a, filename: 'casaora_header.jpg')

file10b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/casa-ora.jpg')
rest10.photos.attach(io: file10b, filename: 'casaora_sheader.jpg')

rest11 = Rest.create!(
    name: 'CheLi', 
    description: 'Warm venue for elevated Chinese cuisine including Longjing shrimp, braised pork belly & smoked fish.', 
    address: '19 St Marks Pl', 
    city: 'New York', 
    state: 'NY', 
    zip: '10003', 
    cuisine:'Chinese', 
    menu: {popular: "Crispy eel", pop_price: "$26.00", app: "Sliced chilled chicken", app_price: "$15", main: "Steamed Dungeness crab w. steamed egg", m_price: "$65.00"},
    neighborhood:'East Village', 
    owner_id: demo.id
)

file11 = open('https://openspot-seeds.s3.amazonaws.com/cheli_thumbnail.jpg')
rest11.photos.attach(io: file11, filename: 'cheli_thumbnail.jpg')

file11a = open('https://openspot-seeds.s3.amazonaws.com/header/cheLi_newyorker.jpg')
rest11.photos.attach(io: file11a, filename: 'cheli_header.jpg')

file11b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/Bao-Ong_Eater-NY_CheLi.jpg')
rest11.photos.attach(io: file11b, filename: 'cheli_sheader.jpg')

rest12 = Rest.create!(
    name: 'Chuko', 
    description: 'Ramen bowls & Asian-accented appetizers, plus beer & sake, are served at this hip eatery.', 
    address: '565 Vanderbilt Ave', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11238', 
    cuisine:'Japanese', 
    menu: {popular: "Miso Ramen", pop_price: "$16.00", app: "Wings", app_price: "$12.00", main: "Kimchi Ramen", m_price: "$16.00"},
    neighborhood:'Prospect Heights', 
    owner_id: user5.id
)

file12 = open('https://openspot-seeds.s3.amazonaws.com/chuko-thumbnail.jpg')
rest12.photos.attach(io: file12, filename: 'chuko_thumbnail.jpg')

file12a = open('https://openspot-seeds.s3.amazonaws.com/header/chuko_ramen.jpg')
rest12.photos.attach(io: file12a, filename: 'chuko_header.jpg')

file12b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/chuko_ramen.jpg')
rest12.photos.attach(io: file12b, filename: 'chuko_sheader.jpg')

rest13 = Rest.create!(
    name: 'Dhamaka', 
    description: 'Innovative, energetic eatery offering provincial Indian cuisine in a colorful dining room.', 
    address: '119 Delancey St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10002', 
    cuisine:'Indian', 
    menu: {popular: "Goat Neck Dum Biryani", pop_price: "$39.00", app: "Ragda Pattice", app_price: "$13", main: "Champaran Meat", m_price: "$34.00"},
    neighborhood:'Lower East Side', 
    owner_id: user5.id
)

file13 = open('https://openspot-seeds.s3.amazonaws.com/dhamaka_thumbnail.jpg')
rest13.photos.attach(io: file13, filename: 'dhamaka_thumbnail.jpg')

file13a = open('https://openspot-seeds.s3.amazonaws.com/header/AF_Dhamaka_GroupShot_1.0.jpg')
rest13.photos.attach(io: file13a, filename: 'dhamaka_header.jpg')

file13b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/dhamaka.jpg')
rest13.photos.attach(io: file13b, filename: 'dhamaka_sheader.jpg')

rest14 = Rest.create!(
    name: 'Pecking House', 
    description: 'Chili Fried Chicken Dinners Delivered to Your Doorstep. Pecking House is the reimagining of Peking House, a longstanding Chinese dining institution in Queens.', 
    address: '185-23 Union Turnpike', 
    city: 'Fresh Meadows', 
    state: 'NY', 
    zip: '11366', 
    cuisine:'Fusion', 
    menu: {popular: "Chili Fried Chicken", pop_price: "$35.00", app: "Orange Pepper Wet Wings", app_price: "$12.00", main: "Chicken Sandwich #14", m_price: "$14.00"},
    neighborhood:'Fresh Meadows', 
    owner_id: user5.id
)

file14 = open('https://openspot-seeds.s3.amazonaws.com/pecking_thumbnail.jpg')
rest14.photos.attach(io: file14, filename: 'pecking_thumbnail.jpg')

file14a = open('https://openspot-seeds.s3.amazonaws.com/header/DavidALee_NYC_Pecking_House_Fried_Chili_Chicken_001.jpg')
rest14.photos.attach(io: file14a, filename: 'pecking_header.jpg')

file14b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/Pecking_House.jpg')
rest14.photos.attach(io: file14b, filename: 'pecking_sheader.jpg')

rest15 = Rest.create!(
    name: 'Soothr', 
    description: 'Intimate space with al fresco dining offering Thai noodles & soups, plus cocktails.', 
    address: '204 E 13th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10003', 
    cuisine:'Thai', 
    menu: {popular: "Dry Crab Noodles", pop_price: "$26.00", app: "Soothr Jeeb Dumplines", app_price: "$12.00", main: "Pla Tod", m_price: "$33.00"},
    neighborhood:'East Village', 
    owner_id: user5.id
)

file15 = open('https://openspot-seeds.s3.amazonaws.com/soothr_thumbnail.jpg')
rest15.photos.attach(io: file15, filename: 'soothr_thumbnail.jpg')

file15a = open('https://openspot-seeds.s3.amazonaws.com/header/soothr.jpg')
rest15.photos.attach(io: file15a, filename: 'soothr_header.jpg')

file15b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/soothr.jpg')
rest15.photos.attach(io: file15b, filename: 'soothr_sheader.jpg')

