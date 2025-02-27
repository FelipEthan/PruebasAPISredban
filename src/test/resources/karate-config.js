function fn() {
    var config = {
        // URL base con solo el host, sin el endpoint
        baseUrl: 'https://api.qa.sandboxhubredeban.com:9445',

        // Configuración SSL para consumir la API
        ssl: {
            key: 'C:\\Users\\afquimbayo.ext\\Documents\\EntreCuentas\\bancoparra.com.es 4.pem',  // Ruta al archivo PEM con la clave privada
            cert: 'C:\\Users\\afquimbayo.ext\\Documents\\EntreCuentas\\bancoparra.com.es', // Ruta al archivo CER con el certificado
        },

        timeout: 50000

    };

    return config;
}
