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
Review.destroy_all
Booking.destroy_all

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
    lat: 40.69026565551758,
    lng: -73.99446105957031,
    neighborhood:'Brooklyn Heights',
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
    lat: 40.7109906,
    lng: -73.9649151,
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

file2c = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama1.jpg')
rest2.photos.attach(io: file2c, filename: 'aldama1.jpg')

file2d = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama2.jpg')
rest2.photos.attach(io: file2d, filename: 'aldama2.jpg')

file2e = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama3.jpg')
rest2.photos.attach(io: file2e, filename: 'aldama3.jpg')

file2f = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama4.jpg')
rest2.photos.attach(io: file2f, filename: 'aldama4.jpg')

file2g = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama5.jpg')
rest2.photos.attach(io: file2g, filename: 'aldama5.jpg')

file2h = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama6.jpg')
rest2.photos.attach(io: file2h, filename: 'aldama6.jpg')

file2i = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama7.jpg')
rest2.photos.attach(io: file2i, filename: 'aldama7.jpg')

file2j = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama8.jpg')
rest2.photos.attach(io: file2j, filename: 'aldama8.jpg')

file2k = open('https://openspot-seeds.s3.amazonaws.com/aldama/aldama9.jpg')
rest2.photos.attach(io: file2k, filename: 'aldama9.jpg')

rest3 = Rest.create!(
    name: 'Angel Indian Restaurant', 
    description: 'Compact, unassuming eatery specializing in vegetarian North Indian dishes & street food staples.', 
    address: '7414 37th Rd', 
    city: 'Queens', 
    state: 'NY', 
    zip: '11372', 
    cuisine:'Indian',
    lat: 40.7474445,
    lng: -73.8896507,
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

file3c = open('https://openspot-seeds.s3.amazonaws.com/angel/angel1.jpg')
rest3.photos.attach(io: file3c, filename: 'angel1.jpg')

file3d = open('https://openspot-seeds.s3.amazonaws.com/angel/angel2.jpg')
rest3.photos.attach(io: file3d, filename: 'angel2.jpg')

file3e = open('https://openspot-seeds.s3.amazonaws.com/angel/angel3.jpg')
rest3.photos.attach(io: file3e, filename: 'angel3.jpg')

file3f = open('https://openspot-seeds.s3.amazonaws.com/angel/angel4.jpg')
rest3.photos.attach(io: file3f, filename: 'angel4.jpg')

file3g = open('https://openspot-seeds.s3.amazonaws.com/angel/angel5.jpg')
rest3.photos.attach(io: file3g, filename: 'angel5.jpg')

file3h = open('https://openspot-seeds.s3.amazonaws.com/angel/angel6.jpg')
rest3.photos.attach(io: file3h, filename: 'angel6.jpg')

file3i = open('https://openspot-seeds.s3.amazonaws.com/angel/angel7.jpg')
rest3.photos.attach(io: file3i, filename: 'angel7.jpg')

file3j = open('https://openspot-seeds.s3.amazonaws.com/angel/angel8.jpg')
rest3.photos.attach(io: file3j, filename: 'angel8.jpg')

file3k = open('https://openspot-seeds.s3.amazonaws.com/angel/angel9.jpg')
rest3.photos.attach(io: file3k, filename: 'angel9.jpg')

rest4 = Rest.create!(
    name: 'Anything At All', 
    description: 'Recharge with tasty offerings including coffee drinks, bottled cocktails and more at Graduate Roosevelt Island lobby cafe.', 
    address: '22 N Loop Rd', 
    city: 'New York', 
    state: 'NY', 
    zip: '10044', 
    cuisine:'American',
    lat: 40.75621032714844,
    lng: -73.95504760742188, 
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

file4d = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything2.jpg')
rest4.photos.attach(io: file4d, filename: 'anythingatall_gallery2.jpg')

file4e = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything3.jpg')
rest4.photos.attach(io: file4e, filename: 'anythingatall_gallery3.jpg')

file4f = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything4.jpg')
rest4.photos.attach(io: file4f, filename: 'anythingatall_gallery4.jpg')

file4g = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything5.jpg')
rest4.photos.attach(io: file4g, filename: 'anythingatall_gallery5.jpg')

file4h = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything6.jpg')
rest4.photos.attach(io: file4h, filename: 'anythingatall_gallery6.jpg')

file4i = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything7.jpg')
rest4.photos.attach(io: file4i, filename: 'anythingatall_gallery7.jpg')

file4j = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything8.jpg')
rest4.photos.attach(io: file4j, filename: 'anythingatall_gallery8.jpg')

file4k = open('https://openspot-seeds.s3.amazonaws.com/anythingatall/anything9.jpg')
rest4.photos.attach(io: file4k, filename: 'anythingatall_gallery9.jpg')



rest5 = Rest.create!(
    name: 'As You Are', 
    description: 'A restaurant, bakery and bar in Boerum Hill, Brooklyn.', 
    address: '252 Schermerhorn St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11217', 
    cuisine:'Bakery',
    lat: 40.6888427734375,
    lng: -73.98573303222656, 
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

file5c = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya1.jpg')
rest5.photos.attach(io: file5c, filename: 'aya1.jpg')

file5d = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya2.jpg')
rest5.photos.attach(io: file5d, filename: 'aya2.jpg')

file5e = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya3.jpg')
rest5.photos.attach(io: file5e, filename: 'aya3.jpg')

file5f = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya4.jpg')
rest5.photos.attach(io: file5f, filename: 'aya4.jpg')

file5g = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya5.jpg')
rest5.photos.attach(io: file5g, filename: 'aya5.jpg')

file5h = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya6.jpg')
rest5.photos.attach(io: file5h, filename: 'aya6.jpg')

file5i = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya7.jpg')
rest5.photos.attach(io: file5i, filename: 'aya7.jpg')

file5j = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya8.jpg')
rest5.photos.attach(io: file5j, filename: 'aya8.jpg')

file5k = open('https://openspot-seeds.s3.amazonaws.com/asyouare/aya9.jpg')
rest5.photos.attach(io: file5k, filename: 'aya9.jpg')

rest6 = Rest.create!(
    name: 'Bar Blondeau', 
    description: 'Bar Blondeau is a French-style bar from chef partners Aidan ONeal and Jake Leiber (Le Crocodile, Chez Ma Tante), located on the 6th floor of Wythe Hotel, in the heart of Williamsburg.', 
    address: '80 Wythe Ave 6th Floor', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11249', 
    cuisine:'Bar',
    lat: 40.72209930419922,
    lng: -73.9576644897461,
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

file6c = open('https://openspot-seeds.s3.amazonaws.com/bar/bar1.jpg')
rest6.photos.attach(io: file6c, filename: 'bar1.jpg')

file6d = open('https://openspot-seeds.s3.amazonaws.com/bar/bar2.jpg')
rest6.photos.attach(io: file6d, filename: 'bar2.jpg')

file6e = open('https://openspot-seeds.s3.amazonaws.com/bar/bar3.jpg')
rest6.photos.attach(io: file6e, filename: 'bar3.jpg')

file6f = open('https://openspot-seeds.s3.amazonaws.com/bar/bar4.jpg')
rest6.photos.attach(io: file6f, filename: 'bar4.jpg')

file6g = open('https://openspot-seeds.s3.amazonaws.com/bar/bar5.jpg')
rest6.photos.attach(io: file6g, filename: 'bar5.jpg')

file6h = open('https://openspot-seeds.s3.amazonaws.com/bar/bar6.jpg')
rest6.photos.attach(io: file6h, filename: 'bar6.jpg')

file6i = open('https://openspot-seeds.s3.amazonaws.com/bar/bar7.jpg')
rest6.photos.attach(io: file6i, filename: 'bar7.jpg')

file6j = open('https://openspot-seeds.s3.amazonaws.com/bar/bar8.jpg')
rest6.photos.attach(io: file6j, filename: 'bar8.jpg')

file6k = open('https://openspot-seeds.s3.amazonaws.com/bar/bar9.jpg')
rest6.photos.attach(io: file6k, filename: 'bar9.jpg')


rest7 = Rest.create!(
    name: 'Borrachito', 
    description: 'Petite space for tacos & a handful of Mexican snacks & sweets in back of The Garret East.', 
    address: '206 Avenue A', 
    city: 'New York', 
    state: 'NY', 
    zip: '10009', 
    cuisine:'Mexican',
    lat: 40.7294825,
    lng: -73.9807969, 
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

file7c = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra1.jpg')
rest7.photos.attach(io: file7c, filename: 'borrachito1.jpg')

file7d = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra2.jpg')
rest7.photos.attach(io: file7d, filename: 'borrachito2.jpg')

file7e = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra3.jpg')
rest7.photos.attach(io: file7e, filename: 'borrachito3.jpg')

file7f = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra4.jpg')
rest7.photos.attach(io: file7f, filename: 'borrachito4.jpg')

file7g = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra5.jpg')
rest7.photos.attach(io: file7g, filename: 'borrachito5.jpg')

file7h = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra6.jpg')
rest7.photos.attach(io: file7h, filename: 'borrachito6.jpg')

file7i = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra7.jpg')
rest7.photos.attach(io: file7i, filename: 'borrachito7.jpg')

file7j = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra8.jpg')
rest7.photos.attach(io: file7j, filename: 'borrachito8.jpg')

file7k = open('https://openspot-seeds.s3.amazonaws.com/borrachito/borra9.jpg')
rest7.photos.attach(io: file7k, filename: 'borrachito9.jpg')


rest8 = Rest.create!(
    name: 'Boulud Sud', 
    description: 'Refined Mediterranean dining via chef Daniel Boulud with convenience to Lincoln Center.', 
    address: '20 W 64th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10023', 
    cuisine:'Mediterranean',
    lat: 40.7718633,
    lng: -73.9815969, 
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

file8c = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud1.jpg')
rest8.photos.attach(io: file8c, filename: 'boulud1.jpg')

file8d = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud2.jpg')
rest8.photos.attach(io: file8d, filename: 'boulud2.jpg')

file8e = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud3.jpg')
rest8.photos.attach(io: file8e, filename: 'boulud3.jpg')

file8f = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud4.jpg')
rest8.photos.attach(io: file8f, filename: 'boulud4.jpg')

file8g = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud5.jpg')
rest8.photos.attach(io: file8g, filename: 'boulud5.jpg')

file8h = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud6.jpg')
rest8.photos.attach(io: file8h, filename: 'boulud6.jpg')

file8i = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud7.jpg')
rest8.photos.attach(io: file8i, filename: 'boulud7.jpg')

file8j = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud8.jpg')
rest8.photos.attach(io: file8j, filename: 'boulud8.jpg')

file8k = open('https://openspot-seeds.s3.amazonaws.com/boulud/boulud9.jpg')
rest8.photos.attach(io: file8k, filename: 'boulud9.jpg')


rest9 = Rest.create!(
    name: 'Cadence', 
    description: 'Cadence is a vegan Southern + soul food restaurant in the East Village.', 
    address: '122 E 7th St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10009', 
    cuisine:'Soul Food',
    lat: 40.7261826,
    lng: -73.9842717,
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

file9c = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad1.jpg')
rest9.photos.attach(io: file9c, filename: 'cadence1.jpg')

file9d = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad2.jpg')
rest9.photos.attach(io: file9d, filename: 'cadence2.jpg')

file9e = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad3.jpg')
rest9.photos.attach(io: file9e, filename: 'cadence3.jpg')

file9f = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad4.jpg')
rest9.photos.attach(io: file9f, filename: 'cadence4.jpg')

file9g = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad5.jpg')
rest9.photos.attach(io: file9g, filename: 'cadence5.jpg')

file9h = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad6.jpg')
rest9.photos.attach(io: file9h, filename: 'cadence6.jpg')

file9i = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad7.jpg')
rest9.photos.attach(io: file9i, filename: 'cadence7.jpg')

file9j = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad8.jpg')
rest9.photos.attach(io: file9j, filename: 'cadence8.jpg')

file9k = open('https://openspot-seeds.s3.amazonaws.com/cadence/cad9.jpg')
rest9.photos.attach(io: file9k, filename: 'cadence9.jpg')

rest10 = Rest.create!(
    name: 'Casa Ora', 
    description: 'Elevated takes on classic Venezuelan plates are served in a stylish space with an intimate vibe.', 
    address: '148 Meserole St', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11206', 
    cuisine:'Venezuelan',
    lat: 40.707801818847656,
    lng: -73.94615173339844,
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

file10c = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa1.jpg')
rest10.photos.attach(io: file10c, filename: 'casaora1.jpg')

file10d = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa2.jpg')
rest10.photos.attach(io: file10d, filename: 'casaora2.jpg')

file10e = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa3.jpg')
rest10.photos.attach(io: file10e, filename: 'casaora3.jpg')

file10f = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa4.jpg')
rest10.photos.attach(io: file10f, filename: 'casaora4.jpg')

file10g = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa5.jpg')
rest10.photos.attach(io: file10g, filename: 'casaora5.jpg')

file10h = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa6.jpg')
rest10.photos.attach(io: file10h, filename: 'casaora6.jpg')

file10i = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa7.jpg')
rest10.photos.attach(io: file10i, filename: 'casaora7.jpg')

file10j = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa8.jpg')
rest10.photos.attach(io: file10j, filename: 'casaora8.jpg')

file10k = open('https://openspot-seeds.s3.amazonaws.com/casaora/casa9.jpg')
rest10.photos.attach(io: file10k, filename: 'casaora9.jpg')

rest11 = Rest.create!(
    name: 'CheLi', 
    description: 'Warm venue for elevated Chinese cuisine including Longjing shrimp, braised pork belly & smoked fish.', 
    address: '19 St Marks Pl', 
    city: 'New York', 
    state: 'NY', 
    zip: '10003', 
    cuisine:'Chinese',
    lat: 40.7291201,
    lng: -73.9885912, 
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

file11c = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli1.jpg')
rest11.photos.attach(io: file11c, filename: 'cheli1.jpg')

file11d = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli2.jpg')
rest11.photos.attach(io: file11d, filename: 'cheli2.jpg')

file11e = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli3.jpg')
rest11.photos.attach(io: file11e, filename: 'cheli3.jpg')

file11f = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli4.jpg')
rest11.photos.attach(io: file11f, filename: 'cheli4.jpg')

file11g = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli5.jpg')
rest11.photos.attach(io: file11g, filename: 'cheli5.jpg')

file11h = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli6.jpg')
rest11.photos.attach(io: file11h, filename: 'cheli6.jpg')

file11i = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli7.jpg')
rest11.photos.attach(io: file11i, filename: 'cheli7.jpg')

file11j = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli8.jpg')
rest11.photos.attach(io: file11j, filename: 'cheli8.jpg')

file11k = open('https://openspot-seeds.s3.amazonaws.com/cheli/cheli9.jpg')
rest11.photos.attach(io: file11k, filename: 'cheli9.jpg')

rest12 = Rest.create!(
    name: 'Chuko', 
    description: 'Ramen bowls & Asian-accented appetizers, plus beer & sake, are served at this hip eatery.', 
    address: '565 Vanderbilt Ave', 
    city: 'Brooklyn', 
    state: 'NY', 
    zip: '11238', 
    cuisine:'Japanese',
    lat: 40.67764663696289,
    lng: -73.96882629394531,
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

file12c = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko1.jpg')
rest12.photos.attach(io: file12c, filename: 'chuko1.jpg')

file12d = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko2.jpg')
rest12.photos.attach(io: file12d, filename: 'chuko2.jpg')

file12e = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko3.jpg')
rest12.photos.attach(io: file12e, filename: 'chuko3.jpg')

file12f = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko4.jpg')
rest12.photos.attach(io: file12f, filename: 'chuko4.jpg')

file12g = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko5.jpg')
rest12.photos.attach(io: file12g, filename: 'chuko5.jpg')

file12h = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko6.jpg')
rest12.photos.attach(io: file12h, filename: 'chuko6.jpg')

file12i = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko7.jpg')
rest12.photos.attach(io: file12i, filename: 'chuko7.jpg')

file12j = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko8.jpg')
rest12.photos.attach(io: file12j, filename: 'chuko8.jpg')

file12k = open('https://openspot-seeds.s3.amazonaws.com/chuko/chuko9.jpg')
rest12.photos.attach(io: file12k, filename: 'chuko9.jpg')


rest13 = Rest.create!(
    name: 'Dhamaka', 
    description: 'Innovative, energetic eatery offering provincial Indian cuisine in a colorful dining room.', 
    address: '119 Delancey St', 
    city: 'New York', 
    state: 'NY', 
    zip: '10002', 
    cuisine:'Indian',
    lat: 40.71833,
    lng: -73.9881031,
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

file13c = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha1.jpg')
rest13.photos.attach(io: file13c, filename: 'dha1.jpg')

file13d = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha2.jpg')
rest13.photos.attach(io: file13d, filename: 'dha2.jpg')

file13e = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha3.jpg')
rest13.photos.attach(io: file13e, filename: 'dha3.jpg')

file13f = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha4.jpg')
rest13.photos.attach(io: file13f, filename: 'dha4.jpg')

file13g = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha5.jpg')
rest13.photos.attach(io: file13g, filename: 'dha5.jpg')

file13h = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha6.jpg')
rest13.photos.attach(io: file13h, filename: 'dha6.jpg')

file13i = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha7.jpg')
rest13.photos.attach(io: file13i, filename: 'dha7.jpg')

file13j = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha8.jpg')
rest13.photos.attach(io: file13j, filename: 'dha8.jpg')

file13k = open('https://openspot-seeds.s3.amazonaws.com/dhamaka/dha9.jpg')
rest13.photos.attach(io: file13k, filename: 'dha9.jpg')

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
    lat: 40.728485107421875,
    lng: -73.7835693359375, 
    owner_id: user5.id
)

file14 = open('https://openspot-seeds.s3.amazonaws.com/pecking_thumbnail.jpg')
rest14.photos.attach(io: file14, filename: 'pecking_thumbnail.jpg')

file14a = open('https://openspot-seeds.s3.amazonaws.com/header/DavidALee_NYC_Pecking_House_Fried_Chili_Chicken_001.jpg')
rest14.photos.attach(io: file14a, filename: 'pecking_header.jpg')

file14b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/Pecking_House.jpg')
rest14.photos.attach(io: file14b, filename: 'pecking_sheader.jpg')

file14c = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph1.jpg')
rest14.photos.attach(io: file14c, filename: 'ph1.jpg')

file14d = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph2.jpg')
rest14.photos.attach(io: file14d, filename: 'ph2.jpg')

file14e = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph3.jpg')
rest14.photos.attach(io: file14e, filename: 'ph3.jpg')

file14f = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph4.jpg')
rest14.photos.attach(io: file14f, filename: 'ph4.jpg')

file14g = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph5.jpg')
rest14.photos.attach(io: file14g, filename: 'ph5.jpg')

file14h = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph6.jpg')
rest14.photos.attach(io: file14h, filename: 'ph6.jpg')

file14i = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph7.jpg')
rest14.photos.attach(io: file14i, filename: 'ph7.jpg')

file14j = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph8.jpg')
rest14.photos.attach(io: file14j, filename: 'ph8.jpg')

file14k = open('https://openspot-seeds.s3.amazonaws.com/pecking/ph9.jpg')
rest14.photos.attach(io: file14k, filename: 'ph9.jpg')



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
    lat: 40.7322692,
    lng: -73.9873518, 
    owner_id: user5.id
)

file15 = open('https://openspot-seeds.s3.amazonaws.com/soothr_thumbnail.jpg')
rest15.photos.attach(io: file15, filename: 'soothr_thumbnail.jpg')

file15a = open('https://openspot-seeds.s3.amazonaws.com/header/soothr.jpg')
rest15.photos.attach(io: file15a, filename: 'soothr_header.jpg')

file15b = open('https://openspot-seeds.s3.amazonaws.com/search-thumbnail/soothr.jpg')
rest15.photos.attach(io: file15b, filename: 'soothr_sheader.jpg')

file15c = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo1.jpg')
rest15.photos.attach(io: file15c, filename: 'soo1.jpg')

file15d = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo2.jpg')
rest15.photos.attach(io: file15d, filename: 'soo2.jpg')

file15e = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo3.jpg')
rest15.photos.attach(io: file15e, filename: 'soo3.jpg')

file15f = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo4.jpg')
rest15.photos.attach(io: file15f, filename: 'soo4.jpg')

file15g = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo5.jpg')
rest15.photos.attach(io: file15g, filename: 'soo5.jpg')

file15h = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo6.jpg')
rest15.photos.attach(io: file15h, filename: 'soo6.jpg')

file15i = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo7.jpg')
rest15.photos.attach(io: file15i, filename: 'soo7.jpg')

file15j = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo8.jpg')
rest15.photos.attach(io: file15j, filename: 'soo8.jpg')

file15k = open('https://openspot-seeds.s3.amazonaws.com/soothr/soo9.jpg')
rest15.photos.attach(io: file15k, filename: 'soo9.jpg')

review1 = Review.create!(
    comment: "The best restaurant in NY. Food is amazing, the service, and the price. They are all astonishing. I loved it.", 
    author_id: user1.id, 
    rest_id: rest1.id, 
    food: 5, 
    service: 5, 
    ambience: 5,
    overall: 5 
)

review2 = Review.create!(
    comment: "Cute spot, really good choice for date night. Food is albeit pricey but normal for modern Mexican.", 
    author_id: user1.id, 
    rest_id: rest2.id, 
    food: 4, 
    service: 4, 
    ambience: 3,
    overall: 4
)


review3 = Review.create!(
    comment: "This is my first time trying Indian food, and its really good! Highly recommended. :)", 
    author_id: user1.id, 
    rest_id: rest3.id, 
    food: 5,
    service: 5,
    ambience: 3,
    overall: 5 
)


review4 = Review.create!(
    comment: "Hands down the best cheeseburger I've ever had! Atmosphere was lovely and the service was great.", 
    author_id: user1.id, 
    rest_id: rest4.id, 
    food: 5, 
    service: 5, 
    ambience: 4,
    overall: 5 
)

review5 = Review.create!(
    comment: "Amazing ambience and service. Definitely give the Parker rolls a try!", 
    author_id: user2.id, 
    rest_id: rest5.id, 
    food: 4, 
    service: 5, 
    ambience: 5,
    overall: 4 
)

review6 = Review.create!(
    comment: "Will have to go back and put up with the wait times because it is just that good.", 
    author_id: user2.id, 
    rest_id: rest11.id, 
    food: 5, 
    service: 3, 
    ambience: 4,
    overall: 5 
)

review7 = Review.create!(
    comment: "This is one of our favorite spots in the neighborhood! My boyfriend and I have brought both of our families here when they come to visit.", 
    author_id: user2.id, 
    rest_id: rest7.id, 
    food: 5, 
    service: 4, 
    ambience: 4,
    overall: 5 
)

review8 = Review.create!(
    comment: "Amazing plant-based restaurant. Comfortable outdoor seating. Staff was amazing, courteous, and on point with allergens.", 
    author_id: user2.id, 
    rest_id: rest9.id, 
    food: 5, 
    service: 5, 
    ambience: 5,
    overall: 5 
)

review9 = Review.create!(
    comment: "Place is decorated beautifully. The service was superb and the drinks were amazing. Very unique drinks as well. The food was top tier. Highly recommend!", 
    author_id: user3.id, 
    rest_id: rest10.id, 
    food: 5, 
    service: 5, 
    ambience: 5,
    overall: 5 
)

review10 = Review.create!(
    comment: "Cute and humble Ramen in a really hip part of BK. Perfect for a date night!", 
    author_id: user3.id, 
    rest_id: rest12.id, 
    food: 5, 
    service: 4, 
    ambience: 4,
    overall: 5 
)

review11 = Review.create!(
    comment: "The duck drum-lets here were delicious. They were perfectly crisp and the salt and pepper flavor was there.", 
    author_id: user3.id, 
    rest_id: rest14.id, 
    food: 5, 
    service: 3, 
    ambience: 3,
    overall: 4 
)

review12 = Review.create!(
    comment: "Definitely top notch Thai food. I will be a repeater here.", 
    author_id: demo.id, 
    rest_id: rest15.id, 
    food: 5, 
    service: 5, 
    ambience: 4,
    overall: 5 
)

review13 = Review.create!(
    comment: "Wonderful food, very efficient service. The cocktails are amazing as well.", 
    author_id: user4.id, 
    rest_id: rest15.id, 
    food: 5, 
    service: 5, 
    ambience: 4,
    overall: 5 
)

review14 = Review.create!(
    comment: "Definitely give this place a try if you are in the mood for good Chinese food", 
    author_id: user4.id, 
    rest_id: rest11.id, 
    food: 5, 
    service: 5, 
    ambience: 4,
    overall: 5 
)

review15 = Review.create!(
    comment: "Great Indian food. Everything was great. Especially goat neck biryani was amazing. ", 
    author_id: user4.id, 
    rest_id: rest13.id, 
    food: 5, 
    service: 3, 
    ambience: 4,
    overall: 5 
)

review16 = Review.create!(
    comment: "Excellent ramen in prospect heights. I got the garlic ramen with pork, and enjoyed it.", 
    author_id: user4.id, 
    rest_id: rest12.id, 
    food: 5, 
    service: 4, 
    ambience: 4,
    overall: 5 
)

review17 = Review.create!(
    comment: "After years I visited this place last Sunday. Refreshed and really chick rooftop :) Great drinks.", 
    author_id: user5.id, 
    rest_id: rest6.id, 
    food: 5, 
    service: 4, 
    ambience: 5,
    overall: 5 
)

review18 = Review.create!(
    comment: "Upscale restaurant that is vegetarian friendly. Recommend trying during restaurant week!", 
    author_id: user5.id, 
    rest_id: rest8.id, 
    food: 5, 
    service: 5, 
    ambience: 5,
    overall: 5 
)

review19 = Review.create!(
    comment: "Wow, I really loved their food and it is most definitely the most unique fried chicken I have ever had.", 
    author_id: user5.id, 
    rest_id: rest14.id, 
    food: 5, 
    service: 3, 
    ambience: 3,
    overall: 5 
)

review20 = Review.create!(
    comment: "If you love spicy food this is a great place to stop by. I would recommend ordering the mango lassi as it help with the spice.", 
    author_id: user5.id, 
    rest_id: rest13.id, 
    food: 5, 
    service: 4, 
    ambience: 4,
    overall: 4
)

review21 = Review.create!(
    comment: "I have been to Casa Ora twice and I absolutely loved it there. The food is always amazing and the experience is always a plus.", 
    author_id: user5.id, 
    rest_id: rest10.id, 
    food: 5, 
    service: 5, 
    ambience: 5,
    overall: 5
)

review22 = Review.create!(
    comment: "Ordered the labneh, grape leaves and mansef. Everything was excellent!", 
    author_id: user5.id, 
    rest_id: rest1.id, 
    food: 5, 
    service: 5,
    ambience: 4,
    overall: 5
)

review23 = Review.create!(
    comment: "Awesome atmosphere, authentic Indian meals and amazing customer service.", 
    author_id: user5.id, 
    rest_id: rest3.id, 
    food: 5, 
    service: 5, 
    ambience: 4,
    overall: 5
)

review24 = Review.create!(
    comment: "We stopped for drinks the other night. Nice looking space.", 
    author_id: user5.id, 
    rest_id: rest5.id, 
    food: 5, 
    service: 4, 
    ambience: 5,
    overall: 5
)

review25 = Review.create!(
    comment: "I got the oyster mushroom burger and cornbread. It was so delicious.", 
    author_id: user6.id, 
    rest_id: rest9.id, 
    food: 5, 
    service: 4, 
    ambience: 5,
    overall: 5
)

review26 = Review.create!(
    comment: "On par with price and flavor! Very enjoyable classy environment and delicious meals.", 
    author_id: user6.id, 
    rest_id: rest8.id, 
    food: 5, 
    service: 5, 
    ambience: 5,
    overall: 5
)

review27 = Review.create!(
    comment: "First time having tacos at Borrachito. I love their authentic flavor and their service was great.", 
    author_id: user6.id, 
    rest_id: rest7.id, 
    food: 5, 
    service: 4, 
    ambience: 5,
    overall: 5
)

review28 = Review.create!(
    comment: "Beautiful indoor space and nice, large rooftop with good view of Manhattan.", 
    author_id: user6.id, 
    rest_id: rest6.id, 
    food: 5, 
    service: 4, 
    ambience: 5,
    overall: 5
)

review29 = Review.create!(
    comment: "Go for the surprisingly spacious back patio and excellent guacamole.", 
    author_id: demo.id, 
    rest_id: rest2.id, 
    food: 4, 
    service: 4, 
    ambience: 5,
    overall: 5
)


review30 = Review.create!(
    comment: "Great stop for some drinks and bites with a swanky library feel.", 
    author_id: user3.id, 
    rest_id: rest4.id, 
    food: 5, 
    service: 4, 
    ambience: 5,
    overall: 5
)

booking1 = Booking.create!(
    user_id: demo.id,
    rest_id: rest2.id,
    date: "2022-02-20",
    time: "08:00",
    party_size: 4
)

booking2 = Booking.create!(
    user_id: demo.id,
    rest_id: rest10.id,
    date: "2022-03-15",
    time: "06:00",
    party_size: 2
)