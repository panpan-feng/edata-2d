<template>
  <div class="">
    <canvas ref="myCanvas" id="myCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
export default {
  name: "Canvas2d",
  components: {},
  data() {
    return {};
  },
  mounted() {
    /** @type {HTMLCanvasElement} */

    // 创建画布
    // const canvas = document.getElementById("myCanvas");
    const canvas = this.$refs.myCanvas;

    //获得 2d 上下文对象
    const ctx = canvas.getContext("2d");
    console.log(ctx);

    // 1.矩形
    // ctx.fillStyle = "#000";
    // ctx.fillRect(0, 0, 200, 100);
    // ctx.clearRect(15, 15, 50, 25);
    // ctx.strokeRect(0, 110, 200, 100);

    // 2.线
    // ctx.beginPath();
    // ctx.moveTo(10, 10);
    // ctx.lineTo(200, 50);
    // ctx.closePath();
    // ctx.stroke();

    // 3.三角形
    // ctx.fillStyle = "blue";
    // ctx.beginPath();
    // ctx.moveTo(10, 10);
    // ctx.lineTo(100, 10);
    // ctx.lineTo(100, 100);
    // ctx.closePath();
    // // ctx.stroke();
    // ctx.fill();

    // 4.六边形
    // ctx.beginPath();
    // ctx.moveTo(100, 50);
    // ctx.lineTo(150, 100);
    // ctx.lineTo(100, 150);
    // ctx.lineTo(50, 100);
    // ctx.closePath();
    // // ctx.fill();
    // // ctx.setLineDash([10, 5]);  // [实线长度, 间隙长度]
    // // ctx.lineDashOffset = -0;
    // ctx.stroke();

    // 5.圆弧
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.arcTo(200, 50, 200, 200, 100);
    // ctx.lineTo(200, 200);
    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 20;
    // ctx.lineCap = "round";
    // ctx.stroke();

    // 6.文本
    // ctx.strokeRect(0, 0, 300, 300);
    // ctx.font = "60px sans-serif";
    // ctx.textAlign = "center";
    // ctx.fillText("天若有情", 10, 100);
    // ctx.strokeText("天若有情", 10, 200);

    // ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
    // ctx.save(); // 保存默认状态

    // setTimeout(() => {
    //   ctx.fillStyle = "pink"; // 在原有配置基础上对颜色做改变
    //   ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
    // }, 1000);

    // setTimeout(() => {
    //   ctx.restore(); // 重新加载之前的颜色状态
    //   ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形
    // }, 2000);

    // ctx.save(); //保存坐原点平移之前的状态
    // ctx.translate(100, 100);
    // ctx.strokeRect(0, 0, 100, 100);
    // ctx.restore(); //恢复到最初状态
    // ctx.translate(220, 220);
    // ctx.fillRect(0, 0, 100, 100);

    ctx.beginPath();
    ctx.arc(20,20, 100, 0, Math.PI * 2);
    ctx.clip();
 
    ctx.fillStyle = "pink";
    ctx.fillRect(20, 20, 100,100);
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
