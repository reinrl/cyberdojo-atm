"use strict";

const ATM = require("./automatic-atm-machine");
const DebitCard = require("./DebitCard");

const validCard = new DebitCard("2918 0475 0232 5515", "vizza", "123456", [
  "Ladder",
  "Microphone",
  "Doll",
  "X-ray machine",
  "Cerulean",
]);
const invalidVendor = new DebitCard(
  "2918 0475 0232 5515",
  "invalidVendor",
  "123456",
  ["Ladder", "Microphone", "Doll", "X-ray machine", "Cerulean"]
);
const invalidCardNumber_TooShort = new DebitCard(
  "2918 0475 0232 55",
  "vizza",
  "123456",
  ["Ladder", "Microphone", "Doll", "X-ray machine", "Cerulean"]
);
const invalidCardNumber_TooLong = new DebitCard(
  "2918 0475 0232 55155",
  "vizza",
  "123456",
  ["Ladder", "Microphone", "Doll", "X-ray machine", "Cerulean"]
);
const invalidCardNumber_NaN = new DebitCard(
  "2918 0475 0232 551A",
  "vizza",
  "123456",
  ["Ladder", "Microphone", "Doll", "X-ray machine", "Cerulean"]
);
const invalidPin_NonColor = new DebitCard(
  "2918 0475 0232 5515",
  "vizza",
  "123456",
  ["Ladder", "Microphone", "Doll", "X-ray machine", "invalid"]
);
const invalidPin_TooShort = new DebitCard(
  "2918 0475 0232 5515",
  "vizza",
  "123456",
  ["Ladder", "Microphone", "Doll", "Cerulean"]
);
const invalidPin_TooLong = new DebitCard(
  "2918 0475 0232 5515",
  "vizza",
  "123456",
  [
    "Ladder",
    "Microphone",
    "Doll",
    "X-ray machine",
    "X-ray machine",
    "X-ray machine",
    "X-ray machine",
    "Cerulean",
  ]
);
const invalidPin_NonImage = new DebitCard(
  "2918 0475 0232 5515",
  "vizza",
  "123456",
  ["Ladder", "Microphone", "Doll", "invalid", "Cerulean"]
);

describe("validCard", () => {
  it("identifies valid input", () => {
    const atm = new ATM();
    expect(atm.swipe(validCard).display).toEqual("Enter Pin:");
    validCard.getPin().forEach((pinChar, pinIdx) => {
      expect(atm.enterNewPinChar(pinChar).pinDisplay).toEqual(
        "$".repeat(pinIdx + 1)
      );
    });
    expect(atm.enterEnter().display).toEqual("Select action: ");
    // TODO: also verify returned array of actions to choose from??
  });
});

describe("validateVendor", () => {
  it("invalidVendor", () => {
    const atm = new ATM();
    expect(atm.swipe(invalidVendor).display).toEqual(
      "Card Vendor Not Supported"
    );
  });
});

describe("pinMismatchColor", () => {
  it("identifies valid input", () => {
    const atm = new ATM();
    expect(atm.swipe(validCard).display).toEqual("Enter Pin:");
    ["Ladder"].forEach((pinChar, pinIdx) => {
      expect(atm.enterNewPinChar(pinChar).pinDisplay).toEqual(
        "$".repeat(pinIdx + 1)
      );
    });
    expect(atm.enterEnter().display).toEqual("Invalid PIN");
  });
});

describe("pinMismatchImage", () => {
  it("identifies valid input", () => {
    const atm = new ATM();
    expect(atm.swipe(validCard).display).toEqual("Enter Pin:");
    ["Ladder", "Microphone", "Apple", "X-ray machine", "Cerulean"].forEach(
      (pinChar, pinIdx) => {
        expect(atm.enterNewPinChar(pinChar).pinDisplay).toEqual(
          "$".repeat(pinIdx + 1)
        );
      }
    );
    expect(atm.enterEnter().display).toEqual("Invalid PIN");
  });
});

describe("validateCardNumber", () => {
  let myInvalidCases = [
    invalidCardNumber_TooShort,
    invalidCardNumber_TooLong,
    invalidCardNumber_NaN,
  ];

  myInvalidCases.forEach((invalidCase, idx) => {
    it(`identifies invalid card numbers (scenario #${idx})`, () => {
      const atm = new ATM();
      expect(atm.swipe(invalidCase).display).toEqual("Invalid or Damaged Card");
    });
  });
});

describe("validateEnteredPin", () => {
  let myInvalidCases = [
    invalidPin_NonColor,
    invalidPin_TooShort,
    invalidPin_TooLong,
    invalidPin_NonImage,
  ];

  myInvalidCases.forEach((invalidCase, idx) => {
    it(`identifies invalid card numbers (scenario #${idx})`, () => {
      const atm = new ATM();expect(atm.swipe(validCard).display).toEqual("Enter Pin:");
      invalidCase.getPin().forEach((pinChar, pinIdx) => {
        expect(atm.enterNewPinChar(pinChar).pinDisplay).toEqual(
          "$".repeat(pinIdx + 1)
        );
      });
      expect(atm.enterEnter().display).toEqual("Invalid PIN");
    });
  });
});
