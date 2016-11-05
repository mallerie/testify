import { GildedRose } from "../src/js/hard";

class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = Math.abs(quality);
  }

  tick() {
    if (item.name = "Conjured Mana Cake") {
      this.quality >= 50 ? this.quality = 50 : this.quality -= 2;
    }

    if (item.name = "Backstage passes to a TAFKAL80ETC concert") {
      if (this.sellIn <= 10) {
        this.quality += 1;
      } else if (this.sellIn <= 5) {
        this.quality += 2;
      } else if (this.sellIn < 0) {
        this.quality = 0;
      }
    }

    if (item.name = "Backstage passes to a TAFKAL80ETC concert" || item.name = "Aged Brie") {
      this.quality >= 50 ? this.quality = 50 : this.quality += 1;
    }

    if (item.name = "Sulfuras") {
      this.quality = 80;
      this.sellIn = null;
    } else {
      this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1;
      this.quality >= 50 ? this.quality = 50 : this.quality-= 1;
      
    }


  }

}

var cake = new GildedRose(5, 10, 'Conjured Mana Cake');
cake.tick();



