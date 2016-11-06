class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  normal() {
    this.quality -= 1;
    this.limitations();
  }

  expired() {
    this.quality -= 2;
  }

  brie() {
    this.quality += 1;
  }

  agedBrie() {
    this.quality += 2;
  }

  limitations() {
    // Checks if any values are outide the bounds and corrects them.
    if (this.quality <= 0) {
      this.quality = 0;
    } else if (this.quality >= 50) {
      this.quality = 50;
    }
  }

  tick() {
    this.sellIn -= 1;

    // this.sellIn <= 0 ? this.quality -= 1 : this.quality = this.quality;
    // // this.quality >= 50 ? this.quality = 50 : this.quality-= 1;
    // this.sellIn -= 1;
    // this.quality <= 0 ? this.quality = this.quality : this.quality -= 1;
    if (this.name == "normal" && this.sellIn > 0) {
      this.normal();
    } else if (this.name == "normal" && this.sellIn <= 0) {
      this.expired();
    } else if (this.name == "Aged Brie" && this.sellIn > 0) {
      this.brie();
    } else if (this.name == "Aged Brie" && this.sellIn <= 0) {
      this.agedBrie();
    }

    // if (this.sellIn <= 0) {
    //   this.quality -= 1;
    // }
    // if (this.name == "Conjured Mana Cake") {
    //   this.quality >= 50 ? this.quality = 50 : this.quality -= 2;
    // }

    // if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
    //   if (this.sellIn <= 10) {
    //     this.quality += 1;
    //   } else if (this.sellIn <= 5) {
    //     this.quality += 2;
    //   } else if (this.sellIn < 0) {
    //     this.quality = 0;
    //   } else {

    //   }
    // }

    // if (this.name == "Backstage passes to a TAFKAL80ETC concert" || this.name == "Aged Brie") {
    //   this.quality >= 50 ? this.quality = 50 : this.quality += 1;
    // }

    // if (this.name == "Sulfuras") {
    //   this.quality = 80;
    //   this.sellIn = null;
    // } else {
    //   this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1;
    //   this.quality >= 50 ? this.quality = 50 : this.quality-= 1;
      
    // }
    this.limitations();
  }

  // Make three methods that run, and if none of those is true, then tick runs...

}


export { GildedRose };




