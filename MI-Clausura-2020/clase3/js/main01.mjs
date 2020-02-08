import { fragmentShader } from "./shaders/basicShader/fragmentShader.mjs";
import { vertexShader } from "./shaders/basicShader/vertexShader.mjs";
import { initShaderProgram } from "./shaders/methods.mjs";
import { initBuffers } from "./shaders/basicShader/init.mjs";
import { drawScene } from "./scenes/Scene01.mjs";

function main(params) {
    const canvas = document.querySelector("#gl");
    const gl = canvas.getContext("webgl");
    try {
        if (!gl) {
            throw `no se pudo inicializar WebGl.
                    O su navegador no soporta WebGl`;
        }
        const shaderProgram = initShaderProgram(
            gl,
            vertexShader,
            fragmentShader
        );
        const programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition")
            },
            uniformLocations:{
                projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
                modelViewMatrixs: gl.getUniformLocation(shaderProgram, "uModelViewMatrix")
            }

        };
        const buffer=initBuffers(gl);
        drawScene(gl,programInfo,buffers);

    } catch (error) { }

}
window.onload = main;