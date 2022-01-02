# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all


user1 = User.create(username:'gracie235', fname:'Grace', lname:'See', email:'gsee@gmail.com', phone:'123456', password: 'password')
user2 = User.create(username:'eloise09', fname:'Eloise', lname:'Koh', email:'ekoh@gmail.com', phone:'0000000', password: 'password')
user3 = User.create(username:'billy', fname:'Bill', lname:'Omaha', email:'bill@gmail.com', phone:'1111111', password: 'password')
user4 = User.create(username:'roselyn', fname:'Lara', lname:'Mendelssohn', email:'cool@gmail.com', phone:'2222222', password: 'password')
user5 = User.create(username:'aime888', fname:'Amy', lname:'Toby', email:'amytoby@gmail.com', phone:'3333333', password: 'password')
user6 = User.create(username:'opencafe', fname:'Nancy', lname:'King', email:'nancy@gmail.com', phone:'4444444', password: 'password')
demo = User.create(username:'demo user', fname:'Demo', lname:'User', email:'demo@gmail.com', phone:'909090', password: 'password')