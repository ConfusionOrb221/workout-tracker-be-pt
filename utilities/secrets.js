require('dotenv').config();

module.exports = {
    jwtSecret: `${process.env.JWT_SECRET}` || "Peanut_Butter_Jelly_Time",
    jwtPublic: `${process.env.JWT_PUBLIC}` || "Test"
};