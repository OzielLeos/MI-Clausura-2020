/**
 * 
 * @param gl 
 * @param vsSource  codigo del vertex shader
 * @param fsSource  codigo del fragment shader
 */
export function initShaderProgram(gl,vsSource,fsSource) {
    
    const shaderProgram = gl.createProgram();
    
    try {
        const vertexShader= loadShader(
            gl,
            gl.VERTEX_SHADER,
            vsSource
        );
        const fragmentShader= loadShader(
            gl,
            gl.FRAGMENT_SHADER,
            fsSource
        );
            
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        if (!gl.getProgramParameter(shaderProgram,gl.LINK_STATUS)) {
            throw `No se pudo inicializar el shader program
            ${gl.getProgramInfoLog(shaderProgram)}`;
            
        }
    } catch (error) {
        console.error(error);
        return null;
    }
    return shaderProgram;
}
function loadShader( 
    gl,
    type,
    source) {
        const shader= gl.createShader(type);
        try {
            gl.shaderSource(shader,source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(
                shader,
                gl.COMPILE_STATUS)) {
                    throw`Error compilando el shader
                    ${gl.getShaderInfoLog(shader)}`;
                
            }
        } catch (error) {
            console.error(error);
            gl.deleteShader(shader);
            return  null;
        }
    return shader;
}