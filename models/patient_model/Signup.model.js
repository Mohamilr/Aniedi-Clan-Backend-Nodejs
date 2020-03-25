import { sequelize, Sequelize } from '..';

export default sequelize.define('Patient', {
    patient_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        unique: true
    },
    title: {
        type: Sequelize.STRING(50)
    },
    patient_fullname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING(50)
    },
    genotype: {
        type: Sequelize.STRING(50),
        defaultValue: null
    },
    marital_status: {
        type: Sequelize.STRING(50)
    },
    birth_date: {
        type: Sequelize.DATE
    },
    email: {
        type: Sequelize.STRING(300),
        defaultValue: null,
        unique: true
    },
    password: {
        type: Sequelize.STRING(225)
    },
    address: {
        type: Sequelize.STRING(300)
    },
    state: {
        type: Sequelize.STRING(225)
    },
    country: {
        type: Sequelize.STRING(225)
    },
    phone: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        unique: true
    },
    admission_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    discharged_date: {
        type: Sequelize.DATE,
        defaultValue: null
    },
    hmo_card_no: {
        type: Sequelize.STRING(20),
        defaultValue: null,
        unique: true
    },
    purpose: {
        type: Sequelize.STRING(40)
    },
    photo: {
        type: Sequelize.STRING(1000),
        defaultValue: null
    },
    doctor_id: {
        type: Sequelize.INTEGER(11),
        defaultValue: null
    },
    hmo_id: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        unique: true
    },
    hmo_name: {
        type: Sequelize.STRING(225),
        defaultValue: null
    },
    status: {
        type: Sequelize.STRING(20),
        defaultValue: null
    },
    time_in: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Patient'
});
