const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) { "use strict";
  // Змініть код лише під цим рядком
  //for (const ch of result.failure) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`${`<li class="text-warning">`}${result.failure}${`</li>`}`);
    // Змініть код лише над цим рядком
    console.log(failureItems);
  return failureItems;
}
}

const failuresList = makeList(result.failure);
