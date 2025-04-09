In the bustling streets of Havana Township, you a prococious software developer have found yourself in an unexpected predicament.
On your trip to the Claremont Pub for your usual supper, you were suddenly accosted by a group of muggers, targeting you for your stylish taste in western wear.
 
They swiftly relieved you of your wallet, leaving you penniless and in a state of despair. The shock of the incident weighs heavily, but being determined not to let this setback ruin your evening, 
you have decided to continue to the pub, hoping to find some solace in a warm meal.
 
Upon arriving at the Claremont Pub, your hopes were dashed once more. The ATM outside the pub was out of order. The screen flickered with error messages, and the machine refused to dispense any cash.
Frustrated but undeterred, your mind began to race with ideas. As a skilled software developer, you saw an opportunity to turn your misfortune into a challenge. You have decided to use your expertise to fix the ATM.
 
Enthused by your fervor for undertaking this project, the pub owner has offered you a bottomless mug of brain juice (PBR or Milwaukee's Best, your choice) while you work. You begin.
 
-------------
 
# Requirements
 
High Level
Create software for running the operations of an ATM for user interaction.
 
Data Definitions (for purpose of this exercise)
Debit Card
- identified by a 16 digit number
- categorized by a specific card vendor, including Visa, MasterCard, Diner's Club, Travel Club, Ghostbusters Fan Club
- tied to a specific bank account by the bank account number
- secured via PIN
 
Bank Account
- identified by a unique bank account number - 6 digits in length
- has a balance of $0 by default
 
PIN
- consists of 4 to 6 images chosen from a predefined list followed by a color (see data samples)
 
# Functionality
 
Access
1 users swipe their debit card
2 -> If valid card - ATM prompts the user with "Enter Pin:"
  OR
  -> If invalid card vendor - ATM displays "Card Vendor Not Supported" and requires the user to swipe their card again
  OR
  -> If invalid card number - ATM displays "Invalid or Damaged Card" and requires the user to swipe their card again
3 user enters their pin, as each entry is chosen by the user the display shows a "$" instead of the character for their security and privacy
4 -> if valid - ATM displays a list of actions the user may take (see Actions)
  OR
  -> if invalid - ATM displays "Invalid PIN" and requires the user to swipe their card again before trying again
 
Actions
 
Check Balance
TBD
 
Withdraw
TBD
 
Transfer
TBD
 
Deposit
TBD
 
Give a Drink to a Patron
TBD
 
~~Data Samples~~
 
Valid Cards
2918 0475 0232 5515 - Visa
bank account - 123456
pin - ["Ladder", "Microphone", "Doll", "X-ray machine", "Cerulean"]
 
8425 7212 9566 7222 - MasterCard
bank account - 222333
pin - ["Fork", "X-ray machine", "Ladder", "Yarn", "Airplane", "Pencil", "Lavender"]
 
7467 8514 6083 8038 - Diner's Club
bank account - 980654
pin - ["Flag", "Bicycle", "Helicopter", "Clock", "Magenta"]
 
1344 2378 1002 9469 - Travel Club
bank account - 467913
pin - ["Elephant", "Xylophone", "Guitar", "Key", "Vermilion"]
 
1778 5558 1883 0745 - Ghostbusters Fan Club
bank account - 843691
pin - ["Lantern", "Desk", "Guitar", "Engine", "Microphone", "Vase", "Fuchsia"]
 
4653 0138 9082 0450 - Ghostbusters Fan Club
bank account - 745096
pin - ["Telephone", "Iron", "Shoe", "Basket", "Vase", "Periwinkle"]
 
0841 5429 9205 3646 - MasterCard
bank account - 111116
pin - ["Desk", "Basket", "Radio", "Ice cube", "Aqua"]
 
4918 0275 6800 5555 - Travel Club
bank account - 852258
pin - ["Umbrella", "Zebra", "Jellyfish", "Book", "Chair", "Vermilion"]
 
3081 2980 7605 0355 - Ghostbusters Fan Club
bank account - 753861
pin - ["Basket", "Ink pen", "Envelope", "Owl", "Pencil", "Lamp", "Cerulean"]
 
9885 0558 5526 6386 - Visa
bank account - 025964
pin - ["Fork", "Bicycle", "Kite", "Helmet", "Basket", "Ink pen", "Fuchsia"]
 
Colors - see colors.js
- Cerulean
- Chartreuse
- Periwinkle
- Mauve
- Teal
- Amber
- Turquoise
- Magenta
- Indigo
- Lavender
- Crimson
- Saffron
- Fuchsia
- Vermilion
- Aqua
 
Images - see images.js
- Apple
- Bicycle
- Chair
- Desk
- Elephant
- Fork
- Guitar
- Hat
- Ice cream cone
- Jacket
- Kite
- Lamp
- Mirror
- Notebook
- Orange
- Piano
- Quilt
- Radio
- Shoe
- Table
- Umbrella
- Vase
- Watch
- Xylophone
- Yacht
- Zipper
- Backpack
- Candle
- Door
- Envelope
- Fan
- Globe
- Hammer
- Ink pen
- Jar
- Key
- Leaf
- Mug
- Necklace
- Owl
- Pillow
- Quilt
- Ring
- Scissors
- Telephone
- Umbrella
- Violin
- Wallet
- X-ray machine
- Yarn
- Zebra
- Airplane
- Book
- Camera
- Drum
- Egg
- Feather
- Glasses
- Helicopter
- Iron
- Jellyfish
- Knife
- Ladder
- Microphone
- Newspaper
- Octopus
- Paintbrush
- Quilt
- Robot
- Spoon
- Tree
- Unicorn
- Vacuum cleaner
- Window
- Xylophone
- Yarn
- Zebra
- Anchor
- Basket
- Clock
- Doll
- Engine
- Flag
- Garden hose
- Helmet
- Ice cube
- Juice box
- Kite
- Lantern
- Magnet
- Nail
- Oyster
- Pencil
- Quilt
- Rope
- Suitcase
- Television
- Umbrella
- Vase
- Whistle