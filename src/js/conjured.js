import { GildedRose } from "../src/js/hard";

class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = Math.abs(quality);
  }

  tick() {
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1;
    this.quality >= 50 ? this.quality = 50 : this.quality-= 1;
  }

}

var cake = new GildedRose(5, 10, 'Conjured Mana Cake');
cake.tick();



