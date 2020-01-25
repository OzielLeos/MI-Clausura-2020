

// import {Color, ColorModel} from "./models/colorModel.mjs"
import { ColorModel } from "./models/colorModel.mjs";// lo puso el intellesens
import { red } from "./colorsLibrary.mjs";
import * as Colors from "./colorsLibrary.mjs";// como si fuera una libreria
/**
 * con slash asterisco asterisco se pueden documentar los parametros
 * @param {*} params 
 */
function main(params) {
 
//  var canvas = document.querySelector("#gl");
//  let canvas = document.querySelector("#gl");
 const canvas = document.querySelector("#gl");
//  const cColor = new ColorModel(0.5,1,1,1);
 const cColor =Colors.blue;// new ColorModel(0.5,1,1,1);
        try{
            const gl = canvas.getContext("webgl");
            if (gl=== null) {
                throw "No se inicializo WebGl."
            }
            

            gl.clearColor(cColor.r,cColor.g,cColor.b,cColor.a);
            gl.clear(gl.COLOR_BUFFER_BIT)//especificar que buffer es el que limpiara la pantalla
        } catch(error){
            console.error(error);
        }

}
window.onload = main;



















