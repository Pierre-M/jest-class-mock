module.exports = {
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec).+(ts|tsx|js)"],
}
