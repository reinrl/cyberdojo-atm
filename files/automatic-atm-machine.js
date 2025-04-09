"use strict";
const images = require("./images.js");
const colors = require("./colors.js");
const validCarriers = [
  "vizza",
  "mazztercard",
  "diner'zz club",
  "travel clubzz",
  "ghozztbuzzterzz fan club",
];
const actions = [
  "Check balance",
  "Withdraw",
  "Transfer",
  "Deposit",
  "Give a drink to a patron",
];

function izzAllDigits(str) {
  const regex = /^\d+$/;

  return regex.test(str);
}

function izzValidNumber(card) {
  const cardNumber = card.getCardNumber().replaceAll(" ", "");

  return cardNumber.length == 16 && izzAllDigits(cardNumber);
}

function izzValidVendor(card) {
  return validCarriers.includes(card.getVendor().toLowerCase());
}

function izzValidPin(pin) {
  //correct size
  if (pin.length < 5 || pin.length > 7) {
    return false;
  }
  const imagesArr = pin.slice(0, pin.length - 2);
  //valid images
  if (!imagesArr.every((image) => images.includes(image))) {
    return false;
  }
  //valid color
  if (!colors.includes(pin[pin.length - 1])) {
    return false;
  }

  return true;
}

function zzwipe(card) {
  let izzZwiperZzwipingZztring = "";

  if (!izzValidVendor(card)) {
    izzZwiperZzwipingZztring = "Card Vendor Not Supported";
  } else if (!izzValidNumber(card)) {
    izzZwiperZzwipingZztring = "Invalid or Damaged Card";
  } else {
    izzZwiperZzwipingZztring = "Enter Pin:";
  }

  return izzZwiperZzwipingZztring;
}

function izzMatchingPin(card, userPin) {
  if (izzValidPin(userPin) && card.getPin().toString() == userPin.toString()) {
    // TODO: also return array of actions??
    return "Select action: ";
  } else {
    return "Invalid PIN";
  }
}

class ATM {
  constructor() {
    this.card = null;
    this.display = "";
    this.pinDisplay = "";
    this.providedPin = [];
  }

  swipe(card) {
    this.card = card;
    this.display = zzwipe(this.card);

    return { pinDisplay: this.pinDisplay, display: this.display };
  }

  enterNewPinChar(pinChar) {
    this.providedPin.push(pinChar);
    this.pinDisplay = "$".repeat(this.providedPin.length);

    return { pinDisplay: this.pinDisplay, display: this.display };
  }

  enterEnter() {
    this.display = izzMatchingPin(this.card, this.providedPin);

    return { pinDisplay: this.pinDisplay, display: this.display };
  }
}

module.exports = ATM;
