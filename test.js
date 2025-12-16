console.log("Running tests...");

// fake test
if (2 + 2 !== 5) {
  console.error("Test failed");
  process.exit(1);
}

if (5 + 5 !==10){
    console.log("Test Passes")
    process.exit(1)
}

console.log("All tests passed ✅");
