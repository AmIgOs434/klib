const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.BIGINT, primaryKey: true},
     
    login: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
})


const Glav_text = sequelize.define('glav_text', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text1:{type: DataTypes.STRING},
    text2:{type: DataTypes.STRING},
    video:{type: DataTypes.STRING},
    
})

const Kategorii = sequelize.define('kategorii', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    svg:{type: DataTypes.STRING,defaultValue:'f71b6569-a885-4eb2-b779-d6738cfdf644.svg'},
    title: {type: DataTypes.STRING ,defaultValue:'Новая категория'},
    description:{type: DataTypes.STRING,defaultValue:'Новая категория'},
})



const O_sebe = sequelize.define('o_sebe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    img:{type: DataTypes.STRING}
})

const O_sebe_info = sequelize.define('o_sebe_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING,defaultValue:'Новая категория'},
    description:{type: DataTypes.STRING,defaultValue:'Новая категория Новая категория Новая категория Новая категория'},
    oSebeId:{type: DataTypes.INTEGER,defaultValue:1},
})





const Uslugi = sequelize.define('uslugi', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    svg:{type: DataTypes.STRING,defaultValue:'sss.svg'},
    img:{type: DataTypes.STRING,defaultValue:'67193ed8-d1eb-4651-b6b6-367012e5fa6b.png'},
  name:{type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
    description:{type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
})

const Uslugi_price = sequelize.define('uslugi_price', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
    price:{type: DataTypes.STRING, allowNull: false,defaultValue:1920},
})





const Komplex_predl = sequelize.define('komplex_predl', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Komplex_predl_info = sequelize.define('komplex_predl_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false,defaultValue:'67193ed8-d1eb-4651-b6b6-367012e5fa6b.png'},
    title: {type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
    name: {type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
    name1: {type: DataTypes.STRING,  allowNull: false,defaultValue:'Новая категория'},
    name2: {type: DataTypes.STRING,  allowNull: false,defaultValue:'Новая категория'},
    title2: {type: DataTypes.STRING,  allowNull: false,defaultValue:'Новая категория'},
})

const Komplex_predl_info_desc = sequelize.define('komplex_predl_info_desc', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
    description: {type: DataTypes.STRING,allowNull: false,defaultValue:'Новая категория'},
})





const Actii = sequelize.define('actii', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false,defaultValue:'Новая категория'},
    img: {type: DataTypes.STRING, allowNull: false,defaultValue:'67193ed8-d1eb-4651-b6b6-367012e5fa6b.png'},
})

const Actii_info = sequelize.define('actii_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  allowNull: false,defaultValue:'Новая категория'},
    description: {type: DataTypes.STRING,  allowNull: false,defaultValue:'Новая категория'},

})






const Otzivi = sequelize.define('otzivi', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  allowNull: false},
})
const Otzivi_info = sequelize.define('otzivi_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false,defaultValue:'67193ed8-d1eb-4651-b6b6-367012e5fa6b.png'},
    name: {type: DataTypes.STRING,allowNull: false,defaultValue:'Имя'},
    star: {type: DataTypes.INTEGER, allowNull: false,defaultValue:3},
    description: {type: DataTypes.STRING,  allowNull: false,defaultValue:'Тело отзыва Тело отзыва Тело отзыва Тело отзыва'},
})






const Vizit = sequelize.define('vizit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})




const Sertificats = sequelize.define('sertificats', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})
const Sertificats_info = sequelize.define('sertificats_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false, defaultValue:'Name'},
    img: {type: DataTypes.STRING, allowNull: false, defaultValue:'7b6cf9d7-740d-414b-9c4c-8ed5cc10055c.png'},
})



const Kontacts = sequelize.define('kontacts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false},
    uslugi:{type: DataTypes.STRING, allowNull: false},
    adress:{type: DataTypes.STRING, allowNull: false},
    
})

const Kontacts_phone = sequelize.define('kontacts_phone', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone:{type: DataTypes.STRING, allowNull: false,defaultValue:'+7 499 460-43-15'},
})






O_sebe.hasMany(O_sebe_info , {as: 'O_sebe_info'})
O_sebe_info.belongsTo(O_sebe)

Uslugi.hasOne(Uslugi_price, {as: 'Uslugi_price'})
Uslugi_price.belongsTo(Uslugi)

Komplex_predl.hasMany(Komplex_predl_info, {as: 'Komplex_predl_info'})

Komplex_predl_info.hasMany(Komplex_predl_info_desc, {as: 'Komplex_predl_info_desc'})
Komplex_predl_info_desc.belongsTo(Komplex_predl_info)

Actii.hasMany(Actii_info, {as: 'Actii_info'})
Actii_info.belongsTo(Actii)


Otzivi.hasMany(Otzivi_info, {as: 'Otzivi_info'});
Otzivi_info.belongsTo(Otzivi)

Sertificats.hasMany(Sertificats_info, {as: 'Sertificats_info'});
Sertificats_info.belongsTo(Sertificats)

Kontacts.hasMany(Kontacts_phone, {as: 'Kontacts_phone'});
Kontacts_phone.belongsTo(Kontacts)


module.exports = {
    User,
    Glav_text,
    Kategorii,
    O_sebe,
    O_sebe_info,
    Komplex_predl,
    Komplex_predl_info,
    Komplex_predl_info_desc,
    Actii,
    Actii_info,
    Vizit,
    Sertificats,
    Sertificats_info,
    Kontacts,
    Kontacts_phone,
    Uslugi,
    Uslugi_price,
    Otzivi,
    Otzivi_info
}
