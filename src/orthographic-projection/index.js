// 获取正射投影矩阵
function getOrthoMatrix(left, right, top, bottom, near, far) {
  return new Float32Array([
    2.0 / (right - left), 0.0, 0.0, 0.0,
    0.0, 2.0 / (top - bottom), 0.0, 0.0,
    0.0, 0.0, 2.0 / (near - far), 0.0,
    -(right + left) / (right - left), -(top + bottom) / (top - bottom), -(near + far) / (near - far), 1.0,
  ])
}
