// 归一化函数
function normalized(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }

  const middle = Math.sqrt(sum);

  for (let i = 0; i < arr.length; i++) {
    arr[i] /= middle;
  }
}

// 叉积函数，获取法向量
function cross(a, b) {
  return new Float32Array([
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ])
}

// 点积函数，获取投影长度
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

// 向量差
function minus(a, b) {
  return new Float32Array([
    a[0] - b[0],
    a[1] - b[1],
    a[2] - b[2],
  ])
}

// 视图矩阵获取
function getViewMatrix(sourceX, sourceY, sourceZ, targetX, targetY, targetZ, upx, upy, upz) {
  // 视点
  const source = new Float32Array([sourceX, sourceY, sourceZ]);
  // 目标点
  const target = new Float32Array([targetX, targetY, targetZ]);
  // 上方向
  const up = new Float32Array([upx, upy, upz]);

  const z = minus(target, source);

  normalized(z);
  normalized(up);
  
  const x = cross(up, z);

  normalized(x);
  const y = cross(z, x);

  return new Float32Array([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -dot(x, source), -dot(y, source), -dot(z, source), 1,
  ])
}
