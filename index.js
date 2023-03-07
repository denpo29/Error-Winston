const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
logger.error("¡Has ingresado un valor equivocado!")

const sumaEnteros = val => {
    if (typeof val === "number"){
        return val + 3
    }
    throw new Error ("¡Has ingresado un valor equivocado!")
}

const numero = "25"

try{
    const prueba = sumaEnteros(numero)
    console.log(prueba)
}catch (e){
    console.log(e)
}