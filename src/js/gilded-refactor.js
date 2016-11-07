class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  normal() {
    this.quality -= 1;
  }

  perishing() {
    this.quality -= 2;
  }

  brie() {
    this.quality += 1;
  }

  sulfuras() {
    this.sellIn += 1;
  }

  backstage() {
    if (this.sellIn >= 10) {
      this.quality +=1;
    } else if (this.sellIn < 10 && this.sellIn >= 5) {
      this.quality +=2;
    } else if (this.sellIn < 5 && this.sellIn >= 0) {
      this.quality += 3;
    } else if (this.sellIn < 0) {
      this.quality = 0;
    }
  }

  limitations() {
    // Checks if any values are outide the bounds and corrects them.
    if (this.name == "Sulfuras, Hand of Ragnaros") {
      this.quality = 80;
    } else if (this.quality <= 0) {
      this.quality = 0;
    } else if (this.quality >= 50) {
      this.quality = 50;
    }
  }

  tick() {
    this.sellIn -= 1;

    if (this.name == "normal" && this.sellIn > 0) {
      this.normal();
    } else if (this.name == "normal" && this.sellIn <= 0) {
      this.perishing();
    } else if (this.name == "Aged Brie" && this.sellIn > 0) {
      this.brie();
    } else if (this.name == "Aged Brie" && this.sellIn <= 0) {
      this.brie();
      this.brie();
    } else if (this.name == "Sulfuras, Hand of Ragnaros") {
      this.sulfuras();
    } else if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
      this.backstage();
    } else if (this.name == "Conjured Mana Cake" && this.sellIn > 0) {
      this.perishing();
    } else if (this.name == "Conjured Mana Cake" && this.sellIn <= 0) {
      this.perishing();
      this.perishing();
    }
    this.limitations();
  }
}

export { GildedRose };




