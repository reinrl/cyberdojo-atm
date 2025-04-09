class DebitCard {
  constructor(cardNumber, vendor, bankAccountNumber, pin) {
    this.cardNumber = cardNumber;
    this.vendor = vendor;
    this.bankAccountNumber = bankAccountNumber;
    this.pin = pin;
  }

  getCardNumber() {
    return this.cardNumber;
  }

  getVendor() {
    return this.vendor;
  }

  getBankAccountNumber() {
    return this.bankAccountNumber;
  }

  getPin() {
    return this.pin;
  }
}

module.exports = DebitCard;
