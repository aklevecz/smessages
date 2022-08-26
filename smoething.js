// 112.9402 px
// 78.0432 px
const qrcode = require("qrcode");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

const qrDims = { w: 75, h: 78 };
const posterDimes = { w: 1275, h: 1725 };
const multipler = 1275 / 306;

const canvas = createCanvas(posterDimes.w, posterDimes.h);
const ctx = canvas.getContext("2d");

// const poster = fs.readFileSync("./smessage-white.png");

const baseUrl = "https://smessages.yaytso.art";
const urls = ["one", "two", "three", "four"];

urls.forEach((url) => {
  const qrCanvas = createCanvas(75 * multipler, 78 * multipler);

  qrcode.toCanvas(
    qrCanvas,
    `${baseUrl}?id=${url}`,
    {
      width: qrDims.w * multipler * 1.25,
      color: {
        dark: "#ffffff",
        light: "#0000",
      },
    },
    (err) => {
      console.log(err);
    }
  );
  loadImage("smessage-white-noqr.png").then((image) => {
    ctx.drawImage(image, 0, 0, posterDimes.w, posterDimes.h);
    ctx.drawImage(qrCanvas, 430, 605);
    const buffer = canvas.toBuffer();
    fs.writeFileSync(`images/${url}.png`, buffer);
    //   console.log(buffer);
  });
});

// 306 414
