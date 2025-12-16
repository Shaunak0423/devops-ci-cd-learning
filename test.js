console.log("Running tests...");

// fake test
if (2 + 2 !== 5) {
  console.error("Test failed");
  process.exit(1);
}

console.log("All tests passed ✅");
