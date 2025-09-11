// 获取正射投影矩阵
function getOrthoMatrix(left, right, top, bottom, near, far) {
  return new Float32Array([
    2.0 / (right - left), 0.0, 0.0, 0.0,
    0.0, 2.0 / (top - bottom), 0.0, 0.0,
    0.0, 0.0, 2.0 / (near - far), 0.0,
    -(right + left) / (right - left), -(top + bottom) / (top - bottom), -(near + far) / (near - far), 1.0,
  ])
}

// 获取透视投影矩阵
function getPerspective(fov, aspect, far, near) {
  fov = fov * Math.PI / 180;
  return new Float32Array([
    1.0 / (aspect * Math.tan(fov / 2)), 0.0, 0.0, 0.0,
    0.0, 1.0 / (Math.tan(fov / 2)), 0.0, 0.0,
    0.0, 0.0, -(far + near) / (far - near), -(2 * far * near) / (far - near),
    0.0, 0.0, -1.0, 0.0,
  ])
}
