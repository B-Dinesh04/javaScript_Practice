const v1 = "v0.12.999999.2";
const v2 = "v0.14.1.1";

const newV1 = v1
  .split(".")
  .filter((v1) => v1 >= 0)
  .join("");
const newV2 = v2
  .split(".")
  .filter((v2) => v2 >= 0)
  .join("");

if (newV1 > newV2) {
  console.log(v1);
} else {
  console.log(v2);
}
