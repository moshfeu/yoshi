async function printAndExitOnErrors(fn) {
  try {
    return await fn();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = {
  printAndExitOnErrors,
};
