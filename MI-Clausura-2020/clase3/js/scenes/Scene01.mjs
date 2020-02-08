export function drawScene(gl, ProgramInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOER_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    const fielOfView = (45 * Math.PI) / 180;
    const aspect = gl.canvas.clientWidh / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fielOfView, aspect, zNear, zFar);
    const modelViewMatrix = mat4.create();
    mat4.translate(
        modelViewMatrix,
        modelViewMatrix,
        [0.0,0.0,-6.0]
    );
    {
        const numComponents =2;
        const type = gl.FLOAT;
        const normalize=false;
        const stride =0;
        const offset=0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.positions);
        gl.vertexAttribPointer(ProgramInfo.attribLocations.vertexPositions, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(ProgramInfo.attribLocations.vertexPositions);

    }
    gl.useProgram(ProgramInfo.program);
    gl.uniformMatrix4fv(ProgramInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(ProgramInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);
    {
        const offset =0;
        const vertexCount=4;
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    }
}