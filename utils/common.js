
import CryptoJS from 'crypto-js'


exports.common=class {

    static getEncryptedPassword(text,secretkey){
        return CryptoJS.AES.encrypt(text,secretkey) ;
     }
     
     static getDecryptedPassword(text,secretkey){
        const decryted=CryptoJS.AES.decrypt(text,secretkey);
        return decryted.toString(CryptoJS.enc.Utf8)
     }

     static getProperties()
     {

   
     }
     static getDataFromJSONFile(){
      
     }

}