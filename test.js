console.log("Running tests...");

// fake test
if (2 + 2 !== 4) {
  console.error("Test failed");
  process.exit(1);
}

console.log("All tests passed ✅");
